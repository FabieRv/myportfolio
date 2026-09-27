import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { atous } from "../../constant"
import Container from "../common/Container"

function Logoexpe() {

  const marqueeRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('translation', { keyPrefix: 'skillsMarquee' })

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const startAnimation = () => {
      const totalWidth = marquee.scrollWidth / 2
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 40,
        repeat: -1,
        ease: "none",
      })
    }
    document.fonts.ready.then(startAnimation)
    window.addEventListener("resize", startAnimation)
    return () => window.removeEventListener("resize", startAnimation)
  }, [])

  return (
    <div className="overflow-hidden  py-4 bg-[#F8FAFC] dark:bg-[#13101E] dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] relative z-10">
      <Container className="py-4  pt-0! dark:bg-[#13101E] ">
        <div className="w-full relative">
          <div
            ref={marqueeRef}
            className="flex flex-nowrap items-center whitespace-nowrap "
          >
            {[...atous, ...atous].map((atout, index) => (
              <div
                key={`${atout.id}-${index}`}
                className="flex items-center gap-12 px-6"
              >
                <span className="text-[14px] font-header uppercase  text-[#334155] dark:text-slate-400">
                 {t('expertise')}
                </span>

                <span className="w-2 h-2 rotate-45 bg-button" />

                <p className="font-serif italic text-lg md:text-lg text-black ">
                {t(`atous.${atout.id}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Logoexpe
