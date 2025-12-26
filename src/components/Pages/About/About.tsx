import Button from "../../common/Button"
import Container from "../../common/Container"

function About() {
  return (
    <div>
      <Container>
        <div className="flex flex-col">
          <h1>About Me</h1>
          <hr className="w-20" />
        </div>
        <div className="flex flex-row justify-between">
          <img
            src="../../../../public/images/abouts.jpg"
            alt=""
            className="h-70 w-70 object-cover"
          />
          <div className="flex flex-col ">
            <div>
              {" "}
              <h1>I'm Fabienne </h1>
              <p>
                <span>Développeur </span>passionné, motivé et curieux, capable
                de s’adapter à différentes technologies et projets. J’aime créer
                des solutions performantes et efficaces tout en apprenant
                continuellement et en relevant des défis techniques.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                {" "}
                <h1>Name</h1>
                <p>Fabienne RAZAFIMAHARAVO</p>
              </div>
              <div className="flex flex-wrap">
                <h1>Adress</h1>
                <p> Ambohimirary Ampasampito </p>
              </div>
              <div className="flex flex-wrap">
                <h1>Phone</h1>
                <p>+261 34 78 984 75</p>
              </div>
              <div className="flex flex-wrap">
                <h1>Email</h1>
                <p>fabie.rav@gmail.com</p>
              </div>
              <div className="flex flex-wrap">
                <h1>Linkedin</h1>
                <p>www.linkedin.com/in/fabienne-razafimaharavo-911520309</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <Button label="Upload CV"></Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center
                px-6 py-3
                border border-[#5DA9E9]
                text-[#5DA9E9]
                rounded-full
                font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
