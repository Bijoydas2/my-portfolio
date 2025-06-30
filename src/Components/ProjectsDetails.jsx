import React from "react";
import { useParams,  Link } from "react-router"; 
import projects from "../../public/project.json";
import { FaBug, FaExternalLinkAlt, FaRocket, FaTools } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  

  const project = projects.find((p) => p.id === id);

  if (!project)
    return <p className="text-center text-red-600 mt-20">Project not found</p>;

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-20 space-y-6">
     <Link to='/'>
      <button
          className="btn btn-sm btn-outline mb-4"
      >
        ← Back to Projects
      </button>
      </Link>

      <h2 className="text-4xl font-bold text-indigo-600">{project.title}</h2>
      <p className="text-gray-400 ">{project.description}</p>

      {/* Tech Stack */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaTools className="text-indigo-500" />
          Tech Stack:
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaExternalLinkAlt className="text-green-600" />
          Live & GitHub:
        </h3>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-success mr-3"
        >
          Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-neutral"
        >
          Frontend Code
        </a>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaBug className="text-red-500" />
          Challenges Faced:
        </h3>
        <ul className="list-disc list-inside text-gray-400 ">
          {project.challenges.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Future Plans */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaRocket className="text-yellow-500" />
          Future Plans:
        </h3>
        <ul className="list-disc list-inside text-gray-400">
          {project.futurePlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
