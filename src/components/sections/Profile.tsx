import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Button from "../common/Button"
import Container from "../common/Container"
import TextType from "../common/TextType"

function Profile() {
  const { t, i18n } = useTranslation()
  const titleRef = useRef<HTMLSpanElement>(null)

  // Langue actuelle
  const currentLang = i18n.language
  const webMobileText = t("Profile.webMobile")

  // Relancer l'animation GSAP à chaque changement de texte / langue
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
  }, [webMobileText, currentLang])

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
              
            
              <TextType
                key={currentLang}
                text={t("Profile.typing", { returnObjects: true }) as string[]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                className="text-xs lg:text-sm font-primary mb-2"
              />

              <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold leading-[0.85] tracking-tighter ">
                {t("Profile.job")} <br />

           
                <span
                  key={currentLang}
                  ref={titleRef}
                  className="italic font-serif font-light text-4xl md:text-4xl lg:text-5xl text-[#1A56DB]"
                  style={{ perspective: "700px" }}
                >
                  {webMobileText.split("").map((char, index) => (
                    <span
                      key={`${char}-${index}`}
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
                {t("Profile.description")}
              </p>
            </div>

            {/* BOUTON */}
            <div className="pointer-events-auto flex justify-center md:justify-start mb-10 lg:block md:mb-0">
              <a href="#Contact">
                <Button label={t("Profile.button")} />
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="absolute top-45 lg:top-20 right-0 z-20 hidden lg:flex flex-col items-end space-y-12 text-right pr-12 lg:pl-0!">
            <div>
              <p className="text-lg lg:text-2xl font-bold">1+</p>
              <p className="text-xs text-gray-500 uppercase">
                {t("Profile.stats.experience")}
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-2xl font-bold">10+</p>
              <p className="text-xs text-gray-500 uppercase">
                {t("Profile.stats.projects")}
              </p>
            </div>

            <div>
              <p className="text-lg lg:text-2xl font-bold">95%</p>
              <p className="text-xs text-gray-500 uppercase">
                {t("Profile.stats.satisfaction")}
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-gray-400 pb-10">
          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              {t("Profile.services.frontend.title")}
            </h5>
            <p className="text-gray-700 text-sm font-primary">
              {t("Profile.services.frontend.description")}
            </p>
          </div>

          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              {t("Profile.services.backend.title")}
            </h5>
            <p className="text-gray-700 text-sm font-primary">
              {t("Profile.services.backend.description")}
            </p>
          </div>

          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">
              {t("Profile.services.mobile.title")}
            </h5>
            <p className="text-gray-700 text-sm font-primary">
              {t("Profile.services.mobile.description")}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile