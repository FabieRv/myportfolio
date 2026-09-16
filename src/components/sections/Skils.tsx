import {
  Design,
  backendSkills,
  databaseSkills,
  frontendSkills,
  mobileSkills,
  toolsSkills,
} from "../../constant"
import Container from "../common/Container"

const SkillCard = ({ title, skills }: any) => {
  return (
    <div className="skill-card bg-[#C9F0FF]/30 backdrop-blur-md border border-[#5DA9E9]/25 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#2563eb]/40 hover:-translate-y-1.5 transition-all duration-300">
      <h3 className="text-lg font-bold mb-5 text-gray-800 tracking-wide flex items-center justify-between">
        <span>{title}</span>
       
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill: any, i: number) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            {/* Conteneur de l'icône réharmonisé */}
            <div className="w-14 h-14 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-xs group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-9 h-9 object-contain drop-shadow-xs"
              />
            </div>

            <span className="text-xs font-medium text-gray-700 text-center group-hover:text-[#2563eb] transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-12 bg-linear-to-b from-transparent via-[#C9F0FF]/15 to-transparent">
      <Container className="mb-10" id="skills">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Mes compétences
          </h2>
          <div className="w-12 h-1 bg-[#2563eb] mx-auto mt-3 rounded-full" />
        </div>

        {/* SKILL CARDS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Mobile" skills={mobileSkills} />
          <SkillCard title="Base de données" skills={databaseSkills} />
          <SkillCard title="Outils" skills={toolsSkills} />
          <SkillCard title="Design" skills={Design} />
        </div>
      </Container>
    </section>
  )
}