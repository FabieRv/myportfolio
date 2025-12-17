import { HiDevicePhoneMobile } from "react-icons/hi2"
import Container from "../../common/Container"
import Title from "../../common/Title"
import Backend from "../../icons/Backend"

import TextInitial from "../../icons/TextInitial"

function Apropos() {
  return (
    <div>
      <Container>
        <Title label="My Streength"></Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 ">
          <div className="flex flex-col items-center text-center gap-6 p-4 ">
            <div className="text-indigo-600 ">
              <Backend />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Front-End Development
              </h1>

              <p className="text-gray-600 mt-1">
                Creating interactive and responsive user interfaces with the
                latest technologies, ensuring a fluid user experience.
              </p>
            </div>
          </div>

          {/* --- Skill Card 2 --- */}
          <div className="flex flex-col items-center text-center gap-6 p-4 ">
            <div>
              <TextInitial />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {" "}
                Back-End Development
              </h1>

              <p className="text-gray-600 mt-1">
                {" "}
                Creating interactive and responsive user interfaces with the
                latest technologies, ensuring a fluid user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-6 p-4 ">
            <div className="text-pink-600">
              <HiDevicePhoneMobile size={36} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Mobile Developer
              </h1>

              <p className="text-gray-600 mt-1">
                Designing intuitive and aesthetic user experiences for maximum
                impact and optimized conversion.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Apropos
