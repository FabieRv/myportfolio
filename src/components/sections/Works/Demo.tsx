import { ImageProject } from "../../../constant"
import { AnimatedProject } from "./Animated-project"

function AnimatedTestimonialsDemo() {
  const testimonials = ImageProject.map((project) => ({
    quote: `${project.description}, ${project.name}`, // tu peux changer le texte
    name: project.name,
    designation: "Projet Réalisé", // tu peux mettre un vrai rôle si tu veux
    src: project.image, // chemin de l'image
  }))

  return <AnimatedProject testimonials={testimonials} />
}

export { AnimatedTestimonialsDemo }
