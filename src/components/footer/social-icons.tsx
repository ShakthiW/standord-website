import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi"; // Import icons from react-icons

const SocialIcons = () => {
  return (
    <div className="text-[#5ce1e6] flex justify-center">
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-700 hover:scale-110 hover:bg-[#5ce1e6] duration-300">
        <Link href="https://www.facebook.com">
          <FiFacebook />
        </Link>
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-700 hover:scale-110 hover:bg-[#5ce1e6] duration-300">
        <Link href="https://www.linkedin.com">
          <FiLinkedin />
        </Link>
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-700 hover:scale-110 hover:bg-[#5ce1e6] duration-300">
        <Link href="https://www.instagram.com">
          <FiInstagram />
        </Link>
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-700 hover:scale-110 hover:bg-[#5ce1e6] duration-300">
        <Link href="https://www.x.com">
          <FaXTwitter />
        </Link>
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-700 hover:scale-110 hover:bg-[#5ce1e6] duration-300">
        <Link href="https://www.youtube.com">
          <FiYoutube />
        </Link>
      </span>
    </div>
  );
};

export default SocialIcons;
