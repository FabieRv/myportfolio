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
    content: "React, PHP, Laravel, Symfony, Python,...",
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
  { name: "React", image: "/images/skils/react_native.png" },
  { name: "TypeScript", image: "/images/skils/types.png" },
  { name: "Next.js", image: "/images/skils/logoss_next.png" },
  { name: "Tailwind CSS", image: "/images/skils/taillwindd.png" },
  { name: "Vue.js", image: "/images/skils/vue.js.jpg" },
  { name: "Angular", image: "/images/skils/angular.jpg" },
]

// BACKEND
export const backendSkills = [
  { name: "Laravel", image: "/images/skils/laravel.webp" },
  { name: "Symfony", image: "/images/skils/symfony.webp" },
  {name: "Node.js", image : "/images/skils/node_js.png" },
  { name: "JAVA", image: "/images/skils/java.webp" },
  { name: "Python", image: "/images/skils/python.jpg" },
]

// BASE DE DONNÉES
export const databaseSkills = [
  { name: "MySQL", image: "/images/skils/mysql.png" },
  { name: "PostgreSQL", image: "/images/skils/pgsql.webp" },
  { name: "MongoDB", image: "/images/skils/mongogb.webp" },
]

export const Logicielle = [
  { name: "Merise", image: "/images/sql.webp" },
  { name: "UML", image: "/images/sql.webp" },
]

export const Design = [
  { name: "Adobe Illustrator", image: "/images/skils/adobe.jpg" },
  { name: "Adobe Photoshop", image: "/images/skils/photoshopp.jpg" },
  { name: "Figma", image: "/images/skils/figma.webp" },
]

// OUTILS
export const toolsSkills = [
  { name: "Git", image: "/images/skils/git.webp" },
  {name: "Github", image: "/images/skils/github.webp"},
  { name: "Postman", image: "/images/skils/postman.webp" },

]

export const mobileSkills = [
  { name: "Flutter", image: "/images/skils/Flutter.webp" }, 
  { name: "React Native", image: "/images/skils/react_native.png"},
  { name: "JAVA", image: "/images/skils/java.webp" },
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
    name: "Rafiacraft",
    image1: "/images/rafiac.png",
    titleKey: "projects.items.rafiacraft.title",
    descriptionKey: "projects.items.rafiacraft.description",
    demoLink: "https://frontrafia.vercel.app",
    repoLink: "#",
    technologies: ["Next.js", "NestJS", "Tailwind CSS", "MySQL" ]
  },

  { name: "LOGISPOT",
  image1: "/images/Logispot.png",
  titleKey: "projects.items.Logispot.title",
  descriptionKey: "projects.items.Logispot.description",
  demoLink : "https://smartlogispot.com/",
  repoLink: "#",
  technologies: ["Next.js", "Tailwind CSS"],
},
{
  name: "O-temps-t-ika",
  image1: "/images/otemtik.png",
  titleKey: "projects.items.otemptika.title",
  descriptionKey: "projects.items.otemptika.description",
  demoLink: "https://o-temps-t-ika.vercel.app/",
  repoLink: "#",
  technologies: ["React", "Tailwind CSS"],
},

  {
    name: "Malagasycraft",
    image1: "/images/malagasyc.png",
    titleKey: "projects.items.malagasycraft.title",
    descriptionKey: "projects.items.malagasycraft.description",
    demoLink: "https://malagasycraft.com/",
    repoLink: "#",
    technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
  },
  
  {
    name: "Taaz Capital",
    image1: "images/projet/taaz.png",
    titleKey: "projects.items.taaz.title",
    descriptionKey: "projects.items.taaz.description",
    demoLink: "https://taazcapital.mg/",
    repoLink: "#",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    name : "ZEWA Madagascar",
    image1: "/images/zewa.png",
    titleKey: "projects.items.zewa.title",
    descriptionKey: "projects.items.zewa.description",
    demoLink: "https://zewa.mg/",
    repoLink: "#",
    technologies: ["Next.js", "NestJS", "Prisma", "PostgreSql"],
  },
  
  {
    name: "CherryTech and Design",
    image1: "images/projet/cherry.png",
    titleKey: "projects.items.cherry.title",
    descriptionKey: "projects.items.cherry.description",
    demoLink: "https://cherrytd.com/",
    repoLink: "#",
    technologies: ["Next.js", "Tailwind CSS", "MongoDb"],
  },


  {
    name: "Imatex",
    image1: "/images/imatex.png",
    titleKey: "projects.items.imatex.title",
    descriptionKey: "projects.items.imatex.description",
    demoLink: "https://imatex.mg/",
    repoLink: "#",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    name: "Hafavy",
    image1:"/images/havafyy.png",
    titleKey: "projects.items.havafy.title",
    descriptionKey: "projects.items.havafy.description",
    demoLink:"https://havafy.mg",
    repoLink: "#",
    technologies: ["Next.js", "Supabase","Tailwind CSS"],
  },
  {
    name: "Ivoirpool",
    image1: "/images/ivoire.png",
    titleKey: "projects.items.ivoirpool.title",
    descriptionKey: "projects.items.ivoirpool.description",
    demoLink: "https://ivoirpool.vercel.app/",
    repoLink: "#",
    technologies: ["Next.js", "Tailwind CSS"],
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
    name: "Aki Travel",
    image1: "/images/akitravel.png",
    titleKey: "projects.items.akitravel.title",
    descriptionKey: "projects.items.akitravel.description",
    demoLink: "https://akitravel.mg/",
    repoLink: "#",
    technologies: ["React", "Tailwind CSS", "pgSql"], 
  }
]
// Types.ts (ou dans ton fichier constant)


export interface EducationItem {
  id: number
}

export const educationData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  {id:4},
]

export const philosophyData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]
