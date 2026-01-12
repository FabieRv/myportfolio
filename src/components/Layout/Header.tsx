import { useState } from "react"
import Button from "../common/Button"
import Container from "../common/Container"
import MyMenu from "../common/MyMenu"
import { headerLinks } from "../../constant"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-sm bg-white w-full sticky top-0 z-100">
      <Container
        tag="header"
        // items-center: centre verticalement logo et navigation
        className="flex justify-between items-center py-4! font-base"
      >
        {/* 1. LOGO (Aligné à gauche) */}
        <div className="shrink-0 text-2xl font-header font-bold z-110">
          <a href="/">
            <h1 className="m-0 leading-none text-button">
              Fabie<span className="text-gray-600">.Rav</span>
            </h1>
          </a>
        </div>

        {/* 2. NAVIGATION (Version Desktop : lg:flex) */}
        <nav>
          <ul
            className={`
              /* Structure de base Flex */
              flex items-center gap-8 
              
              /* Mobile: Plein écran / Masqué */
              fixed lg:static top-0 left-0 w-screen lg:w-fit h-screen lg:h-fit
              flex-col lg:flex-row justify-center lg:justify-end bg-secondary lg:bg-transparent
              transition-transform duration-500 z-100 lg:z-auto
              ${open ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
            `}
          >
            {/* Boucle des liens */}
            {headerLinks.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  className="text-xl lg:text-base font-primary font-medium text-black hover:text-primary transition-all duration-300 relative group"
                >
                  {link.label}
                  {/* Petit trait au hover (optionnel) */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* 3. BOUTON (Parfaitement aligné avec les li) */}
            <li className="flex items-center mt-6 lg:mt-0">
              <a href="/cv.pdf" download onClick={() => setOpen(false)}>
                <Button label="Upload CV"></Button>
              </a>
            </li>
          </ul>
        </nav>

        {/* MENU BURGER (Visible seulement sur Mobile) */}
        <div className="lg:hidden z-110">
          <MyMenu isClicked={open} onClick={() => setOpen(!open)} />
        </div>
      </Container>
    </div>
  )
}

export default Header
