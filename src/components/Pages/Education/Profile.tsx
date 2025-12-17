import Button from "../../common/Button"
import Container from "../../common/Container"

function Profile() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex justify-center md:block">
            <img
              src="/images/profile.webp"
              alt="profile"
              className="w-50 h-50 rounded-full object-cover border border-blue-400 p-1"
            />
          </div>
          <div className=" text-2xl  md:text-2xl  lg:text-3xl font-tertiary font-bold lg:font-tertiary  lg:font-bold w-[300px] md:w-[500px] lg:w-[900px] text-center">
            <h1 className="h-full w-full  ">
              {" "}
              Hi, I'm <span className="text-blue-500">Fabienne</span>
            </h1>
            <h1> Full Stack Developer Based in Madagascar</h1>
          </div>
          <p className="text-center font-primary text-xs lg:text-lg w-[300px] lg:w-[700px]  ">
            I build fast, functional, and elegant web applications while
            continuously improving my skills.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4  font-base mt-4 lg:mt-6">
          <Button label="View Project" />
          <Button label="Contact Me" />
        </div>
      </Container>
    </div>
  )
}

export default Profile
