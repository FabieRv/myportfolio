import Container from "../../common/Container"
import Title from "../../common/Title"

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
  ]

  const education = [
    {
      year: "2024 — 2025",
      title: "Bachelor Degree",
      place: "IS-INFO ",
      desc: "Institut Superieur d'Informatique",
    },
    {
      year: "2015 — 2016",
      title: "Baccalaureat",
      place: "Lycée Marovoay",
      desc: "Excepteur sint occaecat cupidatat non proident.",
    },
  ]

  return (
    <section className="bg-white">
      <Container>
        {/* Header très serré */}
        <div>
          <Title label=" History"></Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          {/* --- SECTION EXPERIENCE --- */}
          <div className="space-y-8">
            <h3 className="font-header text-[11px] text-primary uppercase tracking-[0.4em] mb-6 block font-bold">
              Experience
            </h3>
            {experiences.map((item, index) => (
              <div
                key={index}
                className="group grid grid-cols-[100px_1fr] gap-4 items-start border-b border-gray-50 pb-6 last:border-0"
              >
                <span className="font-header text-xs text-gray-400 pt-1.5">
                  {item.year}
                </span>
                <div>
                  <h4 className="font-primary font-bold text-xl uppercase tracking-tight group-hover:text-primary transition-colors leading-none mb-1">
                    {item.title}
                  </h4>
                  <p className="font-italic text-sm text-gray-400 italic mb-2">
                    {item.place}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed font-primary">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* --- SECTION EDUCATION --- */}
          <div className="space-y-8">
            <h3 className="font-header text-[11px] text-primary uppercase tracking-[0.4em] mb-6 block font-bold">
              Education
            </h3>
            {education.map((item, index) => (
              <div
                key={index}
                className="group grid grid-cols-[100px_1fr] gap-4 items-start border-b border-gray-50 pb-6 last:border-0"
              >
                <span className="font-header text-xs text-gray-400 pt-1.5">
                  {item.year}
                </span>
                <div>
                  <h4 className="font-primary font-bold text-xl uppercase tracking-tight group-hover:text-primary transition-colors leading-none mb-1">
                    {item.title}
                  </h4>
                  <p className="font-italic text-sm text-gray-400 italic mb-2">
                    {item.place}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed font-primary">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResumeSection
