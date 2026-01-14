import { useState } from "react"
import Button from "../common/Button"
import Container from "../common/Container"
import MyMenu from "../common/MyMenu"
import { headerLinks } from "../constant"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-sm bg-white dark:bg-slate-900 w-full sticky top-0 z-100 transition-colors duration-300">
      <Container
        tag="header"
        className="flex justify-between items-center py-0! font-base"
      >
        <div className="shrink-0 text-2xl font-header font-bold z-110">
          <a href="/">
            <h1 className="m-0 leading-none text-button dark:text-white">
              Fabie
              <span className="text-gray-600 dark:text-gray-400">.Rav</span>
            </h1>
          </a>
        </div>

        <nav>
          <ul
            className={`
              flex items-center gap-8 
              fixed lg:static top-0 left-0 w-screen lg:w-fit h-screen lg:h-fit
              flex-col lg:flex-row justify-center lg:justify-end 
              bg-[#F4EDEA]  dark:bg-slate-900 lg:bg-transparent
              transition-transform duration-500 z-100 lg:z-auto
              ${open ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
            `}
          >
            {headerLinks.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  className="text-xl lg:text-base font-primary font-medium text-black dark:text-white hover:text-primary transition-all duration-300 relative group"
                >
                  {/* Utilisation de t() pour la traduction */}
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* --- SECTION DES CONTRÔLES (Icons) --- */}

            <li className="flex items-center text-sm py-2">
              <a href="/cv.pdf" download onClick={() => setOpen(false)}>
                <Button label={"Upload CV"}></Button>
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden z-110">
          <MyMenu isClicked={open} onClick={() => setOpen(!open)} />
        </div>
      </Container>
    </div>
  )
}

export default Header
