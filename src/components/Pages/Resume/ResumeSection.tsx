"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";

const ResumeSection = () => {
  const experiences = [
    {
      year: "Novembre 2025 — Present",
      title: "FrontEnd Developer",
      place: "Cherry Tech&Design",
      desc: "Stage Develppeur React.JS ",
    },
    {
      year: "2024 — 2025", // Corrected year
      title: "Backend Developper", // Corrected title casing
      place: "Tolia Madagascar",
      desc: `Stage Develppeur symfony pendant 6mois avec des projet commercial "Soary Project"`,
    },
    {
      year: "2024 — 2025",
      title: "Backend Developper",
      place: "MalagasyCraft",
      desc: ` Stage Develppeur Laravel pendant 3 mois avec de projet "MalagsyCraft"`,
    },
    {
      year: "2024-2023",
      title: "Projet Personnel",
      place: "E-Parle",
      desc: `Projet E-parle, un plateform de faire une cours en ligne`,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mb-12">
          <Title label="Experiences"></Title>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-start w-full max-w-4xl gap-8">
            <div className="flex flex-wrap gap-x-8 gap-y-10 w-full">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="group relative pl-6 border-l-4 border-primary-dark hover:border-primary transition-colors duration-300 w-full md:w-[calc(50%-1rem)]"
                >
                  <span className="absolute -left-2 top-0 w-4 h-4 bg-primary-dark rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                  <p className="font-primary text-sm text-gray-500 mb-1">
                    {item.year}
                  </p>
                  <h4 className="font-primary font-bold text-xl text-gray-900 leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="font-primary text-base italic text-gray-600 mb-2">
                    {item.place}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-primary">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResumeSection;