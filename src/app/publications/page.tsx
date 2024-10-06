import Hero from "@/components/hero-section";
import SectionWithHeader from "@/components/middle-header-section";
import { OurPublications } from "@/components/publications/apple-cards";
// import HorizontalScrollCarousel from "@/components/horizontal-scroll";
// import { ProjectShowcase } from "@/components/publications/projects";
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

      <SectionWithHeader
        title="Publications"
        description="Check out our latest publications."
        minHeight="80vh"
      >
        <div className="max-w-7xl">
          <OurPublications />
        </div>
      </SectionWithHeader>
    </>
  );
};

export default Publications;
