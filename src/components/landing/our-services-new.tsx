import { TbBrandWechat } from "react-icons/tb";
import { LuBuilding2 } from "react-icons/lu";
import { MdRecommend } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: TbBrandWechat,
    name: "AI Consultations",
    description:
      "Expert guidance on integrating AI into your business. From strategy to implementation, we help you harness the full potential of AI for sustainable growth.",
    href: "/contact-us",
    cta: "Learn more",
    background: <Image className="absolute object-cover w-full h-full opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out" src={"/ai_consulations.jpg"} alt="AI consultation" layout="fill" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RiCustomerService2Line,
    name: "Customer Engagement & Support Automation",
    description:
      "Enhance customer interactions with AI-driven chatbots and support systems, providing instant, 24/7 assistance that learns and improves over time.",
    href: "/",
    cta: "Learn more",
    background: <Image className="absolute object-cover w-full h-full opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out" src={"/cust_support.jpg"} alt="AI consultation" layout="fill" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MdRecommend,
    name: "Intelligent Recommendation & Feedback Systems",
    description:
      "Boost customer satisfaction and engagement with personalized recommendations and feedback loops powered by advanced AI algorithms.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: MdOutlineAnalytics,
    name: "Data Analytics & Predictive Modeling",
    description:
      "Leverage data-driven insights to make informed business decisions. Our predictive models help forecast trends, optimize operations, and drive innovation.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LuBuilding2,
    name: "Operational AI Solutions for Enterprises",
    description:
      "Streamline your business processes with AI solutions designed to improve efficiency, reduce costs, and enable data-driven decision-making.",
    href: "/",
    cta: "Learn more",
    background: <Image className="absolute object-cover w-full h-full opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out" src={"/enterprice.jpg"} alt="AI consultation" layout="fill" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function OurServicesNew() {
  return (
    <BentoGrid className="lg:grid-rows-3 max-w-7xl">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
