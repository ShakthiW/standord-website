"use client"

import React, { MouseEvent, useRef } from "react";
import { SiAdobe, SiApple, SiFacebook, SiGoogle, SiLinkedin, SiShopify, SiSoundcloud, SiSpotify, SiTiktok } from "react-icons/si";
import { useAnimation, motion } from "framer-motion";
import { IconType } from "react-icons";

export const ShowAllLinks = () => {
  return (
    <div className="divide-y divide-[#5ce1e6] border border-[#5ce1e6]">
      <div className="grid grid-cols-2 divide-x divide-[#5ce1e6]">
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-[#5ce1e6]">
        <LinkBox Icon={SiApple} href="#" />
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-[#5ce1e6]">
        <LinkBox Icon={SiTiktok} href="#" />
        <LinkBox Icon={SiSpotify} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
  const controls = useAnimation(); 
  const scope = useRef(null); 

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);
    controls.start({
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);
    controls.start({
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-[#5ce1e6]"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <motion.div
        ref={scope}
        animate={controls}
        initial={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-[#5ce1e6] text-gray-700"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </motion.div>
    </a>
  );
};
