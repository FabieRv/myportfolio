"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"

import { educationData } from "../../constant"
import Container from "../common/Container"
import Title from "../common/Title"

gsap.registerPlugin(ScrollTrigger)

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = timelineRef.current

    if (!container) return

    const items = container.querySelectorAll(".timeline-item")
    const dots = container.querySelectorAll(".timeline-dot")
    const line = container.querySelector(".timeline-line")

    // Animation de la ligne
    if (line) {
      gsap.fromTo(
        line,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      )
    }

    // Animation de chaque formation
    items.forEach((item, index) => {
      const contentLeft = item.querySelector(".timeline-left")
      const contentRight = item.querySelector(".timeline-right")
      const dot = dots[index]

      // Partie gauche
      if (contentLeft) {
        gsap.fromTo(
          contentLeft,
          {
            opacity: 0,
            x: -60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Partie droite
      if (contentRight) {
        gsap.fromTo(
          contentRight,
          {
            opacity: 0,
            x: 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animation du point
      if (dot) {
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill()
      })
    }
  }, [])

  return (
    <Container>
      <div
        ref={timelineRef}
        className="max-w-4xl mx-auto p-8 font-sans"
        id="Formations"
      >
        <Title label="Mes formations" />

        <div className="relative mt-12">
          {/* Ligne centrale */}
          <div
            className="
              timeline-line
              absolute
              left-1/2
              top-0
              h-full
              -translate-x-1/2
              border-l-2
              border-dotted
              border-gray-300
            "
          />

          {educationData.map((item, index) => (
            <div
              key={index}
              className="
                timeline-item
                relative
                mb-12
                flex
                items-start
                justify-between
                w-full
                min-h-[100px]
              "
            >
              {/* GAUCHE */}
              <div
                className="
                  timeline-left
                  w-[45%]
                  text-right
                  pt-1
                "
              >
                <h4 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.school}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>

              {/* POINT CENTRAL */}
              <div
                className="
                  absolute
                  left-1/2
                  top-2
                  z-10
                  -translate-x-1/2
                "
              >
                <div
                  className={`
                    timeline-dot
                    w-5
                    h-5
                    rounded-full
                    border-4
                    border-white
                    shadow-md
                    ${
                      index % 2 === 0
                        ? "bg-blue-400"
                        : "bg-gray-700"
                    }
                  `}
                />
              </div>

              {/* DROITE */}
              <div
                className="
                  timeline-right
                  w-[45%]
                  text-left
                  pt-1
                "
              >
                <h4 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.title}
                </h4>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Timeline