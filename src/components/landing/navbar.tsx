"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
} from "@tabler/icons-react";
import { TbLetterS } from "react-icons/tb";
import { BookOpenText, PhoneCallIcon } from "lucide-react";
import { FaRegHandshake } from "react-icons/fa";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
      ),
      href: "/",
    },

    {
      title: "About Us",
      icon: (
        <TbLetterS className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
      ),
      href: "/about",
    },
    {
      title: "Publications",
      icon: (
        <BookOpenText className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
      ),
      href: "/publications",
    },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <Image
    //       src=""
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "Instagram",
    //   icon: (
    //     <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "LinkedIn",
    //   icon: (
    //     <LinkedinIcon className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
    //   ),
    //   href: "https://www.linkedin.com/company/standord",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Why Choose Us",
      icon: (
        <FaRegHandshake className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
      ),
      href: "#",
    },
    {
      title: "Book a Call",
      icon: (
        <PhoneCallIcon className="h-full w-full text-neutral-500 dark:text-[#5ce1e6]" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
