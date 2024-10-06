"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Discovery and Requirement Analysis",
    description:
      "We start by understanding your business goals and requirements. Our team of experts will work with you to identify your needs and create a plan that aligns with your vision. We'll analyze your current systems and processes to identify areas for improvement and develop a strategy that will help you achieve your goals.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white text-xl">
        <ul className="list-disc list-inside">
          <li>Discovery and Requirement Analysis</li>
          <li>Design and Development</li>
          <li>Testing and Deployment</li>
          <li>Post Launch Support</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Strategic Research and Planning",
    description:
      "Our team of experts will conduct in-depth research to understand your industry, target audience, and competition. We'll identify key trends and opportunities to help you stay ahead of the curve. We'll work with you to develop a comprehensive strategy that aligns with your business goals and objectives.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/causes/city1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Development and Quality Assurance",
    description:
      "Our team of developers will work with you to design and develop a solution that meets your needs. We'll use the latest technologies and best practices to ensure that your project is delivered on time and on budget. Our quality assurance team will test the solution to ensure that it meets your requirements and is free of defects.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Designing AI-Driven Solutions",
    description:
      "Our team of experts will work with you to design and develop AI-driven solutions that will help you achieve your business goals. We'll use the latest technologies and best practices to create a solution that is tailored to your needs. Our team will work with you to ensure that the solution meets your requirements and is delivered on time and on budget.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Seamless Deployment",
    description:
      "Our team will work with you to deploy your solution seamlessly. We'll ensure that your solution is integrated with your existing systems and processes to minimize disruption to your business. Our team will provide training and support to help your team get up to speed with the new solution.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Continuous Support and Optimization",
    description:
      "Our team will provide continuous support and optimization to ensure that your solution is always up to date and performing at its best. We'll monitor your solution and make adjustments as needed to ensure that it continues to meet your business goals. Our team will work with you to identify areas for improvement and develop a plan to optimize your solution.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export function Methodology() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
