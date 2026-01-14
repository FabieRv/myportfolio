import Container from "../../../common/Container"
import Title from "../../../common/Title"
import { experiences } from "./../../../constant/index"

function Experiences() {
  return (
    <section>
      <Container>
        {/* Titre Principal */}
        <div className="text-center">
          <Title label="Experiences" />
          <div className="flex justify-center items-center mb-10">
            <div className="h-px w-20 bg-gray-300"></div>
            <div className="mx-4 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs">
              <span className="transform -rotate-45">➤</span>
            </div>
            <div className="h-px w-20 bg-gray-300"></div>
          </div>
        </div>

        <div className="relative">
          {/* Ligne Verticale : Mobile à gauche, Desktop au centre */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Côté Contenu */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div
                      className={`flex flex-col text-left ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* DATE VERSION MOBILE (Même design que desktop) */}
                      <div className="inline-flex md:hidden mb-4">
                        <div className="relative bg-primary text-white text-[10px] font-bold px-5 py-2.5 rounded-sm shadow-md uppercase tracking-wide">
                          {exp.year}
                          {/* Petite flèche pointant vers le bas sur mobile */}
                          <div className="absolute -bottom-1 left-4 w-3 h-3 bg-primary rotate-45"></div>
                        </div>
                      </div>

                      {/* Titres et Descriptions */}
                      <h1 className="text-sm lg:text-lg font-primary font-bold uppercase tracking-wider ">
                        {exp.title}
                      </h1>
                      <h3 className="text-xs lg:text-[14px] font-bold uppercase text-blue-700 mb-2 tracking-widest">
                        {exp.place}
                      </h3>
                      <p className="text-gray-500 text-[11px] lg:text-[13px] font-semibold italic">
                        {exp.desc1}
                      </p>
                      {exp.desc2 && (
                        <p className="text-gray-400 text-[10px] lg:text-[12px] leading-relaxed italic mt-1">
                          {exp.desc2.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Point Central */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gray-300 border-4 border-white rounded-full flex items-center justify-center z-10 shadow-sm">
                    <span className="text-white text-[10px] font-bold">
                      {exp.icon}
                    </span>
                  </div>

                  {/* DATE VERSION DESKTOP (Masquée sur mobile) */}
                  <div className="hidden md:block w-[45%]">
                    <div
                      className={`flex ${
                        isEven ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div className="relative bg-primary text-white text-[9px]  md:text-[10px]  lg:text-[12px] font-bold px-5 py-2.5 rounded-sm shadow-md whitespace-nowrap uppercase tracking-wide">
                        {exp.year}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45 ${
                            isEven ? "-left-1" : "-right-1"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experiences
