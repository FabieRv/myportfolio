import Button from "../../../common/Button"
import Container from "../../../common/Container"

function Contact() {
  return (
    <section className="mb-10 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-sm font-primary font-bold uppercase  text-primary mb-2">
              Get In Touch
            </h2>
            <h1 className=" text-4xl italic font-serif font-bold     text-gray-900 ">
              {" "}
              Let's work together.
            </h1>
          </div>

          {/* Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-[10px] font-primary font-bold uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 outline-none focus:border-[#003366] transition-colors text-sm font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-primary font-bold uppercase tracking-widest text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 outline-none focus:border-[#003366] transition-colors text-sm font-medium"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-primary font-bold uppercase tracking-widest text-gray-400">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 outline-none focus:border-[#003366] transition-colors text-sm font-medium resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <Button label="Send Message"></Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact
