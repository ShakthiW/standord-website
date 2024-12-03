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
        title="Case Study: Real-Time Sign Language Translation Model"
        date="August 10, 2023"
        clientName="General Public"
      />

      <Banner src="/logo_dark_no_bg.png" alt="Banner Image" />

      <div className="max-w-4xl mx-auto p-3">
        <Section title="Problem Background">
          <p>
            As part of our ongoing research initiatives, we developed a
            real-time sign language translation model that identifies and
            translates sign language gestures into letters using live camera
            feeds. The project aims to enhance communication accessibility for
            individuals with hearing or speech impairments. Currently, the model
            focuses on translating individual letters, with ongoing research to
            expand its capabilities to identify complete words through dynamic
            hand movements.
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
        <Section title="Solution">
          <p>
            The real-time sign language translation model leverages advanced AI
            frameworks and tools for gesture recognition and translation. The
            project was built using open-source datasets for training, with
            plans to transition to a custom dataset tailored to our objectives.
            The solution includes the following components:
          </p>
          <ol className=" list-decimal max-w-3xl mx-auto">
            <li>
              <strong>Real-Time Gesture Recognition:</strong> The model
              processes live webcam feeds to identify hand movements and
              gestures corresponding to sign language letters.
            </li>
            <li>
              <strong>AI-Driven Model Building:</strong> Leveraging TensorFlow
              and Ultralytics, the model is fine-tuned for precision and speed
              in identifying sign language gestures.
            </li>
            <li>
              <strong>Webcam Integration:</strong> OpenCV facilitates live video
              capture, ensuring real-time processing and seamless user
              interaction.
            </li>
          </ol>
        </Section>
        <Section title="Implementation">
          <p>
            <strong>Model Training:</strong>
          </p>
          <ul className=" list-disc max-w-3xl mx-auto">
            <li>
              <strong>Initial Dataset:</strong> The project started with an
              open-source dataset for sign language gestures. The dataset was
              processed and labeled for training purposes.
            </li>
            <li>
              <strong>Fine-Tuning with TensorFlow and Ultralytics:</strong>{" "}
              TensorFlow was used for deep learning tasks, while
              Ultralytics&apos; framework supported object detection and
              tracking to improve the accuracy of real-time translations.
            </li>
          </ul>

          <p>
            <strong>Real-Time Translation:</strong>
          </p>
          <ul className="list-disc max-w-3xl mx-auto">
            <li>
              <strong>Webcam Integration:</strong> OpenCV enabled real-time
              webcam feeds for gesture recognition, ensuring immediate
              translation of sign language letters.
            </li>
            <li>
              <strong>Letter-by-Letter Translation:</strong> The model maps
              identified gestures to corresponding letters of the alphabet,
              providing immediate translation output to the user.
            </li>
          </ul>

          <p>
            <strong>Research and Future Enhancements:</strong>
          </p>
          <ul className="list-disc max-w-3xl mx-auto">
            <li>
              <strong>Custom Dataset Development:</strong>The team is actively
              working on creating a custom dataset to improve accuracy and
              extend the model’s capabilities to recognize dynamic gestures for
              entire words.
            </li>
            <li>
              <strong>Dynamic Gesture Recognition:</strong> Future research will
              focus on expanding the model to recognize complete words and
              phrases, enhancing communication accessibility for users.
            </li>
          </ul>
        </Section>
        <Section title="Outcomes">
          <ul>
            <li>
              <strong>Real-Time Functionality:</strong> The model successfully
              translates sign language gestures into letters in real-time,
              offering a stepping stone towards seamless communication for
              users.
            </li>
            <li>
              <strong>Enhanced Accessibility:</strong> By translating gestures
              into text, the model provides a valuable tool for bridging
              communication gaps between sign language users and non-sign
              language speakers.
            </li>
            <li>
              <strong>Scalable Framework:</strong> The modular architecture of
              the model allows for future scalability to recognize dynamic
              gestures and phrases.
            </li>
          </ul>
        </Section>
        <Section title="Future Enhancements">
          <p>
            The project roadmap includes several enhancements aimed at expanding
            the model’s capabilities and improving user experience:
          </p>
          <ul className="list-disc max-w-3xl mx-auto">
            <li>
              <strong>Custom Dataset Training:</strong> Developing and
              annotating a dataset tailored to the nuances of sign language
              gestures to enhance model precision.
            </li>
            <li>
              <strong>Dynamic Gesture Mapping:</strong> Future research will
              focus on mapping dynamic hand movements to complete words,
              enabling real-time translation of sign language phrases.
            </li>
            <li>
              <strong>Mobile Application Integration:</strong> Plans include
              integrating the model into a mobile application for on-the-go
              translation, ensuring accessibility for users in various
              scenarios.
            </li>
          </ul>
        </Section>
        <Section title="Conclusion">
          <p>
            The Real-Time Sign Language Translation Model demonstrates the
            potential of AI to foster inclusivity and accessibility. By
            utilizing cutting-edge frameworks like TensorFlow and Ultralytics,
            the project provides a foundation for real-time sign language
            interpretation, with ongoing advancements aimed at achieving
            complete word recognition.
          </p>
        </Section>
        <Section title="">
          <p>
            Explore the project and contribute on GitHub:{" "}
            <Link href={"/"} className="underline hover:text-[#5ce1e6]">
              {" "}
              GitHub Repository.{" "}
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
