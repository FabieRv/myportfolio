"use client"

import type { FC } from "react"
import {
  skills,
  frontendSkills,
  backendSkills,
  mobileSkills,
  databaseSkills,
  toolsSkills,
} from "../../../constant"
import Container from "../../../common/Container"
import Title from "../../../common/Title"

const SkillsSection: FC = () => {
  const techMapping: Record<string, any[]> = {
    BackEnd: backendSkills,
    FrontEnd: frontendSkills,
    Mobile: mobileSkills,
    DataBase: databaseSkills,
    Outils: toolsSkills,
  }

  return (
    <section className="py-12 bg-gray-50/50">
      <Container>
        <div className="text-center mb-10">
          <Title label="My Skills" />
        </div>

        {/* Flexbox centralisé - Cartes courtes et compactes */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[450px] border border-gray-100 rounded-2xl shadow-sm p-5 transition-all hover:shadow-md hover:-translate-y-1"
            >
              {/* HEADER : Titre de la catégorie */}
              <div className="mb-4">
                <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">
                  {skill.name}
                </h3>
              </div>

              {/* LISTE DES TECHNOS : Style Badges compacts  */}
              <div className="flex flex-wrap gap-2 mb-6">
                {techMapping[skill.name]?.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2 py-1 rounded-lg"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-6 h-6 "
                    />
                    <span className="text-[14px] font-bold text-gray-600 uppercase">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* PROGRESS BAR & LEVEL EN BAS */}
              {/* FOOTER DE CARTE : ESPACEMENT ASSURÉ PAR FLEX + GAP */}
              <div className="mt-auto flex flex-col gap-2">
                {/* Ligne d'infos : Level et Pourcentage */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Level
                  </span>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {skill.level}%
                  </span>
                </div>

                {/* Barre de progression */}
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection
