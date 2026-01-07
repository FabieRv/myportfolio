"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";

const ResumeSection = () => {
  const experiences = [
    {
      year: "Novembre 2025 — Present",
      title: "FrondEnd Developer",
      place: "Cherry Tech&Design",
      desc: "Stage Develppeur React.JS ",
    },
    {
      year: "2024 — 2025",
      title: "Backend Developper",
      place: "Tolia Madagascar",
      desc: `Stage Develppeur symfony pendant 6mois avec des projet commercial "Soary Project"`,
    },
    {
      year: "2024 — 2025",
      title: "Backend Developper",
      place: "MalagasyCraft",
      desc: ` Stage Develppeur Laravel pendant 3 mois avec de projet "MalagsyCraft"`,
    },
  ];

  // The education data is no longer needed as the section is being removed.
  // const education = [
  //   {
  //     year: "2024 — 2025",
  //     title: "Bachelor Degree",
  //     place: "IS-INFO ",
  //     desc: "Institut Superieur d'Informatique",
  //   },
  //   {
  //     year: "2015 — 2016",
  //     title: "Baccalaureat",
  //     place: "Lycée Marovoay",
  //     desc: "Excepteur sint occaecat cupidatat non proident.",
  //   },
  // ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mb-12">
          <Title label="History"></Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* --- SECTION EXPERIENCE --- */}
          <div className="space-y-10">
            <h3 className="font-header text-2xl font-bold text-gray-800 uppercase tracking-wide mb-6">
              Experience
            </h3>
            {experiences.map((item, index) => (
              <div
                key={index}
                className="group relative pl-6 border-l-4 border-primary-dark hover:border-primary transition-colors duration-300"
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

          {/* --- SECTION EDUCATION --- */}
          {/* This section has been removed as per your request. */}
        </div>
      </Container>
    </section>
  );
};

export default ResumeSection;