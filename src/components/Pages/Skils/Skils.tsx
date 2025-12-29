import { skills, tags } from "../../../constant"
import Container from "../../common/Container"
import Title from "../../common/Title"

const SkillsSection = () => {
  return (
    <Container>
      <div>
        <Title label="My Skills"></Title>
      </div>
      <div className="  text-white p-10  flex flex-col md:flex-row items-center gap-12 border-2">
        {/* SECTION GAUCHE : Nuage de Tags */}
        <div className="flex flex-wrap justify-end gap-3 w-full md:w-1/2 p-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-header px-4 py-4 rounded-lg text-sm font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* SECTION DROITE : Barres de Progression */}
        <div className="w-full md:w-1/2 space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-semibold">{skill.name}</span>
              </div>

              {/* Conteneur de la barre */}
              <div className="relative w-full h-2 bg-gray-700">
                {/* Remplissage de la barre */}
                <div
                  style={{ width: `${skill.level}%` }}
                  className="absolute top-0 left-0 h-full bg-primary  transition-all duration-1000"
                />

                {/* Tooltip du pourcentage */}
                <div
                  style={{ left: `${skill.level}%` }}
                  className="absolute -top-8 -translate-x-1/2 bg-primary  text-[10px] px-2 py-1 rounded-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[rgb(0,79,255)]"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default SkillsSection
