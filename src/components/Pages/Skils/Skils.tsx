import Container from "../../common/Container"
import Title from "../../common/Title"

function Skils() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center">
          <Title label="My Skills" />
          {/* <hr className="w-45 border-2 border-blue-500 rounded mb-6" /> */}
        </div>
      </Container>
    </div>
  )
}

export default Skils
