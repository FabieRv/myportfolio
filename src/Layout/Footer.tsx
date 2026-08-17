import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../components/common/Container";

function Footer() {
  return (
    <footer className="bg-[#172554] text-white">
      <Container>
        {/* Main Grid F4EDEA*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 ">
       
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <h1 className="text-sm font-header font-bold uppercase tracking-[0.2em]">
                Portfolio
              </h1>
            </div>
            <p className="text-[12px] opacity-60 leading-relaxed max-w-50 mx-auto sm:mx-0 font-medium text-white!">
            Développeuse passionnée, spécialisée dans la création d’interfaces modernes et de solutions techniques innovantes.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-sm  font-bold uppercase tracking-[0.2em]">
              Navigation
            </h1>
            <ul className="text-[13px] space-y-2 opacity-70 font-medium font-primary">
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Accueil
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
               Formations
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
              Compétences
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Projets 
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Expériences
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
              Contact
              </li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="space-y-4 text-center sm:text-left font-primary font-medium text-sm md:text-sm lg:text-lg">
            <h1 className="text-sm font-primary font-bold uppercase tracking-[0.2em]">
              Expertise
            </h1>
            <ul className="text-[12px] space-y-2 opacity-70 font-medium">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                Développeur Frontend
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                Développeur Backend
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                Développeur Mobile
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex flex-col items-center  space-y-6">
            <h1 className="text-sm font-primary font-bold uppercase tracking-[0.2em]">
            Restons en contact
            </h1>
            <div className="flex justify-between gap-3">
              <SocialBtn Icon={Github} link="https://github.com/FabieRv" />
              <SocialBtn Icon={Linkedin} link="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309/" />
            
              <SocialBtn Icon={Mail} link="mailto:contact@example.com" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white text-center opacity-40 mt-4 pb-4 text-white ">
          <p className="text-[10px]  uppercase tracking-widest font-bold text-white! mt-4 ">
            © 2026 Fabie Rav. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

// Reusable Social Button Component
const SocialBtn = ({ Icon, link }: { Icon: any; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-[#003366] transition-all cursor-pointer border border-white/5 shadow-lg group"
  >
    <Icon size={18} className="group-hover:scale-110 transition-transform" />
  </a>
)

export default Footer
