import Hero from "@/components/hero-section";
import HorizontalScrollCarousel from "@/components/horizontal-scroll";
import { ProjectShowcase } from "@/components/publications/projects";
import React from "react";

const Publications = () => {
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

      <div className="flex py-10 lg:py-40 flex-col justify-center items-center min-h-screen">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>
        <ProjectShowcase />

        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

export default Publications;
