"use client"

import type { FC } from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

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
        <div className="text-center mb-8">
          <Title label={t("My Skills")} />
        </div>

        {/* Grille Flex optimisée */}
        <div className="flex flex-wrap justify-center gap-5 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              /* Largeur fixée à 320px pour un aspect plus "moyen" et compact */
              className="flex flex-col w-full sm:w-[320px] border border-gray-200 rounded-xl shadow-sm p-4 bg-white transition-all hover:shadow-md hover:-translate-y-1"
            >
              {/* HEADER CATEGORIE - Plus compact */}
              <div className="mb-4 border-b border-gray-100 pb-2">
                <h3 className="text-lg  font-primary font-bold text-gray-800 uppercase tracking-tighter">
                  {t(skill.name)}
                </h3>
              </div>

              {/* LISTE DES TECHNOS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {techMapping[skill.name]?.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    /* Taille réduite pour densifier le contenu */
                    className="flex flex-col items-center justify-center gap-1.5 bg-blue-50/50 border border-blue-100 p-2 rounded-lg hover:bg-white hover:border-blue-300 transition-all w-[75px]"
                  >
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        /* Image parfaitement ronde et centrée */
                        className="w-7 h-7 object-contain rounded-full"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase text-center leading-none">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* PROGRESS BAR - Plus fine */}
              <div className="mt-auto pt-2 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-400 uppercase">
                    {t("Level")}
                  </span>
                  <p className="text-[15px] font-black text-blue-600">
                    {skill.level}%
                  </p>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden ">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
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
