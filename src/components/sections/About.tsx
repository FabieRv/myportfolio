import Container from "../common/Container"
import Linkedin from "../icons/Linkedin"

const AboutMe = () => {
  return (
    <section id="about" className=" mb-24">
      <Container className="relative  overflow-hidden">
        <div className="absolute top-10 -left-20 w-96 h-96 rounded-full blur-3xl -z-10 "></div>
        <div className="max-w-6xl mx-auto font-primary">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-5/12 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white">
                <div className="w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden">
                  {" "}
                  <img
                    src="/images/desckt.webp"
                    alt="Fabienne Coding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-3 right-2 bg-button px-4 py-4 rounded-xl shadow-xl z-20 hidden md:block ">
                <p className="text-white! font-primary text-lg  lg:text-sm md:text-lg leading-none font-black">
                  Available
                </p>
                <p className="text-white! font-primary text-[6px] uppercase tracking-widest font-bold mt-1">
                  For New Projects
                </p>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <p className="font-primary text-sm lg:text-sm font-medium mb-2 text-gray-900">
                Who am I?
              </p>

              <h2 className="text-4xl md:text-2xl lg:text-4xl font-primary font-bold text-gray-900 mb-8 leading-[0.85] tracking-tighter">
                Crafting digital <br />
                <span className="italic font-serif font-light text-primary">
                  experiences
                </span>
                <br />
                that matter.
              </h2>

              <div className=" font-primary  text-gray-700 text-[16px] leading-relaxed max-w-2xl mb-4">
                <p>
                  Je suis un développeur web passionné, spécialisé dans le
                  développement web et mobile. J’aime concevoir des applications
                  performantes, bien structurées et orientées utilisateur.
                  Curieux et motivé, je continue d’apprendre de nouvelles
                  technologies afin d’améliorer mes compétences et de relever de
                  nouveaux défis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6 pt-4">
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    Phone
                  </h5>
                  <p className="text-gray-700 text-sm mt-1">034 78 984 75</p>
                </div>
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    LinkedIn
                  </h5>
                  <a
                    href="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2563EB] text-sm mt-1 block hover:text-blue-400 transition-colors underline"
                  >
                    <Linkedin className="cursor-pointer w-5 h-5 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutMe
