import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={100} />
      <p className="text-sm text-white">
        All right reserved. Copyright @devyashtanwar
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={25} className="mx-1" />
        <Image src={assets.twitter_icon} alt="" width={25} className="mx-1" />
        <Image src={assets.linkedin_icon} alt="" width={25} className="mx-1" />
      </div>
    </div>
  );
};

export default Footer;
