"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";
import ExperienceTimeline from "./ExperienceTimeline"; // Import the new timeline component

const ResumeSection = () => {
  const experiences = [
    {
      year: "2025 — Present",
      title: "FrontEnd Developer",
      place: "Cherry Tech&Design",
      desc: "Stage Développeur React.JS, contribuant à la création d'interfaces utilisateur modernes et réactives.",
    },
    {
      year: "2024 — 2025",
      title: "Backend Developper",
      place: "Tolia Madagascar",
      desc: `Stage Développeur Symfony pendant 6 mois, travaillant sur des projets commerciaux comme "Soary Project".`,
    },
    {
      year: "2024 — 2025",
      title: "Backend Developper",
      place: "MalagasyCraft",
      desc: `Stage Développeur Laravel pendant 3 mois, avec le projet "MalagasyCraft".`,
    },
    {
      year: "2023 — 2024",
      title: "Projet Personnel",
      place: "E-Parle",
      desc: `Projet E-parle, une plateforme de cours en ligne, gérant le développement complet du backend.`,
    },
  ];

  return (
    <section id="Experience" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mb-12">
          <Title label="Experiences"></Title>
        </div>

        <ExperienceTimeline experiences={experiences} />
      </Container>
    </section>
  );
};

export default ResumeSection;