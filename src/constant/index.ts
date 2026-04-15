import type { AboutTypes, LinkType } from "../types"

export const headerLinks: LinkType[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#Skils", label: "Skills" },
  { href: "/#Projects", label: "Projects" },
  { href: "/#Experience", label: "Education" },
  { href: "/#Contact", label: "Contact" },
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

// FRONTEND : On transforme les strings en objets avec le chemin image
export const frontendSkills = [
  { name: "JS", image: "/images/JavaScript-logo.webp" },
  { name: "TailwindCSS", image: "/images/tailwind.webp" },
  { name: "React.JS", image: "/images/react.webp" },
]

// BACKEND
export const backendSkills = [
  { name: "PHP", image: "/images/php.webp" },
  { name: "Laravel", image: "/images/laravel.webp" },
  { name: "Symfony", image: "/images/symfony.webp" },
  { name: "JAVA", image: "/images/java.webp" },
  { name: "Python", image: "/images/pyhon.webp" },
]

// DATABASE
export const databaseSkills = [
  { name: "SQL", image: "/images/sql.webp" },
  { name: "PostgreSQL", image: "/images/pgsql.webp" },
  { name: "MongoDB", image: "images/mongogb.webp" },
]
export const Logicielle = [
  { name: "Merise", image: "/images/sql.webp" },
  { name: "UML", image: "/images/sql.webp" },
]
export const Design = [
  { name: "Adobe Premier", image: "/images/git.webp" },
  { name: "Adobe Illustrator", image: "/images/postman.webp" },
  { name: "Photoshop", image: "/images/postman.webp" },
  { name: "Figma", image: "/images/postman.webp" },
  { name: "In Design", image: "/images/postman.webp" },
]

// OUTILS
export const toolsSkills = [
  { name: "GIT", image: "/images/git.webp" },
  { name: "Postman", image: "/images/postman.webp" },
]

export const mobileSkills = [{ name: "Flutter", image: "images/Flutter.webp" }]

export const skills = [
  { name: "BackEnd", level: 90 },
  { name: "FrontEnd", level: 70 },
  { name: "Mobile", level: 60 },
  { name: "DataBase", level: 90 },
  { name: "Outils", level: 95 },
]

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

export const ImageProject = [
  {
    name: "MalagasyCraft",
    image: "images/projet/craft-projet.webp",
    description:
      "Plateforme e-commerce dédiée à l’artisanat malagasy avec gestion des ventes et des produits.",
    demoLink: "#",
    repoLink: "#",
  },
  {
    name: "Soary",
    image: "images/projet/tolia-p.webp",
    description:
      "Application e-commerce couvrant les achats, ventes, paiements, livraisons et stocks, avec gestion des tâches métier et des processus d’import/export des produits",
    demoLink: "#",
    repoLink: "#",
  },
  {
    name: "Cherry",
    image: "images/projet/cherry.png",
    description:
      "Application orientée marketing digital. Il fait comme l'annonce publicitaire ",
    demoLink: "#",
    repoLink: "#",
  },
  {
    name: "Taaz",
    image: "images/projet/taaz.png",
    description:
      "Solution web axée sur la gestion des produits et des transactions clients.",
    demoLink: "#",
    repoLink: "#",
  },
  {
    name: "Coin de Gadget",
    image: "../../public/images/coin-gadgets.webp",
    description:
      "Solution web axée sur la gestion des produits et des transactions clients.",
    demoLink: "#",
    repoLink: "#",
  },
]
