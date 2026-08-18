import { useEffect, useRef } from "react"
import Button from "../common/Button"
import Container from "../common/Container"

import { gsap } from "gsap"
import TextType from "../common/TextType"

function Profile() {
  const titleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const letters = titleRef.current.querySelectorAll(".fold-letter")

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        rotateX: -90,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 1,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.out",
      }
    )
  }, [])

  return (
    <div className="bg-[#F3F4F6] overflow-hidden">
      <Container className="py-0!">
        <div className="flex flex-col md:flex-row items-center justify-center lg:block lg:relative min-h-fit lg:min-h-115 lg:py-0 gap-10 md:gap-16">
          {/* IMAGE */}
          <div className="flex justify-center z-10 order-1 md:order-2 md:w-1/2 lg:w-full">
            <div className="relative w-50 md:w-50 lg:w-80 h-64 lg:h-98 bg-[#E5E7EB] rounded-b-full overflow-hidden">
              <img
                src="/images/photos.jpg"
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="flex flex-col gap-4 lg:absolute lg:top-20 lg:left-0 z-20 pointer-events-none order-2 md:order-1 md:w-1/2 lg:w-full">
            <div className="pointer-events-auto text-center md:text-left lg:text-base">
              {/* <p className="text-xs lg:text-sm font-primary mb-2">
                Bonjour, je suis Fabienne
              </p> */}

          <TextType
          text={[
            "Bonjour, je suis Fabienne",
            "Développeuse Fullstack",
            "Passionnée par la technologie",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          className="text-xs lg:text-sm font-primary mb-2"
        />

              <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold leading-[0.85] tracking-tighter">
                Développeuse <br />

                <span
                  ref={titleRef}
                  className="italic font-serif font-light text-4xl md:text-4xl lg:text-5xl"
                  style={{
                    perspective: "700px",
                  }}
                >
                  {"Web & Mobile".split("").map((char, index) => (
                    <span
                      key={index}
                      className="fold-letter inline-block"
                      style={{
                        transformOrigin: "50% 0%",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h1>

              <p className="mt-6 text-gray-700 text-[16px] max-w-xs mx-auto md:mx-0 font-primary">
              Développeuse Fullstack passionnée par le développement web et mobile, avec une solide expérience en front-end et back-end. J’ai conçu et développé des applications web innovantes tout en veillant à maintenir une qualité de code élevée. Curieuse et motivée, j’aime apprendre de nouvelles technologies et relever des défis techniques complexes.
              </p>
            </div>

            {/* BUTTON */}
            <div className="pointer-events-auto flex justify-center md:justify-start mb-10 lg:block md:mb-0">
            <a href="#Contact">
              <Button label="Me contacter" />
            </a>
            </div>
          </div>

          {/* STATS */}
          <div className="absolute top-45 lg:top-20 right-0 z-20 hidden lg:flex flex-col items-end space-y-12 text-right pr-12 lg:pl-0!">
            <div>
              <p className="text-lg lg:text-2xl font-bold">1+</p>
              <p className="text-xs text-gray-500 uppercase">
                Année d'expérience
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-2xl font-bold">10+</p>
              <p className="text-xs text-gray-500 uppercase">
                Projets réalisés
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-2xl font-bold">95%</p>
              <p className="text-xs text-gray-500 uppercase">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-gray-400 pb-10">
          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              Développement Frontend
            </h5>

            <p className="text-gray-700 text-sm font-primary">
              Création d’interfaces modernes, fluides et responsives.
            </p>
          </div>

          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              Développement Backend
            </h5>

            <p className="text-gray-700 text-sm font-primary">
              Développement de systèmes backend sécurisés et d’API performantes.
            </p>
          </div>

          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              Développement Mobile
            </h5>

            <p className="text-gray-700 text-sm font-primary">
              Création d’applications mobiles modernes et multiplateformes.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
