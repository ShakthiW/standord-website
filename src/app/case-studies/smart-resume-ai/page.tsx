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
        title="Case Study: AI-Powered Resume Writing and Interview Preparation Tool"
        date="August 10, 2023"
        clientName="General Public"
      />

      <Banner src="/logo_dark_no_bg.png" alt="Banner Image" />

      <div className="max-w-4xl mx-auto p-3">
        <Section title="Problem Background">
          <p>
            Many new graduates face challenges in entering the job market, often
            due to poorly crafted resumes that fail to pass automated applicant
            tracking systems (ATS) or demonstrate their skills effectively.
            Tailoring resumes to each job posting is time-consuming and takes
            away time that could be spent improving professional skills. To
            address this, we developed an AI-powered Resume Writing and
            Interview Preparation Tool designed to simplify the job application
            process, optimize resumes, and prepare candidates for interviews.
          </p>
        </Section>
        <Section title="Proposed Solution">
          <p>
            Our AI-powered solution automates the process of resume tailoring
            and interview preparation. It combines data-driven research, natural
            language processing (NLP), and advanced AI agents to create
            optimized resumes and targeted interview questions, ensuring
            candidates stand out in the competitive job market. Key features
            include:
            <ol className="">
              <li>
                <p>
                  <strong>Job Posting Analysis:</strong>
                </p>
                <ul className="">
                  <li>
                    The first AI agent researches the job posting URL, extracts
                    requirements, and profiles successful professionals in
                    similar roles to identify key qualifications and skills.
                  </li>
                  <li>
                    It performs a Google search to enrich the gathered data,
                    ensuring the resume aligns with industry expectations.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Resume Optimization:</strong>
                </p>
                <ul className="">
                  <li>
                    The second AI agent rewrites the uploaded LinkedIn resume
                    using research insights.
                  </li>
                  <li>
                    It highlights relevant projects (sourced from GitHub or
                    other platforms) and incorporates keywords to ensure
                    compatibility with ATS.
                  </li>
                  <li>
                    The rewritten resume is tailored specifically for the
                    targeted job, showcasing proficiency and making the
                    candidate stand out.
                  </li>
                </ul>

                <li>
                  <p>
                    <strong>Interview Preparation:</strong>
                  </p>
                  <ul className="">
                    <li>
                      The system generates potential interview questions based
                      on the tailored resume and job description.
                    </li>
                    <li>
                      It provides talking points and strategies to help
                      candidates articulate their strengths and match their
                      skills to the job requirements effectively.
                    </li>
                  </ul>
                </li>
              </li>
            </ol>
          </p>
        </Section>
        <Section title="Implementation">
          <ol className=" list-decimal max-w-3xl mx-auto">
            <li>
              <strong>AI Agents for Research and Resume Writing:</strong> The
              first agent extracts and analyzes data from job postings and
              related resources to identify critical job requirements and
              desirable attributes. Once the research is complete, the second
              agent restructures the candidate’s resume by incorporating
              tailored insights and ATS-friendly keywords to ensure the document
              aligns with both the company’s expectations and automated systems.
            </li>
            <li>
              <strong>Project Curation:</strong> The system scans the
              candidate’s GitHub or project portfolio to identify the most
              relevant and impactful projects. These curated projects are then
              prominently highlighted in the tailored resume to align with the
              target job’s requirements, showcasing the candidate’s technical
              and practical expertise effectively.
            </li>
            <li>
              <strong>Interview Preparation Tool:</strong> By utilizing the
              optimized resume and details from the job posting, the system
              predicts potential interview questions and generates talking
              points. These are designed to strengthen the candidate’s
              preparation by aligning their responses with the key
              qualifications and requirements of the role.
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
        <Section title="Outcomes">
          <p>
            Candidates using the tool experienced a significant increase in
            interview opportunities, as their highly tailored resumes
            effectively passed ATS filters. Additionally, the system provided
            relevant interview questions and talking points, boosting
            candidates’ confidence during interviews. By automating resume
            tailoring and research, the tool also saved valuable time, allowing
            users to focus on skill development and personal preparation.
          </p>
        </Section>
        <Section title="Future Enhancements">
          <p>
            The project roadmap includes several enhancements aimed at expanding
            the model’s capabilities and improving user experience:
          </p>
          <ul className="list-disc max-w-3xl mx-auto">
            <li>
              <strong>Expanded Integrations:</strong> Incorporating platforms
              like Behance and LinkedIn to pull additional portfolio elements.
            </li>
            <li>
              <strong>Real-Time Interview Practice:</strong> Implementing a
              feature for candidates to practice interviews with AI-generated
              questions and receive feedback on their responses.
            </li>
            <li>
              <strong>Interactive Coaching:</strong> Adding an AI-driven mock
              interview feature with feedback for real-time practice.
            </li>
          </ul>
        </Section>
        <Section title="Conclusion">
          <p>
            The AI-powered Resume Writing and Interview Preparation Tool is a
            transformative resource for new graduates entering the job market.
            By combining advanced AI capabilities with practical job application
            insights, this solution empowers candidates to stand out and succeed
            in their career pursuits.
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
