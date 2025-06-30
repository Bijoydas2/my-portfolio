import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNpm,
  FaSass,
  FaFigma,
  FaWind,
  FaBolt,
} from "react-icons/fa";

const skillsData = [
  { title: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { title: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { title: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { title: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { title: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { title: "MongoDB", icon: <FaDatabase className="text-[#47A248]" /> },
  { title: "GitHub", icon: <FaGithub className="text-[#9CA3AF]" /> },
  { title: "Tailwind CSS", icon: <FaWind className="text-[#38B2AC]" /> },   // alternative
  { title: "Firebase", icon: <FaBolt className="text-[#FFCA28]" /> },
  { title: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto mt-20">
      <h2 className="text-4xl font-bold text-indigo-600 text-center mb-12">
        My Skills
      </h2>

      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={60}
        className="flex space-x-16"
      > <div className="flex gap-16 px-4">
          {skillsData.map(({ title, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-default"
              title={title}
            >
              <div className="text-4xl">{icon}</div>
              <p className="text-gray-400 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
