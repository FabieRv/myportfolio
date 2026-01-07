import {
  skills,
  frontendSkills,
  backendSkills,
  mobileSkills,
  databaseSkills,
  toolsSkills,
} from "../../../constant"
import Container from "../../common/Container"
import Title from "../../common/Title"

const SkillsSection = () => {
  const techMapping = {
    BackEnd: backendSkills,
    FrontEnd: frontendSkills,
    Mobile: mobileSkills,
    DataBase: databaseSkills,
    Outils: toolsSkills,
  }

  return (
    <div className=" mb-10">
      <Container>
        <div className=" text-center">
          <Title label="My Skills" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col border bg-[#F4EDEA] transition-all duration-300 gap-4 p-4"
            >
              {/* TITRE DE LA CATEGORIE */}
              <h3 className="font-header text-xl font-bold uppercase tracking-tight text-gray-700">
                {skill.name}
              </h3>

              {/* GRILLE DES LOGOS (4 par ligne max) */}
              <div className="flex flex-wrap gap-4">
                {techMapping[skill.name]?.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center ">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-contain rounded-full"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/40"
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* PIED DE CARTE : POURCENTAGE ET BARRE */}
              <div className="mt-auto">
                <div className="flex justify-between items-end mt-3">
                  <span className="text-xl text-white">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-[#5DA9E9] rounded-full transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default SkillsSection
