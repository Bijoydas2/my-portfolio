import React from "react";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profile from '../assets/profile.png'

const Hero = () => {
  return (
    <section className="w-11/12 mx-auto px-6 mt-16 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-indigo-600 mb-4">
          Bijoy Kumar Das Lipon
        </h1>

        {/* Typewriter Effect for job titles */}
        <p className="text-emerald-500 text-xl font-semibold mb-3 h-8">
          <Typewriter
            words={[
              "Mern Stack Developer",
              "React Enthusiast",
              
            ]}
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        <p className="text-gray-400 mb-6 max-w-md">
          Passionate developer focused on building performant and user-friendly web applications.
          Experienced in React, Node.js, and MongoDB.
        </p>

        {/* Social links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6 text-2xl">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1877F2] hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className=" hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume button */}
         <div className="flex space-x-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Download Resume
          </a>

          <button
          
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Right content - Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Bijoy Das"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
