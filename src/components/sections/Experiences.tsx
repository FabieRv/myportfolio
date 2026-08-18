"use client"

import { experiences } from "../../constant/index"
import Container from "../common/Container"
import Title from "../common/Title"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      const dates =
        gsap.utils.toArray<HTMLElement>(
          ".experience-date"
        )

      dates.forEach((date) => {
        const direction =
          date.dataset.direction === "left"
            ? -1
            : 1

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
              toggleActions:
                "play none none reverse",
            },
          }
        )
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <Container
      className="text-lg"
      id="Experience"
    >
      <div ref={sectionRef}>

        {/* TITRE */}
        <div className="text-center">
          <Title label="Expériences" />

          <div className="flex justify-center items-center mb-10">
            <div className="h-px w-20 bg-gray-300"></div>

            <div className="mx-4 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">
              <span className="transform -rotate-45">
                ➤
              </span>
            </div>

            <div className="h-px w-20 bg-gray-300"></div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Ligne centrale */}
          <div
            className="
              absolute
              left-4
              md:left-1/2
              transform
              md:-translate-x-1/2
              h-full
              w-0.5
              bg-gray-300
            "
          ></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              /*
               * EVEN :
               * contenu gauche + date droite
               *
               * ODD :
               * date gauche + contenu droite
               */
              const dateDirection =
                isEven ? "right" : "left"

              return (
                <div
                  key={index}
                  className={`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    md:items-center
                    justify-between
                    w-full
                    ${
                      isEven
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }
                  `}
                >

                  {/* CONTENU */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">

                    <div
                      className={`
                        flex
                        flex-col
                        text-left
                        ${
                          isEven
                            ? "md:text-right"
                            : "md:text-left"
                        }
                      `}
                    >

                      {/* DATE MOBILE */}
                      <div className="inline-flex md:hidden mb-4">

                        <div
                          className="
                            experience-date
                            relative
                            bg-primary
                            text-white
                            text-[10px]
                            font-bold
                            px-5
                            py-2.5
                            rounded-sm
                            shadow-md
                            uppercase
                            tracking-wide
                          "
                          data-direction="right"
                        >
                          {exp.year}

                          <div
                            className="
                              absolute
                              bottom-3
                              -left-1
                              w-3
                              h-3
                              bg-primary
                              rotate-45
                            "
                          ></div>
                        </div>

                      </div>

                      {/* TITRE */}
                      <h1
                        className="
                          text-sm
                          lg:text-lg
                          font-primary
                          font-bold
                          uppercase
                          tracking-wider
                        "
                      >
                        {exp.title}
                      </h1>

                      {/* LIEU */}
                      <h3
                        className="
                          text-xs
                          lg:text-[14px]
                          font-bold
                          uppercase
                          text-[#334155]
                          mb-2
                          tracking-widest
                        "
                      >
                        {exp.place}
                      </h3>

                      {/* DESCRIPTION 1 */}
                      <p
                        style={{
                          color: "#60A5FA",
                        }}
                        className="
                          text-[11px]
                          lg:text-sm
                          font-semibold
                          italic
                        "
                      >
                        {exp.desc1}
                      </p>

                      {/* DESCRIPTION 2 */}
                      {exp.desc2 && (
                        <p
                          className="
                            text-gray-900
                            text-[16px]
                            lg:text-sm
                            leading-relaxed
                            mt-1
                            font-primary
                          "
                        >
                          {exp.desc2.map(
                            (line, i) => (
                              <span
                                key={i}
                                className="block"
                              >
                                {line}
                              </span>
                            )
                          )}
                        </p>
                      )}

                    </div>
                  </div>

                  {/* POINT CENTRAL */}
                  <div
                    className="
                      absolute
                      left-4
                      md:left-1/2
                      transform
                      -translate-x-1/2
                      w-7
                      h-7
                      bg-gray-400
                      border-4
                      border-white
                      rounded-full
                      flex
                      items-center
                      justify-center
                      z-10
                      shadow-sm
                    "
                  >
                    <span
                      className="
                        text-gray-50
                        text-[10px]
                        font-bold
                      "
                    >
                      {exp.icon}
                    </span>
                  </div>

                  {/* DATE DESKTOP */}
                  <div
                    className="
                      hidden
                      md:block
                      w-[45%]
                    "
                  >
                    <div
                      className={`
                        flex
                        ${
                          isEven
                            ? "justify-start"
                            : "justify-end"
                        }
                      `}
                    >

                      <div
                        className="
                          experience-date
                          relative
                          bg-primary
                          text-white
                          text-[9px]
                          md:text-[10px]
                          lg:text-[12px]
                          font-bold
                          px-5
                          py-2.5
                          rounded-sm
                          shadow-md
                          whitespace-nowrap
                          uppercase
                          tracking-wide
                        "
                        data-direction={
                          dateDirection
                        }
                      >
                        {exp.year}

                        {/* FLÈCHE DU BADGE */}
                        <div
                          className={`
                            absolute
                            top-1/2
                            -translate-y-1/2
                            w-3
                            h-3
                            bg-primary
                            rotate-45
                            ${
                              isEven
                                ? "-left-1"
                                : "-right-1"
                            }
                          `}
                        ></div>

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
  )
}

export default Experiences