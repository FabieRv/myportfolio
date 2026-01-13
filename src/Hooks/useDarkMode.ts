import { useEffect, useState } from "react"

export const useDarkMode = () => {
  // On initialise avec la valeur stockée ou la préférence système
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    // On sauvegarde le choix pour la prochaine visite
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"))

  return { theme, toggleTheme }
}
