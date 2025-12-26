import type { AboutTypes, LinkType } from "../components/types"

export const headerLinks: LinkType[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#Skils", label: "Skills" }, // Changed 'Skils' to 'Skills'
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

export const experiences = [
  { id: 1, name: "JS", image: "images/JavaScript-logo.webp" },
  { id: 2, name: "Taillwind", image: "/images/tailwind.webp" },
  { id: 3, name: "ReactJS", image: "/images/react.webp" },
  { id: 5, name: "NodeJS", image: "/images/node.webp" },
  { id: 6, name: "JAVA", image: "/images/java.webp" },
  { id: 7, name: "Python", image: "/images/pyhon.webp" },
  { id: 8, name: "PHP", image: "/images/php.png" },
  { id: 9, name: "laravel", image: "/images/laravel.webp" },
  { id: 10, name: "Symfony", image: "/images/symfony.webp" },
  { id: 11, name: "SQL", image: "/images/sql.webp" },
  { id: 12, name: "PortgreSQL", image: "/images/pgsql.webp" },
  { id: 13, name: "Flutter", image: "../../../public/images/Flutter.jpg" },
]

export const ListExperiences = [
  {
    id: 1,
    role: "ReactJs Developer",
    company: "Cherry Tech&Design",
    period: "November 2025 - January 2026",
    description: [
      "Design and Development of a modern and responsive showcase website",
      "Complete responsibility for the UI Design.",
    ],

    src: "images/cherry.webp",
    alt: "cherry",
  },
  {
    id: 2,
    role: "Symfony Developer",
    company: "Tolia Madagascar",
    period: "November 2025 - January 2026",
    description: [
      "Development and improvement of business functionalities (sales, inventory, purchases)",
      "Bug fixing and ensuring new functionality",
    ],
    src: "images/tolia.webp",
    alt: "Tolia",
  },

  {
    id: 3,
    role: "Laravel Developer",
    company: "MalagasyCraft",
    period: "November 2025 - January 2026",
    description: [
      "Participation in the development of application functionalities (sales, inventory, purchases)",
      "Management of export and import of artisanal products",
    ],
    src: "images/craft.webp",
    alt: "MalagasyCraft",
  },
]

export const projets = [
  {
    id: 1,
    title: "Soary Project",
    descriptio:
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
    descriptio:
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
    descriptio:
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
    descriptio:
      "Design and Development of a modern and responsive showcase website, Design and Development of a modern and responsive showcase website", // Translated
    technologies: ["ReactJS", "Tailwindcss", "NodeJS", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: "../../../public/images/coin-gadgets.webp",
    alt: "coin",
  },
]
