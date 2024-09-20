import React from "react";
import LogoLight from "../../../public/logo-transparent-png.png";
import Image from "next/image";
import { AnimatedTooltip } from "./AnimatedToolTip";
import ctaImg from "../../../public/cta.webp";
import { CardButton } from "./Button";



const people = [
  {
    id: 1,
    name: "Mertcan Kara",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Cenk Bilgiç",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    id: 7,
    name: "Tyler johnny",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 8,
    name: "Ashley",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Card = () => {
  return (
    <div className="w-full h-full flex items-center md:px-24 px-0 pt-60 pb-40">
      <div className="w-full h-auto md:rounded-3xl shadow-sm rounded-none mx-auto bg-card-gradient overflow-hidden flex md:flex-row flex-col">
        <div className="md:w-2/5 w-full h-full box-border md:pl-24 py-12  flex flex-col md:items-start items-center">
          <Image
            className="w-40 object-fill md:mb-0 mb-4"
            src={LogoLight}
            alt="logo"
          />
          <h1 className="text-slate-50 font-bold text-3xl md:text-start text-center md:px-0 px-14 ">
            Want a website that converts? Get in touch!
          </h1>
          <p className="text-slate-300 py-4 max-w-md leading-7 text-lg">
            Experience the magic of a stunning website designed and developed
            just for you! ✨
          </p>
          <CardButton />
          <div className="flex flex-row items-center md:justify-start justify-center py-12 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        <div className="w-3/5 h-full pl-20 relative md:block hidden">
          <Image className="absolute right-0 left-24" src={ctaImg} alt="cta" />
        </div>
      </div>
    </div>
  );
};

export default Card;
