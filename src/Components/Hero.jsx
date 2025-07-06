import React from "react";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-11/12 max-w-7xl mx-auto px-6 mt-20 lg:mt-0 md:mt-0 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">
          Bijoy Kumar Das Lipon
        </h1>

        {/* Typewriter */}
        <p className="text-emerald-500 text-xl font-semibold mb-3 min-h-[32px]">
          <Typewriter
            words={["MERN Stack Developer", "React Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Description */}
        <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
          Passionate developer focused on building performant and user-friendly web applications.
          Experienced in React, Node.js, and MongoDB.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6 text-2xl">
          <a
            href="https://www.facebook.com/bijoy.d.l.2024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1877F2] hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Bijoydas2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/uc?export=download&id=1skVydIMRI4JjTuN-Zisx4EFB-01EoWGC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right content - Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Bijoy Das"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
