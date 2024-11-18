import { Methodology } from "@/components/approach/methodology";
import CalltoAction from "@/components/call-to-action";
import Hero from "@/components/hero-section";
import SectionWithHeader from "@/components/middle-header-section";
import React from "react";

const Approach = () => {
  return (
    <>
      <Hero
        title="Dynamic Web Magic"
        subtitle="How We Make AI Work for You"
        description="Our Proven Approach to AI Success"
        textEffectWords="Every solution we create is guided by a strategic approach designed to deliver real results. Discover how we tailor AI to meet your business goals."
        buttonText="Learn About Our Approach"
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
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="60vh"
      >
        <div className="w-full">
          <Methodology />
        </div>
      </SectionWithHeader>

      <CalltoAction />
    </>
  );
};

export default Approach;
