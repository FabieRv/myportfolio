"use client";

import Container from "../../common/Container";
import Title from "../../common/Title";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Linkedin from "../../icons/Linkedin";

function Contact() {
  return (
    <section id="Contact" className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <Title label="Contact Me" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, projects, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" size={24} />
              <div>
                <h4 className="font-bold text-xl text-gray-800">Email Address</h4>
                <p className="text-gray-600">fabie.rav@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1" size={24} />
              <div>
                <h4 className="font-bold text-xl text-gray-800">Phone Number</h4>
                <p className="text-gray-600">034 78 984 75</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={24} />
              <div>
                <h4 className="font-bold text-xl text-gray-800">Location</h4>
                <p className="text-gray-600">Antananarivo, Madagascar</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-bold text-xl text-gray-800 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/fabienne-razafimaharavo-911520309" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                {/* Add other social icons here if needed */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <Input id="name" type="text" placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="Regarding a project..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <Textarea id="message" placeholder="Type your message here..." rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <Button type="submit" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;