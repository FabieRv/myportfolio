import type { AboutTypes, LinkType } from "../types"

export const headerLinks: LinkType[] = [
  { href: "/#about", label: "Accueil" },
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
  {name: "TypeScript", image: "/images/ts.png"},
  { name: "React", image: "/images/Reactt.png"},
  { name: "Next.js", image:"images/logo_next.png"},
  { name: "TailwindCSS", image: "/images/tailwind.webp" },
  {name: "Angular.js", image: "/images/angular.js.png"}
]

// BACKEND
export const backendSkills = [
  { name: "PHP", image: "/images/php.webp" },
  { name: "Laravel", image: "/images/laravel.webp" },
  { name: "Symfony", image: "/images/symfony.webp" },
  {name: "Node.js", image : "/images/node_js.png" },
  { name: "JAVA", image: "/images/java.webp" },
  { name: "Python", image: "/images/pyhon.webp" },
]

// BASE DE DONNÉES
export const databaseSkills = [
  { name: "MySQL", image: "/images/mysql.png" },
  { name: "PostgreSQL", image: "/images/pgsql.webp" },
  { name: "MongoDB", image: "images/mongogb.webp" },
]

export const Logicielle = [
  { name: "Merise", image: "/images/sql.webp" },
  { name: "UML", image: "/images/sql.webp" },
]

export const Design = [
  { name: "Adobe Illustrator", image: "/images/adobe.png" },
  { name: "Adobe Photoshop", image: "/images/photoshopp.jpg" },
  { name: "Figma", image: "/images/figmas.png" },
]

// OUTILS
export const toolsSkills = [
  { name: "Git", image: "/images/git.webp" },
  {name: "Github", image: "/images/github.png"},
  { name: "Postman", image: "/images/postman.webp" },

]

export const mobileSkills = [
  { name: "Flutter", image: "images/Flutter.webp" }, 
  { name: "React Native", image: "/public/images/ract_n.webp"}
]

export const skills = [
  { name: "Back-end", level: 90 },
  { name: "Front-end", level: 70 },
  { name: "Mobile", level: 60 },
  { name: "Base de données", level: 90 },
  { name: "Outils", level: 95 },
]

export const experiences = [
  {
    year: "Juillet 2025 — Mai 2026",
    title: "Développeur JavaScript Freelance",
    place: "Rafiacraft",
    desc1: "Développeur Next.js / Node.js",
    desc2: [
      "Conception et développement du site web Rafiacraft,",
      "Développement de fonctionnalités de CRM en Rafiacraft",
      "Développement des modules de gestion des ventes et des produits",
      "Tests, correction des anomalies et déploiement de l’application Rafiacraft.",
      
    ],
    icon: "✓",

  },
  {
    year: "Octobre 2025 — Janvier 2025",
    title: "Stagiaire Développeur Frontend",
    place: "Cherry Tech and Design",
    desc1: "Stage Développeur JavaScript — 4 mois",
    desc2: [
      "Contribution à la création d’interfaces utilisateur modernes et réactives en React ou Next.js",
      "",
      "Optimisation de l’expérience utilisateur sur mobile,",
      "Déploiement et mise en production d’applications web robustes."
    ],
    icon: "✓",
  },
  {
    year: "Juin 2024 — Novembre 2024",
    title: "Stagiaire Développeur Backend",
    place: "Tolia Madagascar",
    desc1: "Stage Développeur Symfony — 6 mois",
    desc2: [
      "Travail sur des projets commerciaux comme ‘Soary Project’,",
      "Gestion de stock,",
      "Gestion de l’export et de l’import.",
    ],
    icon: "✓",
  },
  {
    year: "2023 — 2024",
    title: "Stagiaire Développeur Backend",
    place: "MalagasyCraft",
    desc1: "Stage Développeur Laravel — 6 mois",
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
    name: "Malagasycraft",
    image1: "/images/malagasyc.png",
    title: "Projet E-commerce",
    description:
      "Application web e-commerce dédiée à l’artisanat malgache avec gestion des ventes et des produits.",
    demoLink: "https://malagasycraft.com/",
    repoLink: "#",
    technologies: ["Laravel", "React", "TailwindCss", "MySQL"],
  },
  {
    name: "Soary",
    image1: "/images/tolia_.png",
    title: "Projet ERP",
    description:
      "ERP sur mesure : gestion complète de la chaîne commerciale incluant les opérations d’import et export, les achats et la facturation.",
    demoLink: "https://tolia.servehttp.com/",
    repoLink: "#",
    technologies: ["Symfony", "Bootstrap", "pgSQL"],
  },
  {
    name: "RAFIACRAFT",
    image1: "/images/rafiac.png",
    title: "Projet CRM",
    description:"Application web de gestion de la relation client (CRM), avec gestion des clients et tableau de bord administrateur pour un suivi efficace.",
    demoLink: "#",
    repoLink: "#",
    technologies: ["Next.js", "Nest.js", "TailwindCSS", "MySQL" ]
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
    title: "Site e-commerce",
    description:
      "Plateforme vitrine dédié à la présentation des produits et à la gestion des transactions clients.",
    demoLink: "https://o-temps-t-ika.vercel.app/",
    repoLink: "#",
    technologies: ["React", "TailwindCss"],
  },
  {
    name : "ZEWA Madagascar",
    image1: "/images/zewa.png",
    title: "site vitrine",
    description: "Site vitrine dédié à la présentation de ZEWA Madagascar, mettant en avant son expertise dans le recyclage des déchets électroniques et la sécurité  des données.",
    demoLink: "https://zewa.mg/",
    repoLink: "#",
    technologies: ["Next.js", "Nest.js", "Prisma", "PostgreSql"],
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
    title: "Projet e-commerce",
    description:
      "Site web permettant la gestion et la vente de produits électroniques en ligne.",
    demoLink: "#",
    repoLink: "#",
    technologies: ["React", "TailwindCss", "Node.js"],
  },
  { name: "LOGISPOT",
    image1: "/images/Logispot.png",
    title: "site vitrine",
    description: "LOGISPOT accompagne les entreprises dans la gestion et l’optimisation de leurs stocks et inventaires, tout en sécurisant leurs opérations.",
    demoLink : "https://smartlogispot.com/",
    repoLink: "#",
    technologies: ["Next.js", "TalwindCSS"],
  },
  {
    name: "Imatex",
    image1: "/images/imatex.png",
    title: "Site VITRINE ",
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
    school: "Institut Supérieur d’Informatique (IS-INFO)",
    date: "2024 - 2025",
    description:
      "Titulaire de diplômée d’une licence en Informatique à l’Institut Supérieur d’Informatique (IS-INFO), Antananarivo.",
  },
  {
    title: "Formation en Développement Web",
    school: "Centre de Formation Professionnelle : GASY-TECH, Antananarivo",
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
    description: "Titulaire du Baccalauréat – Série Scientifique",
  },
]

export const philosophyData = [
  {
    title: "Performance et Efficacité",
    description:
      "Des applications pensées pour répondre efficacement aux besoins des utilisateurs.",
  },
  {
    title: "Code clair et maintenable",
    description:
      "Une architecture propre et un code structuré pour faciliter l’évolution des projets.",
  },
  {
    title: "Innovation et apprentissage",
    description:
      "Une veille constante sur les nouvelles technologies et les bonnes pratiques du développement.",
  },
  {
    title: "Esprit d’équipe",
    description:
      "Collaboration, partage d’idées et communication pour construire ensemble des projets efficaces et de qualité.",
  },
]
