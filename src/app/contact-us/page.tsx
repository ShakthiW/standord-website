import { ShowAllLinks } from "@/components/about/all-links";
import ContactDetailsCard from "@/components/contact-us/contact-details";
import Hero from "@/components/hero-section";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Hero
        title="Dynamic Web Magic"
        subtitle="Next.js Developer"
        description="Hi! I'm Adrian, a Next.js Developer based in Croatia."
        buttonText="Book a Free Consultation"
        buttonLink="#about"
        spotlights={[
          {
            fill: "white",
            className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
          },
          { fill: "pink", className: "h-[80vh] w-[50vw] top-10 left-full" },
        ]}
        backgroundGradient="from-teal-300 to-blue-500"
      />
      <section className="bg-background text-white max-w-7xl mx-auto py-10 lg:py-40">
        {/* Hero Section */}
        <div className="w-ful dark:bg-background flex flex-col items-center justify-center md:px-10">
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              Crafting the Future of Technology
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Innovative solutions designed to accelerate your business.
            </p>
          </div>
        </div>

        <ContactDetailsCard />

        <div className="text-center mb-8 w-full mt-16">
          <h1 className="text-4xl font-semibold">Let’s Talk</h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="What are you planning to build?"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              ></textarea>
            </div>
            <div>
              <button className="w-full px-8 py-2 rounded-md bg-[#5ce1e6] text-gray-700 font-bold transition duration-200 hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-[#5ce1e6]">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mb-8 w-full mt-16">
          <h1 className="text-4xl font-semibold">Connect Through</h1>
          <h1 className="text-4xl font-semibold">Social Media</h1>
        </div>

        {/* Social Icons */}
        <div className="mt-16">
          <ShowAllLinks />
          </div>
      </section>
    </>
  );
};

export default ContactUs;
