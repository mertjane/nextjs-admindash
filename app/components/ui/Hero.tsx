import React from "react";
import { AnimatedTooltip } from "./AnimatedToolTip";
import { HeroButton } from "./Button";

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
];

const Hero = () => {
  return (
    <div className="w-full py-2 md:mt-12 mt-12 flex items-center justify-center ">
      <div className="container mx-auto md:px-6 py-2 flex flex-col md:flex-row items-start justify-between ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="w-full px-3 text-slate-800 md:text-6xl text-4xl font-semibold md:mb-4 mb-2 text-center md:leading-snug">
            Where Ideas Transform Into{" "}
            <strong className="font-bold text-indigo-600">
              Innovative, Software Solutions.
            </strong>
          </h1>
          <p className="md:text-xl px-10 text-md text-zinc-500  md:mb-6 mb-3 max-w-2xl text-center ">
            We’re dedicated to pushing the boundaries of technology and creating
            solutions that make a difference.
          </p>
          <HeroButton />

          <p className="px-10 text-md text-zinc-500 mt-12 md:mb-6 mb-3 max-w-2xl text-center ">
            Trusted by Founders and Entrepreneurs from all over the world
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
