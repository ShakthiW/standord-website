import { AboutUsGenerator } from "@/components/about/about-us";
import AchievementsSection from "@/components/about/achievements";
import Hero from "@/components/about/hero/hero";
import { StandordTimeline } from "@/components/about/time-line";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Hero />

      <StandordTimeline />
      <AchievementsSection />
    </>
  );
};

export default AboutUs;
