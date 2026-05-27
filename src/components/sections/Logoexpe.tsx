import Container from "../common/Container"
import { atous } from "../../constant"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

function Logoexpe() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const startAnimation = () => {
      const totalWidth = marquee.scrollWidth / 2
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 40,
        repeat: 2,
      })
    }
    document.fonts.ready.then(startAnimation)
    window.addEventListener("resize", startAnimation)
    return () => window.removeEventListener("resize", startAnimation)
  }, [])

  return (
    <div className="overflow-hidden border-y border-blue-100/30 py-4 bg-[#E5E7EB]">
      <Container className="py-4  pt-0!">
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
                <span className="text-[10px] font-header uppercase  text-[#334155]">
                  Expertise
                </span>

                <span className="w-2 h-2 rotate-45 bg-button" />

                <p className="font-serif italic text-lg md:text-lg text-black">
                  {atout.label}
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
