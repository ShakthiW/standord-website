import Hero from "@/components/hero-section";
import OpenCards from "@/components/landing/open-cards";
import { OurServices } from "@/components/landing/our-services";
import { OurServicesBento } from "@/components/landing/projects-list";
import Testimonials from "@/components/landing/testimonials";
import { WhyWaitAnyLonger } from "@/components/landing/why-wait";
import SectionWithHeader from "@/components/middle-header-section";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Hero
        title="Dynamic Web Magic"
        subtitle="Next.js Developer"
        description="Hi! I'm Adrian, a Next.js Developer based in Croatia."
        buttonText="Book a Free Consultation"
        buttonLink="#about"
        spotlights={[
          {
            fill: "#5ce1e6",
            className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
          },
          { fill: "#5ce1e6", className: "h-[80vh] w-[50vw] top-10 left-full" },
        ]}
        backgroundGradient="from-primary to-blue-500"
      />
      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="90vh"
      >
        <OurServicesBento />
      </SectionWithHeader>

      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="60vh"
      >
        <OpenCards />
      </SectionWithHeader>

      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="60vh"
      >
        <OurServices />
      </SectionWithHeader>

      <SectionWithHeader
        title="Crafting the Future of Technology"
        description="Innovative solutions designed to accelerate your business."
        minHeight="60vh"
      >
        <Testimonials />
      </SectionWithHeader>

      <WhyWaitAnyLonger />
    </div>
  );
}
