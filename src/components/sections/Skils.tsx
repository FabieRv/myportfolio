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
    <div className="skill-card bg-[#F3F4F6] backdrop-blur-md border border-gray-200 rounded-3xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill: any, i: number) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:scale-110 transition">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <span className="text-xs text-gray-700 text-center">
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
    <Container className="mb-20 " id="Skils">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 ">
          Mes compétences
        </h2>
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
  )
}
