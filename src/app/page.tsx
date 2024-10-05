import Hero from "@/components/hero-section";
import OpenCards from "@/components/landing/open-cards";
import { OurServices } from "@/components/landing/our-services";
import { OurServicesBento } from "@/components/landing/projects-list";
import Testimonials from "@/components/landing/testimonials";
import { WhyWaitAnyLonger } from "@/components/landing/why-wait";

export default function Home() {
  return (
    <div className="">
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
      <OurServicesBento />

      <div className="flex flex-col justify-center items-center min-h-[90vh] mt-20">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>
        <OpenCards />
      </div>

      <div className="flex flex-col justify-start items-center min-h-[60vh]">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>
        <OurServices />
      </div>

      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>
        <Testimonials />
      </div>

      <WhyWaitAnyLonger />
    </div>
  );
}
