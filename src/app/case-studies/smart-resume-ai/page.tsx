import Banner from "@/components/case-studies/banner";
import Header from "@/components/case-studies/header";
import RelatedArticles from "@/components/case-studies/related-articles";
import Section from "@/components/case-studies/section";
import Link from "next/link";
import React from "react";

// const articlesData = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     link: "https://example.com",
//   },
//   {
//     category: "Machine Learning",
//     title: "Machine Learning in Action",
//     src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3556&auto=format&fit=crop",
//     link: "https://example.com/ml",
//   },
// ];

const articlesData2 = [
  {
    date: "Dec 22, 2023",
    title: "Meet AutoManage, the best AI management tools",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "",
    link: "https://example.com",
  },
  {
    date: "Mar 15, 2023",
    title: "How to earn more money as a wellness coach",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "",
    link: "https://example.com",
  },
  {
    date: "Jan 05, 2023",
    title: "The no-fuss guide to upselling and cross selling",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "",
    link: "https://example.com",
  },
];

const Page: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header
        title="Case Study: MediQ - Your AI-Powered First Aid Companion"
        date="August 10, 2023"
        clientName="General Public"
      />

      <Banner src="/logo_dark_no_bg.png" alt="Banner Image" />

      <div className="max-w-4xl mx-auto p-3">
        <Section title="Problem Background">
          <p>
            During emergencies, every second counts. However, individuals often
            face challenges such as panic, memory lapse, and fear of incorrect
            response. Recognizing that most people lack medical training or may
            struggle to recall basic first aid steps, our client developed MediQ
            to bridge this gap. The goal: empower users with an AI that provides
            instant, actionable first aid instructions, helping them navigate
            emergencies confidently.
          </p>
        </Section>
        <Section title="Proposed Solution">
          <p>
            We partnered with our client to develop MediQ, an AI-powered, first
            aid mobile application, using Flutter for cross-platform
            functionality. Accessible from any smartphone, MediQ provides
            real-time, step-by-step guidance for managing various medical
            crises, from severe allergic reactions to cardiac arrests. The app
            was designed to mitigate emergency-related stress and reduce
            dependency on emergency services for minor situations.
          </p>
        </Section>
        <Section title="Implementation">
          <ol className=" list-decimal max-w-3xl mx-auto">
            <li>
              <strong>User-Centered Design:</strong> Our approach focused on
              ease of use under stress. We implemented a simple interface,
              guiding users with voice-activated prompts and large, intuitive
              buttons to reduce cognitive load during emergencies.
            </li>
            <li>
              <strong>AI-Powered Assistance:</strong> Leveraging machine
              learning, MediQ adapts its responses based on user interactions,
              personalizing advice for specific emergencies.
            </li>
            <li>
              <strong>Safety Verification:</strong> The app underwent rigorous
              testing to ensure instructions were accurate, adhering to medical
              guidelines for first aid.
            </li>
            <li>
              <strong>Deployment and Open-Source Release:</strong> MediQ is
              available for download on GitHub, inviting contributions from the
              open-source community to enhance functionality continuously.
            </li>
            <li>
              <strong>Launch:</strong> MediQ was successfully launched on both
              app stores, receiving positive feedback from users and medical
              professionals.
            </li>
          </ol>
        </Section>
        <Section title="Outcomes">
          <ul className=" list-disc max-w-3xl mx-auto">
            <li>
              <strong>Reduced Panic in Emergencies:</strong> MediQ’s
              step-by-step guidance helped users maintain calm and focus,
              reducing anxiety in high-pressure situations.
            </li>
            <li>
              <strong>Increased User Confidence:</strong> By providing real-time
              instructions, MediQ empowered users to take control of emergencies
              confidently, potentially saving lives.
            </li>
            <li>
              <strong>Streamlined Emergency Services:</strong> By empowering
              users to handle minor incidents independently, MediQ reduces the
              burden on emergency responders, ensuring resources are available
              for more critical cases.
            </li>
          </ul>
        </Section>
        <Section title="Customer Feedback">
          <p>
            User feedback highlighted the intuitive design and practical,
            accessible instructions as essential app features. Many users noted
            the increased confidence they felt knowing they could rely on MediQ
            during emergencies. The open-source community also contributed
            valuable insights, helping MediQ evolve rapidly to meet user needs.
          </p>
        </Section>
        <Section title="Conclusion">
          <p>
            MediQ represents an innovative step towards accessible first aid for
            everyone, combining AI’s responsiveness with a user-centric
            approach. Its deployment demonstrates how technology can make
            life-saving assistance accessible at any moment, right in the user’s
            pocket.
          </p>
        </Section>
        <Section title="">
          <p>
            Explore the project and contribute on GitHub:{" "}
            <Link href={"/"} className="underline hover:text-[#5ce1e6]">
              {" "}
              MediQ GitHub Repository.{" "}
            </Link>
          </p>
        </Section>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <RelatedArticles articles={articlesData2} />
      </div>
    </div>
  );
};

export default Page;
