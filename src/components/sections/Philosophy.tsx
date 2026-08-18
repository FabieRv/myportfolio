"use client"

import gsap from "gsap"
import React, { useLayoutEffect, useRef } from "react"

import { philosophyData } from "../../constant"
import Title from "../common/Title"

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      // Récupération de toutes les flèches
      const arrows =
        gsap.utils.toArray<HTMLElement>(
          ".philosophy-arrow"
        )

      arrows.forEach((arrow) => {
        // Animation de la flèche
        const animation = gsap.to(arrow, {
          x: 8,
          scale: 1.15,
          duration: 0.35,
          ease: "power2.out",
          paused: true,
        })

        const parent = arrow.parentElement

        if (!parent) return

        // Quand la souris entre
        const handleMouseEnter = () => {
          animation.play()
        }

        // Quand la souris sort
        const handleMouseLeave = () => {
          animation.reverse()
        }

        parent.addEventListener(
          "mouseenter",
          handleMouseEnter
        )

        parent.addEventListener(
          "mouseleave",
          handleMouseLeave
        )
      })
    }, section)

    // Nettoyage
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#F3F4F6] px-6 py-10 overflow-hidden"
      id="Passions"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITRE */}
        <div className="mb-12 text-center">
          <Title label="Mes Passions" />
        </div>

        {/* LISTE */}
        <div className="flex justify-center">
          <div className="max-w-3xl w-full space-y-6">

            {philosophyData.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  cursor-pointer
                "
              >

                {/* FLÈCHE ANIMÉE */}
                <span
                  className="
                    philosophy-arrow
                    inline-block
                    text-[#2563EB]
                    mr-5
                    text-xl
                    font-bold
                    flex-shrink-0
                  "
                >
                  →
                </span>

                {/* CONTENU */}
                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-[#1E293B]
                    "
                  >
                    {item.title} :
                  </h3>

                  <p
                    className="
                      text-[#475569]
                      text-sm
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Philosophy