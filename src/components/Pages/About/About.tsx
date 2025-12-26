import Button from "../../common/Button"
import Container from "../../common/Container"
import Title from "../../common/Title"

function About() {
  return (
    <div>
      <Container>
        {/* Titre */}
        <div className="flex flex-col items-center">
          <Title label="About Me" />
          {/* <hr className="w-50 border-2 border-blue-500 rounded mb-6" /> */}
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-start ">
          {/* Image */}
          <img
            src="../../../../public/images/abouts.jpg"
            alt="About Fabienne"
            className="w-[400px] max-w-xs sm:max-w-sm md:max-w-md  h-auto object-cover rounded-lg mx-auto lg:mx-0"
          />

          {/* Texte + Infos */}
          <div className="flex flex-col w-full md:w-full lg:w-2/3">
            {/* Présentation */}
            <div className="text-center md:text-center lg:text-left">
              <h1 className="font-header text-xl sm:text-xl md:text-2xl font-bold mb-">
                I'm Fabienne
              </h1>
              <p className=" sm:text-lg md:text-lg mb-6 text-lg">
                Développeur passionné, motivé et curieux, capable de s’adapter à
                différentes technologies et projets. J’aime créer des solutions
                performantes et efficaces tout en apprenant continuellement et
                en relevant des défis techniques.
              </p>
            </div>

            {/* Informations */}
            <div className="flex flex-col text-lg ">
              {/* Flex uniquement sur LG et XL */}
              <div className="text-center lg:flex lg:justify-wrapper gap-0 lg:gap-6 lg:items-center">
                <h1 className="font-header text-lg sm:text-xl md:text-xl font-bold">
                  Name:
                </h1>
                <p>Fabienne RAZAFIMAHARAVO</p>
              </div>

              <div className="text-center lg:flex lg:justify-wrapper gap-0 lg:gap-6 lg:items-center">
                <h1 className="font-header text-lg sm:text-xl md:text-xl font-bold">
                  Address:
                </h1>
                <p>Ambohimirary Ampasampito</p>
              </div>

              <div className="text-center lg:flex lg:justify-wrapper gap-0 lg:gap-6 lg:items-center">
                <h1 className="font-header text-lg sm:text-xl md:text-xl font-bold">
                  Phone:
                </h1>
                <p>+261 34 78 984 75</p>
              </div>

              <div className="text-center lg:flex lg:justify-wrapper gap-0 lg:gap-6 lg:items-center">
                <h1 className="font-header text-lg sm:text-xl md:text-xl font-bold">
                  Email:
                </h1>
                <p>fabie.rav@gmail.com</p>
              </div>

              <div className="text-center lg:flex lg:justify-wrapper gap-0 lg:gap-6 lg:items-center">
                <h1 className="font-header text-lg sm:text-xl md:text-xl font-bold">
                  LinkedIn:
                </h1>
                <p className="break-all">
                  www.linkedin.com/in/fabienne-razafimaharavo-911520309
                </p>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-center lg:justify-start gap-4 mt-10">
              <Button label="Upload CV" />
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#5DA9E9] text-[#5DA9E9] rounded-full font-medium hover:bg-[#5DA9E9] hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
