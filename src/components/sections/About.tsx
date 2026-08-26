'use client'

import Container from "../common/Container"
import SplashCursor from "../common/SplashCursor"
import Linkedin from "../icons/Linkedin"

const AboutMe = () => {
  return (
    <Container
      className="relative overflow-hidden mb-24 py-8"
      id="about"
    >
      {/* Halo lumineux d'arrière-plan très subtil */}
      <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto font-primary">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* BLOCK IMAGE */}
          <div className="w-full md:w-5/12 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
              
              {/* Conteneur Image + Animation */}
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-96 overflow-hidden">
                <img
                  src="/images/dev.jpg"
                  alt="Fabienne Développeuse"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <SplashCursor
                  COLOR="#1A56DB"
                  RAINBOW_MODE={false}
                />
              </div>
            </div>

            {/* BADGE DISPONIBILITÉ */}
            <div className="absolute -bottom-4 right-4 bg-[#1A56DB] text-white px-5 py-3 rounded-2xl shadow-lg z-30 hidden md:block border border-white/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <p className="font-primary text-sm font-bold leading-none text-white!">
                  Disponible
                </p>
              </div>
              <p className="font-primary text-[10px] uppercase tracking-wider font-medium text-white! mt-1">
                Pour de nouveaux projets
              </p>
            </div>
          </div>

          {/* CONTENU TEXTE */}
          <div className="w-full md:w-7/12">
            
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#1A56DB] text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
              Qui suis-je ?
            </span>

            <h2 className="text-3xl md:text-3xl lg:text-4xl font-primary font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Création d’applications <br />
              <span className="italic font-serif font-normal text-[#1A56DB]">
                web et mobiles
              </span> <br />
              modernes
            </h2>

            <div className="font-primary text-slate-600 text-base leading-relaxed max-w-2xl mb-8">
              <p>
                Je suis une développeuse web passionnée par la création
                d’applications modernes, performantes et bien structurées.
                Au-delà du code, je m’intéresse à la qualité, à l’expérience
                utilisateur et à la logique métier derrière chaque projet.
                J’aime travailler sur des projets concrets qui résolvent de
                vrais problèmes, que ce soit en frontend, backend ou mobile.
                Mon objectif est de continuer à évoluer en tant que
                développeuse fullstack et de contribuer à des projets
                impactants et bien conçus.
              </p>
            </div>

            {/* GRILLE D'INFORMATIONS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">

              {/* TELEPHONE */}
              <div className="border-l-2 pl-4 border-[#1A56DB]">
                <h5 className="font-primary text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Téléphone
                </h5>
                <p className="text-slate-800 text-sm font-semibold mt-1">
                  034 78 984 75
                </p>
              </div>

              {/* LINKEDIN */}
              <div className="border-l-2 pl-4 border-[#1A56DB]">
                <h5 className="font-primary text-xs font-bold text-slate-400 uppercase tracking-wider">
                  LinkedIn
                </h5>
                <a
                  href="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A56DB] hover:text-blue-700 text-sm mt-1 block transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* LOCALISATION */}
              <div className="border-l-2 pl-4 border-[#1A56DB]">
                <h5 className="font-primary text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Localisation
                </h5>
                <p className="text-slate-800 text-sm font-semibold mt-1">
                  Madagascar
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default AboutMe