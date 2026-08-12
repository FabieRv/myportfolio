import React from "react"
import { educationData } from "../../constant"
import Container from "../common/Container"
import Title from "../common/Title"

const Timeline: React.FC = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto p-8 font-sans">
        <Title label="Mes Educations"></Title>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-300"></div>
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative mb-8 flex items-start justify-between w-full"
            >
              <div className="w-[45%] text-right pt-1">
                {" "}
                <h4 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.school}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 top-[8px] z-10">
                <div
                  className={`w-5 h-5 rounded-full border-4 border-white shadow-sm ${
                    index % 2 === 0 ? "bg-blue-400" : "bg-gray-700"
                  }`}
                ></div>
              </div>

              <div className="w-[45%] text-left pt-1">
                {" "}
                <h4 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Timeline
