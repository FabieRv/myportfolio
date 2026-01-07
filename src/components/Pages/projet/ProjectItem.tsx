"use client";

import React from "react";
import Button from "../../common/Button";
import { BiVideo } from "react-icons/bi";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
    repoLink?: string; // Optional repository link
    image: string;
    alt: string;
  };
  isReversed: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, isReversed }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-md group">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-pink-100 text-pink-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.demoLink} target="_blank" rel="noreferrer">
            <Button
              label="Demo"
              variant="primary-dark"
              className="flex items-center gap-2"
            >
              <BiVideo className="text-white text-lg" />
            </Button>
          </a>
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noreferrer">
              <Button
                label="Code"
                variant="outline-purple"
                className="flex items-center gap-2"
              >
                {/* You can add a code icon here, e.g., <Code className="text-purple-700 text-lg" /> */}
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;