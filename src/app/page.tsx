import HeroSection from "@/components/landing/hero-section";
import OurServices from "@/components/landing/our-services";
import ProjectList from "@/components/landing/projects-list";
import { WhyWaitAnyLonger } from "@/components/landing/why-wait";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProjectList />
      <OurServices />

      <WhyWaitAnyLonger />
    </div>
  );
}
