import Container from "../../common/Container"

const AboutMe = () => {
  return (
    <section id="about" className="bg-white">
      <Container className="relative py-24 overflow-hidden">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* 1. L'IMAGE (Style cohérent avec le Hero : bords arrondis et shadow) */}
            <div className="w-full md:w-5/12 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden">
                  {" "}
                  {/* Adjusted height for better responsiveness */}
                  <img
                    src="/images/desckt.webp"
                    alt="Fabienne Coding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badge d'expérience (Même style que tes stats Hero) */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-100">
                <p className="text-primary font-primary text-lg lg:text-2xl leading-none font-black">
                  Available
                </p>
                <p className="text-gray-400 font-primary text-[10px] uppercase tracking-widest font-bold mt-1">
                  For New Projects
                </p>
              </div>
            </div>

            {/* 2. LE TEXTE (Style copié sur ton Hero Profile) */}
            <div className="w-full md:w-7/12">
              <p className="font-primary  lg:text-lg font-medium mb-2 text-gray-900">
                Who am I?
              </p>

              <h2 className="text-4xl md:text-4xl lg:text-5xl font-primary font-bold text-gray-900 mb-8 leading-[0.85] tracking-tighter">
                Crafting digital <br />
                <span className="italic font-serif font-light text-primary">
                  experiences
                </span>
                <br />
                that matter.
              </h2>

              <div className="font-primary font-medium text-gray-700 text-lg leading-relaxed max-w-2xl mb-12">
                <p>
                  Passionate about the <strong>Web </strong>and{" "}
                  <strong>Mobile</strong> world, I put my technical expertise at
                  the service of your vision to bring fluid, robust, and
                  memorable products to life. Let’s work together to transform
                  your ideas into a unique digital experience.
                </p>
              </div>

              {/* 3. LES INFOS PERSONNELLES (Style "Barre de services" avec border-l) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {/* Item Name */}
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    Full Name
                  </h5>
                  <p className="text-gray-700 text-sm mt-1">
                    Fabienne RAZAFIMAHARAVO
                  </p>
                </div>

                {/* Item Email */}
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    Email Address
                  </h5>
                  <p className="text-primary text-sm mt-1 italic font-medium">
                    fabie.rav@gmail.com
                  </p>
                </div>

                {/* Item Phone */}
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    Phone
                  </h5>
                  <p className="text-gray-700 text-sm mt-1">034 78 984 75</p>
                </div>

                {/* Item LinkedIn */}
                <div className="border-l pl-4 border-gray-400">
                  <h5 className="font-primary text-sm font-bold uppercase tracking-wider">
                    LinkedIn
                  </h5>
                  <a
                    href="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 text-sm mt-1 block hover:text-primary transition-colors underline decoration-primary/20"
                  >
                    Fabienne RAZAFIMAHARAVO ↗
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
