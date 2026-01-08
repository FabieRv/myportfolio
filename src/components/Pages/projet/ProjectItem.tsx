"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { projets } from "../../../constant/index"
import { BiVideo, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import Container from "../../common/Container"

const Project = () => {
  // Référence pour contrôler le défilement horizontal
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full  ">
      {/* Boutons de Navigation (Icônes Suivant/Précédent) */}

      {/* Conteneur de défilement sans barre de scroll visible */}
      <Container className="px-0! py-0!">
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto hide-scrollbar scroll-smooth"
        >
          <div className="relative min-w-[2200px] h-[600px] mx-auto px-40">
            {/* Timeline Sinusoïdale Bleue */}
            <svg
              className="absolute top-1/2 left-0 w-full h-[220px] -translate-y-1/2 pointer-events-none opacity-40"
              viewBox="0 0 2200 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1500,100 C1650,200 1850,0 2000,100"
                stroke="#0066FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative flex justify-around items-center h-full gap-20">
              {projets.map((project, index) => {
                const isHigh = index % 2 === 0

                return (
                  <div
                    key={project.id}
                    className="relative flex flex-col items-center w-[300px]"
                  >
                    {/* ZONE HAUTE (Bosse) */}
                    <div className="h-[250px] flex flex-col justify-end items-center text-center pb-8">
                      {isHigh ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          className="space-y-3"
                        >
                          <span className="inline-block px-3 py-1 border border-blue rounded-full text-[8px] font-bold uppercase tracking-widest text-blue">
                            {index + 1} / {projets.length}
                          </span>
                          <h3 className="text-3xl text-blue-700 italic font-serif   font-bold leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-snug font-serif ">
                            {project.description}
                          </p>
                          <a
                            href={project.demoLink}
                            className="inline-flex items-center gap-1 text-[10px] font-bold border-b border-black pb-0.5 hover:text-blue-600 uppercase"
                          >
                            <BiVideo /> Demo
                          </a>
                        </motion.div>
                      ) : (
                        <motion.div className="w-full shadow-md rounded-sm overflow-hidden ring-1 ring-black/5">
                          <img
                            src={project.image.replace("../../../public/", "/")}
                            className="w-full h-40 object-cover"
                            alt={project.alt}
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* POINT D'ANCRAGE SUR LA COURBE */}
                    <div className="w-2.5 h-2.5 bg-black rounded-full z-20 shadow-sm" />

                    {/* ZONE BASSE (Creux) */}
                    <div className="h-[250px] flex flex-col justify-start items-center text-center pt-8">
                      {!isHigh ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          className="space-y-3"
                        >
                          <span className="inline-block px-3 py-1 border border-black rounded-full text-[8px] font-bold uppercase tracking-widest text-black">
                            {index + 1} / {projets.length}
                          </span>
                          <h3 className="text-3xl text-blue-700 italic font-serif   font-bold leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-snug font-serif ">
                            {project.description}
                          </p>
                          <a
                            href={project.demoLink}
                            className="inline-flex items-center gap-1 text-[10px] font-bold border-b border-black pb-0.5 hover:text-blue-600 uppercase"
                          >
                            <BiVideo /> Demo
                          </a>
                        </motion.div>
                      ) : (
                        <motion.div className="w-full shadow-md rounded-sm overflow-hidden ring-1 ring-black/5">
                          <img
                            src={project.image.replace("../../../public/", "/")}
                            className="w-full h-40 object-cover"
                            alt={project.alt}
                          />
                        </motion.div>
                      )}
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

export default Project