import React from "react";
import Loading from "./Loading";

export const NavbarButton = () => {
  return (
    <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white hidden lg:inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(99,102,241,0.8)_0%,rgba(99,102,241,0.2)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-1">
        <span>Book a call</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-500/0 via-indigo-500/90 to-indigo-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export const HeroButton = () => {
  return (
    <button
      pirsch-event="Chatbox Open"
      className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 ring-1 ring-white/10 px-8 md:py-4 md:text-xl">
        <span>Book a call</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-500/0 via-indigo-500/90 to-indigo-500/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export const CardButton = () => {
  return (
    <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl mt-4 shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 ring-1 ring-white/10 px-8 md:py-4 md:text-xl">
        <span>Book a call</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-500/0 via-indigo-500/90 to-indigo-500/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

type AdminButtonProps = {
  isLoading: boolean;
};

export const AdminButton = ({ isLoading }: AdminButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`${
        isLoading ? "cursor-not-allowed " : ""
      }mt-8 bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white lg:inline-block z-50`}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(99,102,241,0.8)_0%,rgba(99,102,241,0.2)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-3">
        <span>{isLoading ? <Loading /> : "Submit"}</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-500/0 via-indigo-500/90 to-indigo-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};
