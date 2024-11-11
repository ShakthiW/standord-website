import Banner from "@/components/case-studies/banner";
import Header from "@/components/case-studies/header";
import RelatedArticles from "@/components/case-studies/related-articles";
import Section from "@/components/case-studies/section";
import Link from "next/link";
import React from "react";

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
        title="Case Study: AI-Powered Ticket Booking Chatbot for Fits Air"
        date="Aril 23, 2023"
        clientName="Fits Air"
      />

      <Banner src="/logooo.png" alt="Banner Image" />

      <div className="max-w-4xl mx-auto p-3">
        <Section title="Client Challenge">
          <p>
            In the fast-paced airline industry, Fits Air sought an innovative
            way to streamline the booking experience, reduce friction in
            customer interactions, and deliver a seamless end-to-end travel
            service. Traditional online booking platforms require customers to
            navigate multiple pages, leading to drop-offs and a less
            personalized experience. Fits Air aimed to elevate customer service
            by creating a more intuitive, conversational booking process
            accessible within a single chat interface.
          </p>
        </Section>
        <Section title="Proposed Solution">
          <p>
            We collaborated with Fits Air to develop an AI-powered chatbot that
            enables users to complete the entire booking process within a chat
            interface. The chatbot integrates with Fits Air’s APIs to deliver
            real-time flight information, destination searches, filtering
            options, and secure payment processing, creating a frictionless
            experience. This solution also includes:
          </p>
        </Section>
        <Section title="">
          <ol className=" list-decimal max-w-3xl mx-auto -mt-4">
            <li>
              <strong>Personalized Travel Experience:</strong> Using data from
              frequent travelers, the chatbot tailors recommendations and
              remembers user preferences, delivering a highly personalized
              booking journey.
            </li>
            <li>
              <strong>Travel Guidance and Recommendations:</strong> Powered by a
              Retrieval-Augmented Generation (RAG) system, the chatbot provides
              contextually relevant travel advice and recommendations, enhancing
              the customer&apos;s travel planning experience.{" "}
            </li>
          </ol>
        </Section>
        <Section title="Implementation">
          <ol className=" list-decimal max-w-3xl mx-auto">
            <li>
              <strong>API Integration for Real-Time Booking:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li>
                  <strong>Flight Information and Destination Filtering:</strong>{" "}
                  The chatbot is integrated with Fits Air’s internal systems and
                  third-party APIs, enabling it to pull real-time flight
                  availability, pricing, and destination data, and to apply
                  customized filters based on user preferences.
                </li>
                <li>
                  <strong>Seamless Payment Processing:</strong> Through secure
                  payment API integrations, users can complete their purchase
                  directly in the chat interface without the need to switch
                  platforms.
                </li>
              </ul>
            </li>
            <li>
              <strong>RAG-Powered Personalized Recommendations:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li>
                  <strong>Travel Assistance:</strong> Leveraging the RAG system,
                  the chatbot can pull and deliver relevant travel tips and
                  destination information from large data sets, enhancing its
                  ability to assist customers with travel planning.
                </li>
                <li>
                  <strong>Customized Experience for Frequent Travelers:</strong>
                  By tracking user interactions and previous bookings, the
                  chatbot personalizes the booking experience, providing
                  quicker, tailored responses and curated travel
                  recommendations.
                </li>
              </ul>
            </li>
            <li>
              <strong>User-Centric Design:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li>
                  The chatbot interface was designed to guide users intuitively
                  through the booking process, with minimal typing required.
                  Options for selecting seats, checking luggage, and receiving
                  boarding passes were included for a one-stop booking solution.
                </li>
              </ul>
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
