import Container from "../common/Container";
import Linkedin from "../icons/Linkedin"; // Assuming you want to use your custom Linkedin icon

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4EDEA] py-10 lg:py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="text-gray-700 text-sm font-primary">
          &copy; {currentYear} Fabienne Razafimaharavo. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          {/* Add other social icons here if needed, e.g., GitHub */}
          {/* <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-gray-700 hover:text-primary transition-colors">
            <GitHub className="w-6 h-6" />
          </a> */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;