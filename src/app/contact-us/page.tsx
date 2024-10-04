import ContactDetailsCard from "@/components/contact-us/contact-details";
import Hero from "@/components/landing/hero/hero";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <Hero />
      <section className="bg-background text-white max-w-7xl mx-auto py-10 lg:py-40">
        {/* Hero Section */}
        <div className="w-ful dark:bg-background flex flex-col items-center justify-center md:px-10">
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              Crafting the Future of Technology
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Innovative solutions designed to accelerate your business.
            </p>
          </div>
        </div>

        <ContactDetailsCard />

        <div className="text-center mb-8 w-full mt-16">
          <h1 className="text-4xl font-semibold">Let’s Talk</h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="What are you planning to build?"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              ></textarea>
            </div>
            <div>
              <button className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-4 w-full">
          {/* Add react-icons like FiFacebook, FiTwitter etc */}
          <span className="bg-gray-700 p-3 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white">
            <FiFacebook />
          </span>
          <span className="bg-gray-700 p-3 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white">
            <FiLinkedin />
          </span>
          <span className="bg-gray-700 p-3 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white">
            <FiInstagram />
          </span>
          <span className="bg-gray-700 p-3 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white">
            <FaXTwitter />
          </span>
          <span className="bg-gray-700 p-3 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white">
            <FiYoutube />
          </span>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
