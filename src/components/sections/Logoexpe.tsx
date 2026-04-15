import Container from "../common/Container"
import { atous } from "../../constant"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

function Logoexpe() {
  // Correction ici : On précise que le Ref concerne une Div HTML
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // TypeScript sait maintenant que 'marquee' est une div, donc 'children' existe.
    const items = gsap.utils.toArray(marquee.children) as HTMLElement[]

    const totalWidth = items.reduce(
      (acc: number, item: HTMLElement) => acc + item.offsetWidth + 40,
      0
    )

    gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: items.length * 2,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    })
  }, [])

  return (
    <div className="overflow-hidden shadow-sm py-4  bg-[#ADF5FF] ">
      {/* bg-[#F4EDEA] */}
      <Container className="py-0! pt-0!">
        <div className="w-full relative">
          <div
            ref={marqueeRef}
            className="flex flex-nowrap items-center gap-10 font-primary  font-bold whitespace-nowrap"
          >
            {atous.map((atout) => (
              <div
                key={atout.id}
                className="text-sm  text-gray-700 px-4 py-2 rounded-full bg-white shadow-sm  "
              >
                <p>{atout.label}</p>
              </div>
            ))}
            {atous.map((atout) => (
              <div
                key={`${atout.id}-clone`}
                className="text-sm  text-gray-700 px-4 py-2 rounded-full bg-white shadow-sm"
              >
                <p> {atout.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Logoexpe
