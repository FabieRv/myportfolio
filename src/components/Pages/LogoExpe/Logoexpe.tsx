import Container from "../../common/Container"
import { experiences } from "../../../constant"

function Logoexpe() {
  return (
    <div className="overflow-hidden">
      <Container className="">
        <div className="w-full relative">
          <div className="flex flex-nowrap items-center gap-10 scroll-horizontal font-primary">
            {experiences.map((item) => (
              <div key={item.id} className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </p>
              </div>
            ))}
            {/* Dupliquer les logos pour un défilement continu */}
            {experiences.map((item) => (
              <div
                key={item.id + "-2"}
                className="flex items-center gap-3 shrink-0"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Logoexpe
