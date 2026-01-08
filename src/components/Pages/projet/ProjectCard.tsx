"use client";

import React from "react";
import Button from "../../common/Button";
import { BiVideo, BiCodeAlt } from "react-icons/bi"; // Icons for demo and code links

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
    repoLink: string;
    image: string;
    alt: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image.replace("../../../public/", "/")}
          alt={project.alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/300x200"; // Fallback image
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-header text-2xl font-bold tracking-tight text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              label="Live Preview"
              icon={<BiVideo size={20} />}
              variant="primary-dark"
              className="w-full"
            />
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              label="View Code"
              icon={<BiCodeAlt size={20} />}
              variant="outline-purple"
              className="w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;