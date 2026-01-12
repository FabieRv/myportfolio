"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Container from "../../common/Container"

export interface Experience {
  year: string
  title: string
  place: string
  desc: string
}

const ExperienceTimeline = ({
  experiences = [],
}: {
  experiences?: Experience[]
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!experiences || experiences.length === 0) {
    return <div className="text-center py-10 text-gray-400">Chargement...</div>
  }

  const total = experiences.length
  const angleStep = 35 // Écartement entre les dates

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total)

  const activeExp = experiences[activeIndex]
  const bigYear = activeExp?.year?.split(" ")[0] || ""

  return (
    <Container>
      <div className="relative w-full max-w-7xl mx-auto h-[650px] flex flex-col items-center justify-center overflow-hidden bg-white">
        {/* CONTENEUR DE LA ROTATION */}
        <motion.div
          className="absolute top-[-150px] w-[1600px] h-[1600px] rounded-full pointer-events-none"
          animate={{
            rotate: -(activeIndex * angleStep) + ((total - 1) * angleStep) / 2,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
          {/* 1. CERCLE EXTÉRIEUR (PLUS GRAS) */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-200" />

          {/* 2. CERCLE INTÉRIEUR (DOUBLÉ) */}
          <div className="absolute inset-10 rounded-full border border-gray-100" />

          {/* REPERES ET ANNÉES */}
          {experiences.map((exp, i) => {
            const rotation = i * angleStep
            return (
              <div
                key={i}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col items-center"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Le trait vertical (plus épais/gras) */}
                <div className="w-0.5 h-16 bg-gray-300" />

                <motion.span
                  animate={{
                    rotate:
                      activeIndex * angleStep -
                      ((total - 1) * angleStep) / 2 -
                      rotation,
                    opacity: activeIndex === i ? 0 : 1,
                    scale: activeIndex === i ? 1.2 : 1,
                  }}
                  className="mt-6 text-sm font-bold text-gray-400"
                >
                  {exp.year.split(" ")[0]}
                </motion.span>
              </div>
            )
          })}
        </motion.div>

        {/* CONTENU CENTRAL FIXE */}
        <div className="relative z-10 flex flex-col items-center text-center mt-10">
          {/* ANNÉE GÉANTE */}
          <motion.h2
            key={`year-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[140px] md:text-[160px] font-bold text-gray-900 tracking-tighter leading-none mb-8"
          >
            {bigYear}
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center max-w-2xl px-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 uppercase tracking-tight">
                {activeExp.title}
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                <span className="text-gray-900 font-semibold block mb-2">
                  {activeExp.place}
                </span>
                {activeExp.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex items-center gap-12 mt-16">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all group"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs text-gray-400 font-bold">
                  {">"}
                </span>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all group"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ExperienceTimeline
