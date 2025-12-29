import Button from "../../common/Button"
import Container from "../../common/Container"

function Profile() {
  return (
    <div className="bg-[#F4EDEA]">
      <Container className="py-0!">
        <div className="max-w-6xl mx-auto">
          <div className="lg:relative grid grid-cols-1 md:grid-cols-12 gap-4 items-start ">
            <div className="md:col-span-10 md:col-start-2 flex justify-center">
              <div className=" lg:relative  w-[300px]  lg:w-[440px] bg-secondary rounded-b-full overflow-hidden">
                <img
                  src="/images/profile-remouve.webp"
                  alt="Profile"
                  className="w-full h-full object-cover py-0!"
                />
              </div>
            </div>

            {/* 2. LE TEXTE EN ABSOLUTE (Chevauche l'image) */}
            <div className="lg:absolute top-20 left-0 z-20 md:col-span-5 pointer-events-none">
              <div className="pointer-events-auto text-center md:text-left lg:text-base">
                {/* Permet de cliquer sur le bouton malgré le absolute */}

                <p className="text-lg font-medium mb-2">Hey, I'm Fabienne</p>

                <h1 className="text-4xl md:text-6xl font-bold leading-[0.85] tracking-tighter">
                  A Web <br />
                  <span className="italic font-serif font-light text-4xl md:text-6xl">
                    & Mobile
                  </span>
                  <br />
                  Developper
                </h1>

                <p className="mt-6 text-gray-700 max-w-xs  md:text-lg  mx-auto md:mx-0 font-primary font-medium">
                  Développeur Fullstack passionné par le développement web et
                  Mobile, avec une solide expérience en front-end et back-end.
                  Curieux et motivé, j’aime apprendre de nouvelles technologies
                  et relever des défis techniques.
                </p>

                <Button
                  label="Contact Me"
                  className="mt-8 flex items-center gap-3  text-white pl-6 pr-2 py-2 rounded-full uppercase text-sm font-bold tracking-widest mb-10 order-2 mx-auto md:mx-0"
                >
                  <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">
                    →
                  </span>
                </Button>
              </div>
            </div>

            {/* 3. LES STATS (À droite, au-dessus de l'image aussi) */}
            <div className="absolute top-45 lg:top-20 right-0 z-20 hidden  lg:flex flex-col items-end space-y-12 text-right pr-12 lg:pl-0! ">
              <div>
                <p className=" text-lg lg:text-4xl font-bold ">1+</p>
                <p className="text-xs text-gray-500 uppercase">
                  Years Experience
                </p>
              </div>
              <div>
                <p className=" text-lg  lg:text-4xl font-bold ">20+</p>
                <p className="text-xs text-gray-500 uppercase">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className=" text-lg  lg:text-4xl font-bold ">*99%</p>
                <p className="text-xs text-gray-500 uppercase">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* BARRE DE SERVICES (RESTE EN BAS) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mt-10 border-gray-400 pb-10 pt-10 order-1">
            <div className="border-l pl-4 border-gray-400">
              <h5 className="text-sm font-bold uppercase">
                FrontEnd Developper
              </h5>
              <p className="text-gray-700 text-sm">
                Interfaces claires et responsives.
              </p>
            </div>

            <div className="border-l pl-4 border-gray-400">
              <h5 className="text-sm font-bold uppercase">
                BackEnd Developper
              </h5>
              <p className="text-gray-700 text-sm">
                Gestion de la logique applicative, des données et des
                fonctionnalités serveur.
              </p>
            </div>

            <div className="border-l pl-4 border-gray-400">
              <h5 className="text-sm font-bold uppercase">Mobile Developper</h5>
              <p className="text-gray-700 text-sm">
                Applications mobiles fluides et intuitives.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
