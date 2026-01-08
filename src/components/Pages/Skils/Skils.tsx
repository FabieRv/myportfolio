"use client"

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
import BackendIcon from "../../icons/Backend"
import RoullerIcon from "../../icons/Rouller"
import { Smartphone, Database, Wrench } from "lucide-react" // Importing icons from lucide-react

const SkillsSection = () => {
  const techMapping = {
    BackEnd: backendSkills,
    FrontEnd: frontendSkills,
    Mobile: mobileSkills,
    DataBase: databaseSkills,
    Outils: toolsSkills,
  }

  const categoryIcons: { [key: string]: React.ElementType } = {
    BackEnd: BackendIcon,
    FrontEnd: RoullerIcon,
    Mobile: Smartphone,
    DataBase: Database,
    Outils: Wrench,
  }

  return (
    <div className="mb-10">
      <Container>
        <div className="text-center">
          <Title label="My Skills" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = categoryIcons[skill.name]
            return (
              <div
                key={index}
                className="flex flex-col bg-white border border-gray-100 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                {/* TITRE DE LA CATEGORIE AVEC ICONE */}
                <div className="flex items-center gap-3 mb-4">
                  {IconComponent && (
                    <IconComponent className="text-primary" size={34} />
                  )}
                  <h3 className="font-header text-2xl font-bold tracking-tight text-gray-800">
                    {skill.name}
                  </h3>
                </div>

                {/* GRILLE DES LOGOS */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 mb-6">
                  {techMapping[skill.name]?.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center w-16"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full overflow-hidden shadow-sm">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/40" // Fallback image
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600 uppercase text-center mt-1 leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* PIED DE CARTE : POURCENTAGE ET BARRE */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-lg font-bold text-gray-800">
                      Level
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full bg-[#5DA9E9] rounded-full transition-all duration-1000 ease-out"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default SkillsSection
