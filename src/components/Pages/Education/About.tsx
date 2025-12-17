import Container from "../../common/Container"
import { aboutLinks } from "../../constant"
import { FaFigma } from "react-icons/fa"
import Title from "../../common/Title"
import { TbBrandVscode } from "react-icons/tb"
import { FaGitAlt } from "react-icons/fa6"
import { SiPostman } from "react-icons/si"

function About() {
  return (
    <Container className="py-8 md:py-16">
      <Title label=" Education "></Title>
      <div className="flex flex-col lg:flex-row lg:gap-12 items-center lg:items-start">
        <div className="mb-8 lg:mb-0">
          <img
            src="public/images/profile_.webp"
            alt="Profile"
            className=" object-cover rounded-xl shadow-lg md:max-w-md w-[380px] h-[400px] "
          />
        </div>

        <div className="flex flex-col gap-8 lg:gap-10 lg:w-3/5">
          <div>
            <p className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              eaque at quas perferendis. Alias at ea laudantium laborum corporis
              eius. Totam dolorem sed aliquam. Perferendis itaque vero facere
              quos velit?
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {aboutLinks.map((item, index) => (
              <div
                key={index}
                className="border-2 border-[#eb34e5] flex flex-col items-center justify-center rounded-md gap-2 p-3 text-center"
              >
                <div className="flex flex-col items-center gap-1">
                  <h1 className="font-bold text-sm">{item.title}</h1>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-6 h-6 object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 font-semibold">Software I Use:</p>
            <div className="flex gap-6 justify-center md:justify-start">
              <TbBrandVscode // Nouvel icône : Visual Studio Code
                size={25}
                className="text-blue-500 hover:scale-110 transition-transform"
              />
              <FaGitAlt // Nouvel icône : Git
                size={26}
                className="text-orange-600 hover:scale-110 transition-transform"
              />{" "}
              <SiPostman // Postman
                size={25}
                className="text-orange-400 hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
