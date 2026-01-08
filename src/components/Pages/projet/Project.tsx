"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";
import { projets } from "../../../constant/index";
import ProjectCard from "./ProjectCard"; // Import the new ProjectCard component

function Project() {
  return (
    <div id="Projects">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <Title label="My Projects"></Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Project;