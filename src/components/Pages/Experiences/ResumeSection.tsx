"use client"

import { experiences } from "../../../constant"
import Container from "../../common/Container"
import Title from "../../common/Title"
import ExperienceTimeline from "./Experience"

const ResumeSection = () => {
  return (
    <section id="Experience" className="bg-white py-20">
      <Container>
        <div className="mb-16 flex justify-center text-center">
          {/* Un titre simple et élégant */}
          <Title label="Professional Path" />
        </div>
        <ExperienceTimeline experiences={experiences} />
      </Container>
    </section>
  )
}

export default ResumeSection
