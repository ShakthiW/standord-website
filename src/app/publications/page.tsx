import Hero from "@/components/hero-section";
import SectionWithHeader from "@/components/middle-header-section";
// import { OurArticles } from "@/components/publications/articles";
import OurBlogs from "@/components/publications/blogs";
import { OurPublications } from "@/components/publications/our-publications";
// import HorizontalScrollCarousel from "@/components/horizontal-scroll";
// import { ProjectShowcase } from "@/components/publications/projects";
import React from "react";

const Publications = () => {
  return (
    <>
      <Hero
        title="Dynamic Web Magic"
        subtitle="Stay Informed, Stay Ahead"
        description="Explore Our Insights and Research"
        textEffectWords="From AI trends to industry insights, dive into our publications and stay ahead of the curve with expert articles and cutting-edge research."
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
      {/* 
      <SectionWithHeader
        title="Articles"
        description="Check out our latest articles."
        minHeight="80vh"
        marTop="mt-10"
        lgmarTop="lg:mt-20"
      >
        <div className="max-w-7xl">
          <OurArticles />
        </div>
      </SectionWithHeader> */}

      <SectionWithHeader
        title="Blogs"
        description="Check out our latest blogs."
        minHeight="50vh"
      >
        <OurBlogs />
      </SectionWithHeader>

      <SectionWithHeader
        title="Publications"
        description="Check out our latest publications."
        minHeight="70vh"
      >
        <div className="max-w-7xl">
          <OurPublications />
        </div>
      </SectionWithHeader>
    </>
  );
};

export default Publications;
