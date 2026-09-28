"use client"

import { Languages, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Container from "../components/common/Container"
import MyMenu from "../components/common/MyMenu"
import { headerLinks } from "../constant"

function Header() {
  const { t, i18n } = useTranslation()
  
  const isFr = i18n.language?.startsWith("fr")
  const [open, setOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        return savedTheme === "dark"
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })
  
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  const toggleLanguage = () => {
    const newLang = isFr ? "en" : "fr"
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="shadow-sm bg-white dark:bg-[#13101E] w-full sticky top-0 z-100 border-b border-transparent dark:border-slate-700 transition-colors duration-300">
      <Container
        tag="header"
        className="flex flex-row justify-between items-center py-2! font-base"
      >
        {/* LOGO */}
        <div className="text-lg font-header font-bold z-110">
          <a href="/">
            <h1 className="m-0 leading-none text-button dark:text-white">
              Fabie
              <span className="text-gray-600 dark:text-blue-400">.Rav</span>
            </h1>
          </a>
        </div>

        {/* MENU */}
        <nav>
          <ul
            className={`flex items-center gap-8 lg:gap-6 fixed lg:static top-0 left-0 w-screen lg:w-fit h-screen lg:h-fit flex-col lg:flex-row justify-center lg:justify-end bg-[#bbd2fc] dark:bg-slate-900 lg:bg-transparent transition-transform duration-500 z-100 lg:z-auto text-lg ${
              open
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            }`}
          >
            {/* LIENS DU MENU */}
            {headerLinks.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  className="text-xl lg:text-[18px] font-primary font-medium text-black dark:text-white hover:text-primary transition-all duration-300 relative group"
                >
                  {t(`nav.${link.key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              </li>
            ))}

            {/* TRADUCTION ET THEME MOBILE */}
            <li className="lg:hidden mt-2 flex flex-row justify-between gap-8">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-primary text-black dark:text-white hover:opacity-80 transition-all duration-300"
              >
                <Languages size={18} className="text-gray-600 dark:text-gray-300" />
                <span className={isFr ? "font-semibold text-primary text-xl" : "font-primary text-gray-400 text-xl"}>
                  FR
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-xl">/</span>
                <span className={!isFr ? "font-semibold text-primary text-xl" : "font-primary text-gray-400 text-xl"}>
                  EN
                </span>
              </button>

              {/* BOUTON THEME MOBILE */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 text-blue-600 border border-blue-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-yellow-400 dark:border-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center"
                aria-label="Changer de thème"
              >
                {darkMode ? <Moon size={20} className="block" /> : <Sun size={20} className="stroke-[2.25] block" />}
              </button>
            </li>

            {/* CV MOBILE */}
            <li className="lg:hidden mt-4" onClick={() => setOpen(false)}>
              <div className="font-bold text-base bg-primary py-2.5 px-6 rounded-full shadow-md">
                <a
                  className="text-white flex items-center justify-center gap-2"
                  href="/cv/cv_Fabienne_RAZAFIMAHARAVO.pdf"
                  download="cv_Fabienne_RAZAFIMAHARAVO.pdf"
                >
                  {t("header.cv")}
                </a>
              </div>
            </li>
          </ul>
        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden lg:flex items-center gap-4">
          {/* TRADUCTION DESKTOP */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[16px] tracking-wider uppercase font-primary font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
          >
            <Languages size={16} />
            <span className={isFr ? "font-semibold text-primary" : "text-gray-400"}>
              FR
            </span>
            <span className="text-gray-300 dark:text-gray-400">/</span>
            <span className={!isFr ? "font-semibold text-primary" : "text-gray-400"}>
              EN
            </span>
          </button>

          {/* BOUTON THEME DESKTOP (IDENTIQUE À LA VERSION MOBILE) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 text-blue-600 border border-blue-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-yellow-400 dark:border-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center"
            aria-label="Changer de thème"
          >
            {darkMode ? <Moon size={20} className="block" /> : <Sun size={20} className="stroke-[2.25] block" />}
          </button>

          {/* CV DESKTOP */}
          <div className="font-bold text-sm bg-[#3B82F6] py-2 px-4 rounded-full hover:bg-[#1D4ED8]">
            <a
              className="text-white"
              href="/cv/cv_Fabienne_RAZAFIMAHARAVO.pdf"
              download="cv_Fabienne_RAZAFIMAHARAVO.pdf"
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