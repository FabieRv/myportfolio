import type { AboutTypes, LinkType } from "../types"

export const headerLinks: LinkType[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#Skils", label: "Skills" },
  { href: "/#Projects", label: "Projects" },
  { href: "/#Experience", label: "Education" },
  { href: "/#Contact", label: "Contact" }, // Corrected Contact link to point to section ID
]

export const aboutLinks: AboutTypes[] = [
  {
    src: "images/langage.jpg",
    alt: "langage.jpg",
    title: "Languages",
    content: "React.JS, PHP, Laravel, Symfony, Python,...",
  },
  {
    src: "images/education.png",
    alt: "education.jpg",
    title: "Education",
    content: "Bachelor's Degree in Management Informatics",
  },
  {
    src: "images/books.png",
    alt: "books.jpg",
    title: "Trainings",
    content: "Certificate in PHP Backend Developer",
  },
  {
    src: "images/projet.png",
    alt: "projet.jng",
    title: "Projects",
    content: "+ 10 personal projects completed",
  },
]

export const atous = [
  { id: 1, label: "AUTONOMOUS" },
  { id: 2, label: "CURIOUS" },
  { id: 3, label: "DETAIL-ORIENTED" },
  { id: 4, label: "TEAM PLAYER" },
  { id: 5, label: "PERSEVERANT" },
  { id: 6, label: "PROACTIVE" },
]

export const projets = [
  {
    id: 1,
    title: "Soary Project",
    description:
      "Design and Development of a modern and responsive showcase website, Design and Development of a modern and responsive showcase website",
    technologies: ["Symfony", "tailwind CSS", "PostgreSql"],
    demoLink: "#",
    repoLink: "#",
    image: "../../../public/images/tolia-p.webp",
    alt: "tolia",
  },
  {
    id: 2,
    title: "MalagasyCraft",
    description:
      "Design and Development of a modern and responsive showcase website, Design and Development of a modern and responsive showcase website", // Translated
    technologies: ["Laravel", "ReactJS", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: "../../../public/images/craft-projet.webp",
    alt: "craft",
  },
  {
    id: 3,
    title: "E-parle",
    description:
      "Design and Development of a modern and responsive showcase website, Design and Development of a modern and responsive showcase website", // Translated
    technologies: ["PHP", "CSS", "JS", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: "../../../public/images/eparle.webp",
    alt: "eparle",
  },
  {
    id: 4,
    title: "Coin des Gadjets",
    description:
      "Design and Development of a modern and responsive showcase website, Design and Development of a modern and responsive showcase website", // Translated
    technologies: ["ReactJS", "Tailwindcss", "NodeJS", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: "../../../public/images/coin-gadgets.webp",
    alt: "coin",
  },
]

// FRONTEND : On transforme les strings en objets avec le chemin image
export const frontendSkills = [
  { name: "JS", image: "/images/JavaScript-logo.webp" },
  { name: "TailwindCSS", image: "/images/tailwind.webp" },
  { name: "React.JS", image: "/images/react.webp" },
]

// BACKEND
export const backendSkills = [
  { name: "PHP", image: "/images/php.png" },
  { name: "Laravel", image: "/images/laravel.webp" },
  { name: "Symfony", image: "/images/symfony.webp" },
  { name: "JAVA", image: "/images/java.webp" },
  { name: "Python", image: "/images/pyhon.webp" },
]

// DATABASE
export const databaseSkills = [
  { name: "SQL", image: "/images/sql.webp" },
  { name: "PostgreSQL", image: "/images/pgsql.webp" },
]

// OUTILS
export const toolsSkills = [
  { name: "GIT", image: "/images/git.png" }, // Assure-toi d'avoir cette image
  { name: "Postman", image: "/images/postman.png" },
]

export const mobileSkills = [{ name: "Flutter", image: "/images/Flutter.jpg" }]

export const skills = [
  { name: "BackEnd", level: 90 },
  { name: "FrontEnd", level: 70 },
  { name: "Mobile", level: 60 },
  { name: "DataBase", level: 90 },
  { name: "Outils", level: 95 },
]

// export const experiences = [
//   {
//     year: "2025 — Present",
//     title: "FrontEnd Developer",
//     place: "Cherry Tech&Design",
//     desc: "Stage Développeur React.JS, contribuant à la création d'interfaces utilisateur modernes et réactives.",
//   },
//   {
//     year: "2024 — 2025",
//     title: "Backend Developer",
//     place: "Tolia Madagascar",
//     desc: "Stage Développeur Symfony pendant 6 mois, travaillant sur des projets commerciaux comme 'Soary Project'.",
//   },
//   {
//     year: "2024 — 2025",
//     title: "Backend Developer",
//     place: "MalagasyCraft",
//     desc: "Stage Développeur Laravel pendant 3 mois, avec le projet 'MalagasyCraft'.",
//   },
//   {
//     year: "2023 — 2024",
//     title: "Projet Personnel",
//     place: "E-Parle",
//     desc: "Projet E-parle, une plateforme de cours en ligne, gérant le développement complet du backend.",
//   },
// ]

export const experiences = [
  {
    year: "Octobre 2025 — PRESENT",
    title: "FrontEnd Developer",
    place: "Cherry Tech&Design",
    desc1: "Stage Développeur React.JS",
    desc2: [
      "Contribuant à la création d'interfaces utilisateur modernes et réactives,",
      "Optimisation de l'expérience utilisateur sur mobile.",
    ],
    icon: "✓",
  },
  {
    year: "2024 — 2025",
    title: "Backend Developer",
    place: "Tolia Madagascar",
    desc1: "Stage Développeur Symfony pendant 6 mois",
    desc2: [
      "Travaillant sur des projets commerciaux comme 'Soary Project',",
      "Faire une gestion de stock,",
      "Gère l'export et import.",
    ],
    icon: "✓",
  },
  {
    year: "2024 — 2025",
    title: "Backend Developer",
    place: "MalagasyCraft",
    desc1: "Stage Développeur Laravel",
    desc2: [
      "Travaillant sur des projets commerciaux comme 'MalagasyCraft',",
      "Développe des fonctionnalités de l’application (ventes, stock, achats),",
      "Gestion d’export et d’import des produits artisanaux,",
    ],
    icon: "✓",
  },
  {
    year: "2023 — 2024",
    title: "Projet Personnel",
    place: "E-Parle",
    desc1: "Projet personnel 'E-parle'",
    desc2: [
      "Développement d’une application de cours de français,",
      "Conception et mise en œuvre des principales fonctionnalités,",
      "Assure le bon fonctionnement de l’application (cours, paiement, chat en temps réel).",
    ],
    icon: "✓",
  },
]
