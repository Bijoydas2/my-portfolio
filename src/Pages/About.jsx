import React from "react";
import img from "../assets/img1.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 max-w-7xl  mx-auto px-4  text-center"
    >   <h2 className="text-4xl font-bold text-indigo-600 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={img}
            alt="Bijoy Das"
            className="rounded-xl   object-cover shadow-xl"
          />
        </div>

        {/* Right - Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
        
          <p className="text-gray-500 mb-4 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-emerald-500">
              Bijoy Kumar Das Lipon
            </span>
            , a passionate full stack web developer who loves writing clean,
            scalable code and building seamless user experiences.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            My main stack is{" "}
            <span className="font-medium text-indigo-500">
              MongoDB, Express.js, React, and Node.js
            </span>
            . I enjoy turning complex problems into elegant solutions, and I’m
            always eager to learn new technologies.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether it’s front-end interaction or back-end logic — I enjoy both
            sides of development and love collaborating on meaningful projects
            that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
