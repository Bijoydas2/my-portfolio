import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const ProjectCard = ({ id, title, description, features, tags, liveLink, githubLink, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-200 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition mb-10">
      {/* Image */}
      <div className="w-full md:w-1/2">
        {images && images.length > 0 ? (
          <img
            src={images[currentIndex]}
            alt={`Project ${title} slide ${currentIndex + 1}`}
            className="w-full h-60 object-cover rounded-md transition duration-500"
          />
        ) : (
          <div className="w-full h-60 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-indigo-600">{title}</h3>
        <p className="text-gray-400">{description}</p>

        {/* Features */}
        <ul className="list-disc list-inside text-sm text-gray-400">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-sm">{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-2 rounded-md font-medium transition"
          >
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-md font-medium transition"
          >
            GitHub
          </a>
          <Link
            to={`/projects/${id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-md font-medium transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
