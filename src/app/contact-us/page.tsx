import ContactDetailsCard from "@/components/contact-us/contact-details";
import { ContactForm } from "@/components/contact-us/contact-form";
// import Hero from "@/components/hero-section";
import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* <Hero
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
      /> */}
      <section className="bg-background text-white max-w-7xl mx-auto py-10 lg:py-20">
        {/* Hero Section */}
        {/* <div className="w-ful dark:bg-background flex flex-col items-center justify-center md:px-10">
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              Crafting the Future of Technology
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Innovative solutions designed to accelerate your business.
            </p>
          </div>
        </div> */}

        <ContactDetailsCard />

        <ContactForm />

        {/* <div className="text-center mb-8 w-full mt-16">
          <h1 className="text-4xl font-semibold">Connect Through</h1>
          <h1 className="text-4xl font-semibold">Social Media</h1>
        </div>

        <div className="mt-16">
          <ShowAllLinks />
        </div> */}
      </section>
    </>
  );
};

export default ContactUs;
