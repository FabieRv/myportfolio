import type { AboutTypes, LinkType } from "../types"

export const headerLinks: LinkType[] = [
  { href: "/#home", label: "Accueil" },
  { href: "/#about", label: "À propos" },
  { href: "/#Skils", label: "Compétences" },
  { href: "/#Projects", label: "Projets" },
  { href: "/#Experience", label: "Expérience" },
  { href: "/#Contact", label: "Contact" },
]

export const aboutLinks: AboutTypes[] = [
  {
    src: "images/langage.jpg",
    alt: "langage.jpg",
    title: "Langages",
    content: "React.JS, PHP, Laravel, Symfony, Python,...",
  },
  {
    src: "images/education.png",
    alt: "education.jpg",
    title: "Formation",
    content: "Licence en Informatique de Gestion",
  },
  {
    src: "images/books.png",
    alt: "books.jpg",
    title: "Formations",
    content: "Certificat en développement backend PHP",
  },
  {
    src: "images/projet.png",
    alt: "projet.jng",
    title: "Projets",
    content: "+ 10 projets personnels réalisés",
  },
]

export const atous = [
  { id: 1, label: "AUTONOME" },
  { id: 2, label: "CURIEUX" },
  { id: 3, label: "SOUCIEUX DU DÉTAIL" },
  { id: 4, label: "ESPRIT D’ÉQUIPE" },
  { id: 5, label: "PERSÉVÉRANT" },
  { id: 6, label: "PROACTIF" },
]

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

// BASE DE DONNÉES
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
  { name: "Adobe Illustrator", image: "/images/postman.webp" },
  { name: "Photoshop", image: "/images/photoshop.jpg" },
  { name: "Figma", image: "/images/figma.png" },
]

// OUTILS
export const toolsSkills = [
  { name: "Git", image: "/images/git.webp" },
  { name: "Postman", image: "/images/postman.webp" },
]

export const mobileSkills = [{ name: "Flutter", image: "images/Flutter.webp" }]

export const skills = [
  { name: "Back-end", level: 90 },
  { name: "Front-end", level: 70 },
  { name: "Mobile", level: 60 },
  { name: "Base de données", level: 90 },
  { name: "Outils", level: 95 },
]

export const experiences = [
  {
    year: "Octobre 2025 — PRÉSENT",
    title: "Développeur Frontend",
    place: "Cherry Tech&Design",
    desc1: "Stage Développeur React.JS",
    desc2: [
      "Contribution à la création d’interfaces utilisateur modernes et réactives,",
      "Optimisation de l’expérience utilisateur sur mobile.",
    ],
    icon: "✓",
  },
  {
    year: "2024 — 2025",
    title: "Développeur Backend",
    place: "Tolia Madagascar",
    desc1: "Stage Développeur Symfony pendant 6 mois",
    desc2: [
      "Travail sur des projets commerciaux comme ‘Soary Project’,",
      "Gestion de stock,",
      "Gestion de l’export et de l’import.",
    ],
    icon: "✓",
  },
  {
    year: "2024 — 2025",
    title: "Développeur Backend",
    place: "MalagasyCraft",
    desc1: "Stage Développeur Laravel",
    desc2: [
      "Travail sur des projets commerciaux comme ‘MalagasyCraft’,",
      "Développement des fonctionnalités de l’application (ventes, stock, achats),",
      "Gestion des exports et imports des produits artisanaux,",
    ],
    icon: "✓",
  },
  {
    year: "2023 — 2024",
    title: "Projet Personnel",
    place: "E-Parle",
    desc1: "Projet personnel ‘E-parle’",
    desc2: [
      "Développement d’une application d’apprentissage du français,",
      "Conception et mise en œuvre des fonctionnalités principales,",
      "Assure le bon fonctionnement de l’application (cours, paiement, chat en temps réel).",
    ],
    icon: "✓",
  },
]

export const ImageProject = [
  {
    name: "MalagasyCraft",
    image1: "../../public/images/malagasyc.png",
    title: "Plateforme e-commerce",
    description:
      "Application web e-commerce dédiée à l’artisanat malgache avec gestion des ventes et des produits.",
    demoLink: "https://malagasycraft.com/",
    repoLink: "#",
    technologies: ["Laravel", "React", "TailwindCss", "SQL"],
  },

  {
    name: "CherryTech and Design",
    image1: "images/projet/cherry.png",
    title: "Prise de rendez-vous en ligne",
    description:
      "Application orientée marketing digital. Fonctionne comme une plateforme de publicité.",
    demoLink: "https://cherrytd.com/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss", "MongoDb"],
  },
  {
    name: "o-temps-t-ika",
    image1: "/images/otemtik.png",
    title: "Plateforme e-commerce",
    description:
      "Solution web axée sur la gestion des produits et des transactions clients.",
    demoLink: "https://o-temps-t-ika.vercel.app/",
    repoLink: "#",
    technologies: ["React", "TailwindCss"],
  },
  {
    name: "Soary",
    image1: "/images/tolia_.png",
    title: "Plateforme ERP",
    description:
      "ERP sur mesure : gestion complète de la chaîne commerciale incluant les opérations d’import et export, les achats et la facturation.",
    demoLink: "https://tolia.servehttp.com/",
    repoLink: "#",
    technologies: ["Symfony", "Bootstrap", "pgSQL"],
  },
  {
    name: "Taaz Capital",
    image1: "images/projet/taaz.png",
    title: "Site vitrine",
    description:
      "Application web  axée sur la gestion des produits et des transactions clients.",
    demoLink: "https://taazcapital.mg/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss"],
  },
  {
    name: "Coin de Gadget",
    image1: "images/coin-gadgets.webp",
    title: "Plateforme e-commerce",
    description:
      "Site web permettant la gestion et la vente de produits électroniques en ligne.",
    demoLink: "#",
    repoLink: "#",
    technologies: ["React", "TailwindCss", "Node.js"],
  },
  {
    name: "Imatex",
    image1: "/images/imatex.png",
    title: "Site e-commerce vitrine",
    description:
      "Site vitrine mettant en avant les produits et la présence de l'entreprise sur les réseaux sociaux",
    demoLink: "https://imatex.mg/",
    repoLink: "#",
    technologies: ["React", "TailwindCss"],
  },

  {
    name: "Ivoirpool",
    image1: "/images/ivoire.png",
    title: "Plateforme de voyage",
    description:
      "site web de présentation et de publication d’hôtels, permettant la mise en avant d’établissements et la consultation d’informations hôtelières.",
    demoLink: "https://ivoirpool.vercel.app/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss"],
  },
]
// Types.ts (ou dans ton fichier constant)
export interface EducationItem {
  title: string
  school: string
  date: string
  description: string
}

export const educationData: EducationItem[] = [
  {
    title: "Licence professionnelle en Informatique",
    school: "Institut Supérieur d’Informatique (ISINFO)",
    date: "2024 - 2025",
    description:
      "Bac+3 en Informatique à l’Institut Supérieur d’Informatique (IS-INFO), Antananarivo.",
  },
  {
    title: "Formation en Développement Web",
    school: "GASY-TECH, Antananarivo",
    date: "Août - Janvier 2025",
    description:
      "Formation approfondie en développement web PHP et écosystèmes modernes.",
  },
  {
    title: "Formation en Développement Mobile",
    school: "Orange Digital Center",
    date: "Juin 2024",
    description:
      "Formation en développement mobile cross-platform avec FLUTTER.",
  },
  {
    title: "Baccalauréat Scientifique",
    school: "Lycée Marovoay",
    date: "2016",
    description: "Diplôme de fin d'études secondaires, série scientifique.",
  },
]

export const philosophyData = [
  {
    title: "Code Propre (Clean Code)",
    description:
      "Priorité à la lisibilité et à la maintenabilité pour faciliter l'évolution du produit.",
  },
  {
    title: "User-Centric Design",
    description:
      "Chaque décision technique est prise pour améliorer l'usage final.",
  },
  {
    title: "Agilité & Craftmanship",
    description:
      "Une approche itérative qui valorise l'excellence technique et le feedback.",
  },
  {
    title: "Sécurité 'by design'",
    description:
      "Protection des données sensibles dès la première ligne de code.",
  },
]
