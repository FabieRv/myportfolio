"use client"

import { Languages } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import Container from "../components/common/Container"
import MyMenu from "../components/common/MyMenu"
import { headerLinks } from "../constant"

function Header() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  const [open, setOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr"
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="shadow-sm bg-white dark:bg-slate-900 w-full sticky top-0 z-[100] transition-colors duration-300">
      <Container
        tag="header"
        className="flex flex-row justify-between items-center py-2! font-base"
      >
        {/* LOGO */}
        <div className="text-lg font-header font-bold z-[110]">
          <a href="/">
            <h1 className="m-0 leading-none text-button dark:text-white">
              Fabie
              <span className="text-gray-600 dark:text-gray-700">.Rav</span>
            </h1>
          </a>
        </div>

        {/* MENU */}
        <nav>
          <ul
            className={`
              flex items-center gap-8
              fixed lg:static
              top-0 left-0
              w-screen lg:w-fit
              h-screen lg:h-fit
              flex-col lg:flex-row
              justify-center lg:justify-end
              bg-[#F4EDEA]
              dark:bg-slate-900
              lg:bg-transparent
              transition-transform duration-500
              z-[100]
              lg:z-auto
              ${
                open
                  ? "translate-x-0"
                  : "translate-x-full lg:translate-x-0"
              }
            `}
          >
            {/* LIENS DU MENU */}
            {headerLinks.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  className="
                    text-xl lg:text-base
                    font-primary font-medium
                    text-black dark:text-white
                    hover:text-primary
                    transition-all duration-300
                    relative group
                  "
                >
                  {t(`nav.${link.key}`)}

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      w-0
                      h-0.5
                      bg-primary
                      transition-all
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}

            {/* TRADUCTION MOBILE */}
            <li className="lg:hidden mt-4">
              <button
                type="button"
                onClick={toggleLanguage}
                className="
                  flex items-center gap-2
                  text-lg
                  font-primary font-medium
                  text-black dark:text-white
                  hover:text-primary
                  transition-all duration-300
                "
              >
                <Languages size={20} />
                <span
                  className={
                    currentLang === "fr"
                      ? "font-bold text-primary"
                      : "text-gray-400"
                  }
                >
                  FR
                </span>
                <span className="text-gray-400">/</span>
                <span
                  className={
                    currentLang === "en"
                      ? "font-bold text-primary"
                      : "text-gray-400"
                  }
                >
                  EN
                </span>
              </button>
            </li>
          </ul>
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden lg:flex items-center gap-4">
          {/* TRADUCTION DESKTOP */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="
              flex items-center gap-2
              px-3 py-2
              rounded-full
              text-sm
              font-primary font-medium
              text-black dark:text-white
              hover:bg-gray-100
              dark:hover:bg-slate-800
              transition-all duration-300
            "
          >
            <Languages size={18} />
            <span
              className={
                currentLang === "fr"
                  ? "font-bold text-primary"
                  : "text-gray-400"
              }
            >
              FR
            </span>
            <span className="text-gray-400">/</span>
            <span
              className={
                currentLang === "en"
                  ? "font-bold text-primary"
                  : "text-gray-400"
              }
            >
              EN
            </span>
          </button>

          {/* CV */}
          <div className="font-bold text-sm bg-primary py-2 px-4 rounded-full">
            <a
              className="text-white"
              href={
                currentLang === "fr"
                  ? "/cv/cv_Fabienne_FR.pdf"
                  : "/cv/cv_Fabienne_EN.pdf"
              }
              download
            >
              {t("header.cv")}
            </a>
          </div>
        </div>

        {/* BOUTON MENU MOBILE */}
        <div className="lg:hidden z-[110]">
          <MyMenu isClicked={open} onClick={() => setOpen(!open)} />
        </div>
      </Container>
    </div>
  )
}

export default Header