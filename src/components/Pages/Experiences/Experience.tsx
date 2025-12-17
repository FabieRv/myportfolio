import Container from "../../common/Container"
import Title from "../../common/Title"
import { experiences, ListExperiences } from "../../constant"

function Experience() {
  return (
    <div>
      <Container>
        <Title label="Experiences"></Title>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0 text-sm md:text-lg">
            {experiences.map((item) => (
              <div
                key={item.id}
                className=" flex justify-center items-center flex-col "
              >
                <div className="w-17 h-17 p-2  rounded-full shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-full h-full w-full"
                  />
                </div>
                <div className="mt-2 text-sm">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:ml-4 flex flex-col space-y-4 bg-pink-100 ">
            {ListExperiences.map((experiences) => (
              <div
                key={experiences.id}
                className="flex flex-col  p-4 text-sm rounded-xl  "
              >
                <div className="flex items-center">
                  <div className=" flex flex-col items-center">
                    <img
                      src={experiences.src}
                      alt={experiences.alt}
                      className="object-cover h-14 w-14"
                    />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-xl  font-bold">
                      {experiences.role}, {experiences.company}
                    </h1>
                    <span className="text-black text-xs">
                      {experiences.period}
                    </span>
                  </div>
                </div>
                <ul className="list-disc ml-16 mt-2">
                  {experiences.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Experience
