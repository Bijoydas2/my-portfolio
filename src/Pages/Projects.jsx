import React from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../../public/project.json";

const Projects = () => {
  return (
    <section id="projects" className="w-11/12 max-w-7xl mx-auto mt-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Projects</h2>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
