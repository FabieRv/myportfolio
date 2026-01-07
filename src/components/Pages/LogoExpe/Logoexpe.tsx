import Container from "../../common/Container";
import { atous } from "../../../constant";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Logoexpe() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const items = gsap.utils.toArray(marquee.children);
    const totalWidth = items.reduce((acc: number, item: any) => acc + item.offsetWidth + 40, 0); // 40px for gap-10

    gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: items.length * 2, // Adjust duration based on number of items
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }, []);

  return (
    <div className="overflow-hidden shadow-sm py-10 bg-[#F4EDEA]">
      <Container className="py-0!">
        <div className="w-full relative">
          <div ref={marqueeRef} className="flex flex-nowrap items-center gap-10 font-primary whitespace-nowrap">
            {/* Duplicate items to ensure continuous loop */}
            {atous.map((atout) => (
              <div key={atout.id} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 px-5 py-2 border border-gray-300 rounded-full bg-white shadow-sm">
                {atout.label}
              </div>
            ))}
            {atous.map((atout) => (
              <div key={`${atout.id}-clone`} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 px-5 py-2 border border-gray-300 rounded-full bg-white shadow-sm">
                {atout.label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Logoexpe;