import { BiVideo } from "react-icons/bi"
import Container from "../../common/Container"
import Title from "../../common/Title"
import { projets } from "../../../constant/index"
import Button from "../../common/Button"

function Project() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center">
          <Title label="Projects"></Title>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          {projets.map((project) => (
            <div
              key={project.id}
              className=" border border-pink-100 rounded-xl p-5 h-fit"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="object-cover w-full  lg:h-50"
              />
              <div className="my-2 font-bold">
                <h1>{project.title}</h1>
              </div>
              <div>
                {" "}
                <p className="text-sm">{project.descriptio}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech) => (
                  <p key={tech} className="text-xs bg-pink-200 rounded-2xl p-2">
                    {tech}
                  </p>
                ))}
              </div>
              <div>
                <a href={project.demoLink}>
                  <Button
                    label="Demo"
                    className="text-white flex justify-center gap-4"
                  >
                    {" "}
                    <BiVideo className="text-white mt-1"></BiVideo>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Project
