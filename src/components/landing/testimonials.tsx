"use client";

import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const Testimonial_data = [
    {
      img: "/testimonials/person1.jpg",
      content:
        "This is unbelievable. After consulting with Standord expert team, we were able to increase our revenue by 50% in just 3 months! I will refer everyone I know.",
      name: "Robert Smith",
      position: "CEO, Company",
    },
    {
      img: "/testimonials/person2.jpg",
      content:
        "The service was excellent. Absolutely wonderful! I will recommend Standord to my colleagues. I couldn't have asked for more than this. I'm good to go.",
      name: "Martha Stewart",
      position: "CTO, Company",
    },
    {
      img: "/testimonials/person3.jpg",
      content:
        "I would also like to say thank you to all your staff. I like Standord more and more each day because it makes my life a lot easier. This is simply unbelievable!",
      name: "Vince M.",
      position: "CFO, Company",
    },
  ];

  const [current, setCurrent] = React.useState<number>(0);

  const previous = () => {
    setCurrent(current === 0 ? Testimonial_data.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === Testimonial_data.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="flex h-[50vh] max-w-5xl justify-center items-center">
      <div>
        {Testimonial_data.map(
          (testimonial, index) =>
            index === current && (
              <div key={index} className="max-w-7xl">
                <div className="mb-10 flex items-start gap-4">
                  <QuoteIcon
                    className="rotate-180 text-[#5ce1e6] -mt-4"
                    size={60}
                  />
                  <h2 className="text-3xl font-bold">{testimonial.content}</h2>
                </div>
                <div className="flex justify-between items-end px-[30px]">
                  <div className="flex gap-4 items-center">
                    <div>
                      <Image
                        src={testimonial.img}
                        alt="person"
                        className="rounded-full border-2 p-1 border-[#5ce1e6]"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h6 className="">{testimonial.name}</h6>
                      <span className="">{testimonial.position}</span>
                    </div>
                  </div>
                  <div className="flex gap-6 justify-center items-center">
                    <div
                      className="bg-gray-800 px-5 py-3 cursor-pointer"
                      onClick={previous}
                    >
                      <ChevronLeftIcon
                        className="text-[#5ce1e6]"
                        size={40}
                        onClick={previous}
                      />
                    </div>
                    <div
                      className="bg-gray-800 px-5 py-3 cursor-pointer"
                      onClick={next}
                    >
                      <ChevronRightIcon
                        className="text-[#5ce1e6]"
                        size={40}
                        onClick={next}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
