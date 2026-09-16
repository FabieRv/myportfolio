import type { AboutTypes } from "../types";

export const headerLinks = [
  { href: "#accueil", key: "accueil" },
  { href: "#formation", key: "formation" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
]
export interface EducationItem {
  id: number;
}

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
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
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
  { name: "React Native", image: "/public/images/ract_n.webp"},
  { name: "JAVA", image: "/images/java.webp" },
]

export const skills = [
  { name: "Back-end", level: 90 },
  { name: "Front-end", level: 70 },
  { name: "Mobile", level: 60 },
  { name: "Base de données", level: 90 },
  { name: "Outils", level: 95 },
]

export interface ExperienceItem {
  year: string
  title: string
  place: string
  desc1: string
  desc2?: string[]
  icon: string
}

export interface ExperiencesTranslation {
  sectionTitle: string
  items: ExperienceItem[]
}

export const experiences: ExperienceItem[] = []

export const ImageProject = [
  {
    name: "Malagasycraft",
    image1: "/images/malagasyc.png",
    titleKey: "projects.items.malagasycraft.title",
    descriptionKey: "projects.items.malagasycraft.description",
    demoLink: "https://...",
    repoLink: "#",
    technologies: ["Laravel", "React", "TailwindCss", "MySQL"],
  },
  {
    name: "Soary",
    image1: "/images/tolia_.png",
    titleKey: "projects.items.soary.title",
    descriptionKey: "projects.items.soary.description",
    demoLink: "https://tolia.servehttp.com/",
    repoLink: "#",
    technologies: ["Symfony", "Bootstrap", "pgSQL"],
  },
  {
    name: "Rafiacraft",
    image1: "/images/rafiac.png",
    titleKey: "projects.items.rafiacraft.title",
    descriptionKey: "projects.items.rafiacraft.description",
    demoLink: "https://...",
    repoLink: "#",
    technologies: ["Next.js", "Nest.js", "TailwindCSS", "MySQL" ]
  },
  {
    name: "CherryTech and Design",
    image1: "images/projet/cherry.png",
    titleKey: "projects.items.cherry.title",
    descriptionKey: "projects.items.cherry.description",
    demoLink: "https://cherrytd.com/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss", "MongoDb"],
  },
  {
    name: "o-temps-t-ika",
    image1: "/images/otemtik.png",
    titleKey: "projects.items.otemptika.title",
    descriptionKey: "projects.items.otemptika.description",
    demoLink: "https://o-temps-t-ika.vercel.app/",
    repoLink: "#",
    technologies: ["React", "TailwindCss"],
  },
  {
    name : "ZEWA Madagascar",
    image1: "/images/zewa.png",
    titleKey: "projects.items.zewa.title",
    descriptionKey: "projects.items.zewa.description",
    demoLink: "https://zewa.mg/",
    repoLink: "#",
    technologies: ["Next.js", "Nest.js", "Prisma", "PostgreSql"],
  },
  {
    name: "Taaz Capital",
    image1: "images/projet/taaz.png",
    titleKey: "projects.items.taaz.title",
    descriptionKey: "projects.items.taaz.description",
    demoLink: "https://taazcapital.mg/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss"],
  },
  {
    name: "Coin de Gadget",
    image1: "images/coin-gadgets.webp",
    titleKey: "projects.items.Coin.title",
    descriptionKey: "projects.items.Coin.description",
    demoLink: "#",
    repoLink: "#",
    technologies: ["React", "TailwindCss", "Node.js"],
  },
  { name: "LOGISPOT",
    image1: "/images/Logispot.png",
    titleKey: "projects.items.Logispot.title",
    descriptionKey: "projects.items.Logispot.description",
    demoLink : "https://smartlogispot.com/",
    repoLink: "#",
    technologies: ["Next.js", "TalwindCSS"],
  },
  {
    name: "Imatex",
    image1: "/images/imatex.png",
    titleKey: "projects.items.imatex.title",
    descriptionKey: "projects.items.imatex.description",
    demoLink: "https://imatex.mg/",
    repoLink: "#",
    technologies: ["React", "TailwindCss"],
  },
  {
    name: "Hafavy",
    image1:"/images/havafyy.png",
    titleKey: "projects.items.havafy.title",
    descriptionKey: "projects.items.havafy.description",
    demoLink:"https://havafy.mg",
    repoLink: "#",
    technologies: ["Next.js", "Supabase","TailwindCss"],
  },

  {
    name: "Ivoirpool",
    image1: "/images/ivoire.png",
    titleKey: "projects.items.ivoirpool.title",
    descriptionKey: "projects.items.ivoirpool.description",
    demoLink: "https://ivoirpool.vercel.app/",
    repoLink: "#",
    technologies: ["Next", "TailwindCss"],
  },
]
// Types.ts (ou dans ton fichier constant)


export interface EducationItem {
  id: number
}

export const educationData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

export const philosophyData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]
