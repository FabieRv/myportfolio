import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import { philosophyData } from "../../constant";
import Title from "../common/Title";

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre
      gsap.from(".philosophy-title", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animation des éléments
      gsap.from(".philosophy-item", {
        opacity: 0,
        x: -40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-list",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animation des flèches
      gsap.utils.toArray<HTMLElement>(".philosophy-item").forEach((item) => {
        const arrow = item.querySelector(".philosophy-arrow");

        if (!arrow) return;

        item.addEventListener("mouseenter", () => {
          gsap.to(arrow, {
            x: 8,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={sectionRef}
    className="bg-[#F3F4F6] px-6 py-10 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto">
      
      <div className="philosophy-title mb-12 text-center">
        <Title label="Ma Philosophie" />
      </div>
  
      <div className="flex justify-center">
        <div className="max-w-3xl w-full space-y-6">
          {philosophyData.map((item, index) => (
            <div
              key={index}
              className="flex items-start"
            >
              <span className="text-[#2563EB] mr-5 text-xl font-bold">
                →
              </span>
  
              <div>
                <h3 className="text-xl font-bold text-[#1E293B]">
                  {item.title} :
                </h3>
  
                <p className="text-[#475569] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  </section>
  );
};

export default Philosophy;