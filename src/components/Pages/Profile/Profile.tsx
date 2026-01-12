import Button from "../../common/Button"
import Container from "../../common/Container"

function Profile() {
  return (
    <div className="bg-[#F4EDEA] overflow-hidden">
      <Container className="py-0!">
        {/* Le conteneur parent passe en flex-col (mobile) et flex-row (tablette) */}
        <div className="flex flex-col md:flex-row items-center justify-center lg:block lg:relative min-h-fit lg:min-h-[580px]  lg:py-0 gap-10 md:gap-16">
          <div className="md:col-span-10 md:col-start-2 flex justify-center z-10 order-1 md:order-2">
            <div className="lg:relative w-[180px] md:w-[280px] lg:w-[380px] bg-secondary rounded-b-full overflow-hidden">
              <img
                src="/images/prof-removebg-preview.webp"
                alt="Profile"
                className="w-full h-full object-cover py-0!"
              />
            </div>
          </div>

          {/* 2. LE TEXTE EN ABSOLUTE (Chevauche l'image en version Desktop uniquement) */}
          <div className="flex flex-col gap-4 lg:absolute lg:top-20 lg:left-0 z-20 pointer-events-none order-2 md:order-1">
            <div className="pointer-events-auto text-center md:text-left lg:text-base">
              <p className="text-xs lg:text-sm font-primary mb-2">
                Hey, I'm Fabienne
              </p>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[0.85] tracking-tighter">
                A Web <br />
                <span className="italic font-serif font-light text-2xl md:text-4xl lg:text-5xl">
                  & Mobile
                </span>
                <br />
                Developper
              </h1>

              <p className="mt-6 text-gray-700 max-w-xs mx-auto md:mx-0 font-primary font-medium">
                Passionate Fullstack Developer specializing in Web and Mobile
                development, with solid experience in both front-end and
                back-end. Curious and driven, I enjoy learning new technologies
                and tackling complex technical challenges.
              </p>
            </div>

            {/* Correction du bouton : centré sur mobile, à gauche sur md et lg */}
            <div className="pointer-events-auto flex justify-center md:justify-start lg:block">
              <Button label="Contact Me" />
            </div>
          </div>

          {/* 3. LES STATS (Cachées sur mobile et tablette, visible sur desktop) */}
          <div className="absolute top-45 lg:top-20 right-0 z-20 hidden lg:flex flex-col items-end space-y-12 text-right pr-12 lg:pl-0!">
            <div>
              <p className="text-lg lg:text-4xl font-bold ">1+</p>
              <p className="text-xs text-gray-500 uppercase">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-lg lg:text-4xl font-bold ">20+</p>
              <p className="text-xs text-gray-500 uppercase">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-lg lg:text-2xl font-bold ">*99%</p>
              <p className="text-xs text-gray-500 uppercase">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* BARRE DE SERVICES (RESTE EN BAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-gray-400  border-t md:border-t-0 mb-10 ">
          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">FrontEnd Developper</h5>
            <p className="text-gray-700 text-sm">
              Interfaces claires et responsives.
            </p>
          </div>

          <div className="border-l pl-4 border-gray-400">
            <h5 className="text-sm font-bold uppercase">BackEnd Developper</h5>
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
      </Container>
    </div>
  )
}

export default Profile
