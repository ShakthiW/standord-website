import AchievementsSection from "@/components/about/achievements";
// import { StandordTimeline } from "@/components/about/time-line";
import WhoWeAre from "@/components/about/who-we-are";
import Hero from "@/components/hero-section";
import SectionWithHeader from "@/components/middle-header-section";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Hero
        title="Dynamic Web Magic"
        subtitle="Who We Are"
        textEffectWords="Our team of AI experts, innovators, and strategists are dedicated to transforming businesses through groundbreaking AI solutions."
        description="Driven by Passion, United by Innovation"
        buttonText=""
        buttonLink=""
        spotlights={[
          {
            fill: "white",
            className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
          },
          { fill: "pink", className: "h-[80vh] w-[50vw] top-10 left-full" },
        ]}
        backgroundGradient="from-primary to-blue-500"
      />

      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="90vh"
      >
        {/* <StandordTimeline /> */}
        <WhoWeAre />
      </SectionWithHeader>

      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="60vh"
      >
        <AchievementsSection />
      </SectionWithHeader>
    </>
  );
};

export default AboutUs;
