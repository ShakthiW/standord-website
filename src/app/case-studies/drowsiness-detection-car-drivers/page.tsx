import Banner from "@/components/case-studies/banner";
import Header from "@/components/case-studies/header";
import RelatedArticles from "@/components/case-studies/related-articles";
import Section from "@/components/case-studies/section";
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
        title="Drowsiness Detection Model for Driver and Worker Safety"
        date="August 10, 2023"
        clientName="General Public"
      />

      <Banner src="/logo_dark_no_bg.png" alt="Banner Image" />

      <div className="max-w-4xl mx-auto p-3">
        <Section title="Project Overview">
          <p>
            As part of a community initiative through our research and
            development group, we developed a Drowsiness Detection Model to
            improve driver and worker safety, particularly during late-night
            shifts. This AI-based solution identifies signs of drowsiness in
            real-time, providing timely alerts to help prevent accidents and
            enhance productivity. The project was driven by the need to address
            personal and societal safety challenges associated with drowsy
            driving and late-night work.
          </p>
        </Section>
        <Section title="Solution">
          <p>
            The Drowsiness Detection Model leverages cutting-edge AI frameworks
            and tools to detect drowsiness based on facial features and eye
            behavior in live video feeds. Built using YOLOv5 from Ultralytics
            and Pytorch, the model applies deep learning techniques for precise
            object detection. The key solution components are:
          </p>
        </Section>
        <Section title="">
          <ol className=" list-decimal max-w-3xl mx-auto">
            <li className="mb-2">
              <strong>YOLOv5 & Pytorch:</strong> These frameworks allow for
              high-performance object detection, essential for accurately
              identifying signs of drowsiness in real-time.
            </li>
            <li className="mb-2">
              <strong>Custom Dataset and Labeling:</strong> The model was
              trained on a custom-labeled dataset created with LabelImg,
              specifically annotated to capture various drowsiness indicators.
            </li>
            <li className="mb-2">
              <strong>Visualization and Real-Time Processing:</strong>{" "}
              Matplotlib visualizes training results, while OpenCV enables live
              video processing to detect drowsiness continuously, ensuring
              real-time alerts when needed.
            </li>
          </ol>
        </Section>
        <Section title="Implementation">
          <ol className=" list-disc max-w-3xl mx-auto">
            <li className="mb-2">
              <strong>Model Training:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li className="mb-2">
                  <strong>Data Preparation:</strong> A unique dataset was
                  custom-labeled to identify facial expressions and eye behavior
                  related to drowsiness. This dataset was used to fine-tune
                  YOLOv5 for optimal accuracy.
                </li>
                <li className="mb-2">
                  <strong>Model Training with YOLOv5 and Pytorch:</strong>{" "}
                  YOLOv5&lsquo;s flexibility and efficiency made it ideal for
                  this task, allowing real-time detection with minimal latency.
                  Training was conducted using Pytorch, with adjustments based
                  on model performance during testing.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Real-Time Detection and Alerts:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li className="mb-2">
                  <strong>OpenCV Integration:</strong> OpenCV enabled access to
                  webcam feeds, facilitating the model&apos;s application in
                  real-time monitoring.
                </li>
                <li className="mb-2">
                  <strong>Alert System:</strong> The model alerts users when it
                  detects signs of drowsiness, ensuring drivers or workers can
                  take preventive action immediately.
                </li>
                <li className="mb-2">
                  <strong>Visualization for Model Accuracy:</strong> Matplotlib
                  provided ongoing visualizations of the model&apos;s
                  performance, ensuring that training adjustments enhanced
                  accuracy and responsiveness.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Performance Optimization:</strong>
              <ul className="list-disc max-w-2xl mx-auto">
                <li className="mb-2">
                  <strong>Data Manipulation with Numpy:</strong> Numpy was
                  employed for efficient data processing, enabling smoother
                  frame transformations and optimized model performance during
                  real-time detection.
                </li>
              </ul>
            </li>
          </ol>
        </Section>
        <Section title="Outcomes">
          <ul className=" list-disc max-w-3xl mx-auto">
            <li className="mb-2">
              <strong>Enhanced Real-Time Detection:</strong> The model achieved
              high accuracy in identifying drowsiness-related behaviors,
              providing a valuable tool for safety and productivity.
            </li>
            <li className="mb-2">
              <strong>Usability in Everyday Scenarios:</strong> Through live
              monitoring, the model has potential applications for both drivers
              and workers, supporting them in staying alert and responsive.
            </li>
            <li className="mb-2">
              <strong>Research Contribution:</strong> This project serves as a
              resource for community-driven safety and opens doors for further
              developments in drowsiness detection technologies.
            </li>
          </ul>
        </Section>
        <Section title="Future Enhancements">
          <p>
            Plans include developing a background application that runs
            continuously, providing unobtrusive alerts to users when drowsiness
            is detected. This enhancement would allow users to maintain focus on
            their primary tasks while benefiting from continuous monitoring.
          </p>
        </Section>
        <Section title="Conclusion">
          <p>
            The Drowsiness Detection Model exemplifies the potential of AI to
            address critical safety issues in real-time. This community-driven
            project demonstrates how advanced AI technologies like YOLOv5 and
            Pytorch can be leveraged to improve everyday safety, providing
            valuable insights for future developments in drowsiness detection.
          </p>
        </Section>
        <Section title="">
          <p>
            For developers interested in exploring or contributing to this
            project, please reach out to our research team for more information.
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
