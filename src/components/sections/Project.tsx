import Container from "../common/Container"

const projects = [
  {
    title: "RafiaCraft",
    description:
      "Plateforme e-commerce de produits artisanaux malgaches (Raphia, Satrana).",
    tech: ["Next.js", "NestJS", "Prisma", "Tailwind"],
    link: "#", // Remplacez par vos liens réels
    image: "https://via.placeholder.com/400x250", // Image du projet
  },
  {
    title: "E-Parle",
    description:
      "Application d'apprentissage du français avec une interface intuitive.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Soary Project",
    description:
      "Application commerciale développée avec Symfony pour la gestion locale.",
    tech: ["Symfony", "MySQL", "Twig"],
    link: "#",
    image: "https://via.placeholder.com/400x250",
  },
]

const Projects = () => {
  return (
    <Container>
      <section className="py-20 " id="projects">
        <div className="container mx-auto px-6">
          {/* Titre de la section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mes Projets
            </h2>
            <div className="h-1 w-20 bg-[#50A2FF] mx-auto rounded"></div>
            <p className="text-gray-600 mt-4">
              Découvrez mes réalisations récentes en développement web et
              mobile.
            </p>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image du projet avec overlay au hover */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Voir le projet
                    </a>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Projects
