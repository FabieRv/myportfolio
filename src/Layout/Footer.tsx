import { Github, Linkedin, Mail, Twitter, Code2, Terminal } from "lucide-react"
import Container from "../common/Container"

function Footer() {
  return (
    <footer className="bg-[#F4EDEA]">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 ">
          {/* Column 1: Profile */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <h1 className="text-sm font-primary font-bold uppercase tracking-[0.2em]">
                Portfolio
              </h1>
            </div>
            <p className="text-[12px] opacity-60 leading-relaxed max-w-[200px] mx-auto sm:mx-0 font-medium">
              Passionate developer focused on building modern interfaces and
              innovative technical solutions.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-sm font-primary font-bold uppercase tracking-[0.2em]">
              Navigation
            </h1>
            <ul className="text-[13px] space-y-2 opacity-70 font-medium">
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Home
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                About Me
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Skills
              </li>
              <li className="hover:opacity-100 hover:translate-x-1 cursor-pointer transition-all">
                Projects
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
                Frontend Developper
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                Backend Develelopper
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                Mobile Developper
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h1 className="text-sm font-primary font-bold uppercase tracking-[0.2em]">
              Connect With Me
            </h1>
            <div className="flex gap-3">
              <SocialBtn Icon={Github} link="https://github.com" />
              <SocialBtn Icon={Linkedin} link="https://linkedin.com" />
              <SocialBtn Icon={Twitter} link="#" />
              <SocialBtn Icon={Mail} link="mailto:contact@example.com" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 text-center opacity-40 pt-8 pb-4 ">
          <p className="text-[10px] uppercase tracking-widest font-bold  ">
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
