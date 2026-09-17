"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2 } from "lucide-react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import type { ExperienceItem } from "../../constant"
import Container from "../common/Container"
import Title from "../common/Title"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const rawExperiences = t("experiences.items", { returnObjects: true })
  const experiences: ExperienceItem[] = Array.isArray(rawExperiences)
    ? (rawExperiences as ExperienceItem[])
    : []

  useGSAP(
    () => {
      const dates = gsap.utils.toArray<HTMLElement>(".experience-date")

      dates.forEach((date) => {
        const direction = date.dataset.direction === "left" ? -1 : 1

        gsap.fromTo(
          date,
          {
            opacity: 0,
            x: direction * 80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: date,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <div className="bg-[#F3F4F6] pb-10">
      <Container className="text-lg" id="experience">
        <div ref={sectionRef}>
          <div className="text-center">
          <Title label={t("experiences.sectionTitle")} />

            <div className="flex justify-center items-center mb-10">
              <div className="h-px w-20 bg-gray-300" />
              <div className="mx-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs shadow-sm">
                <span className="transform -rotate-45" aria-hidden="true">
                  ➤
                </span>
              </div>
              <div className="h-px w-20 bg-gray-300" />
            </div>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0
                const dateDirection = isEven ? "right" : "left"
                const uniqueKey = `${exp.year}-${index}`

                return (
                  <div
                    key={uniqueKey}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* CONTENU */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0">
                      <div
                        className={`flex flex-col text-left ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {/* DATE MOBILE */}
                        <div className="inline-flex md:hidden mb-4">
                          <div
                            className="experience-date relative bg-primary text-white text-[10px] font-bold px-5 py-2.5 rounded-sm shadow-md uppercase tracking-wide"
                            data-direction="right"
                          >
                            {exp.year}
                            <div className="absolute bottom-3 -left-1 w-3 h-3 bg-primary rotate-45" />
                          </div>
                        </div>

                        {/* TITRE */}
                        <h3 className="text-sm lg:text-lg font-primary font-bold uppercase tracking-wider text-gray-900">
                          {exp.title}
                        </h3>

                        {/* LIEU */}
                        <h4 className="text-xs lg:text-[14px] font-bold uppercase text-slate-600 mb-1 tracking-widest">
                          {exp.place}
                        </h4>

                        {/* DESCRIPTION 1 */}
                        <p className="text-blue-500 text-[11px] lg:text-sm font-semibold italic mb-3">
                          {exp.desc1}
                        </p>

                        {/* DESCRIPTION 2 (AVEC PUCES) */}
                        {exp.desc2 && (
                          <ul
                            className={`space-y-2.5 ${
                              isEven ? "md:items-end" : "md:items-start"
                            }`}
                          >
                            {Array.isArray(exp.desc2) ? (
                              exp.desc2.map((line, i) => (
                                <li
                                  key={i}
                                  className={`flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed ${
                                    isEven
                                      ? "md:flex-row-reverse md:text-right"
                                      : "md:flex-row md:text-left"
                                  }`}
                                >
                                  <div className="p-0.5 rounded-full bg-blue-50 shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <span>{line}</span>
                                </li>
                              ))
                            ) : (
                              <li
                                className={`flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed ${
                                  isEven
                                    ? "md:flex-row-reverse md:text-right"
                                    : "md:flex-row md:text-left"
                                }`}
                              >
                                <div className="p-0.5 rounded-full bg-blue-50 shrink-0 mt-0.5">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                </div>
                                <span>{exp.desc2}</span>
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* POINT CENTRAL */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center z-10 shadow-md">
                      <span className="text-white text-[10px] font-bold">
                        {exp.icon}
                      </span>
                    </div>

                    {/* DATE DESKTOP */}
                    <div className="hidden md:block w-[45%]">
                      <div
                        className={`flex ${
                          isEven ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className="experience-date relative bg-primary text-white text-[9px] md:text-[10px] lg:text-[12px] font-bold px-5 py-2.5 rounded-sm shadow-md whitespace-nowrap uppercase tracking-wide"
                          data-direction={dateDirection}
                        >
                          {exp.year}

                          {/* FLÈCHE DU BADGE */}
                          <div
                            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45 ${
                              isEven ? "-left-1" : "-right-1"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Experiences