import React from "react";
import { CheckICON } from "./Icons";

const Pricing = () => {
  return (
    <div className="h-full w-full flex flex-col items-center pt-24 bg-soft-gradient">
      
      <h1 className="md:text-5xl text-3xl font-semibold  h-fit p-4 text-center leading-10">
        The right price for you, with{" "}
        <strong className="font-semibold text-indigo-600">maximum value</strong>
      </h1>
      <p className="text-center md:text-xl text-lg px-4 pt-4 pb-10  text-gray-600">
        Simple pricing that makes sense for your business. No hidden fees.
      </p>
      <div className="w-full h-full flex md:flex-row flex-col gap-4 px-7 mt-16">
        <div className="shadow-sm border border-gray-300 rounded-3xl w-full h-full px-6 py-9 flex flex-col">
          <strong className="text-indigo-600 text-md font-semibold">
            Components
          </strong>
          <span className="text-gray-400 text-sm pt-4">
            pause or cancel anytime
          </span>
          <h1 className="text-slate-900 text-4xl pt-2 font-bold">$3499/mo</h1>
          <p className="text-sm pt-6 text-gray-500 leading-6 ">
            Standalone components tailored to your needs and easily integrated.
            Perfect for website elements or sections.
          </p>
          <ul className="h-fit text-sm text-gray-600 flex flex-col gap-4 pt-11">
            <li className="flex items-center gap-2">
              <CheckICON /> One component at a time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              React / Next.js / Tailwind CSS code
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Design + Development
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Unlimited Revisions
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              24-hour support response time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Private communication channel
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              4-7 days turnaround time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Pause or cancel anytime
            </li>
          </ul>
          <button className="w-full h-10 mt-28 rounded-lg border-2 border-indigo-400 text-indigo-600 font-semibold text-sm hover:border-indigo-600">
            Buy Now
          </button>
          <span className="text-xs text-gray-500 mt-2">Questions?</span>
        </div>
        <div className="shadow-sm border border-gray-300 rounded-3xl w-full h-full px-6 py-9  flex flex-col pr-6">
          <strong className="text-indigo-600 text-md font-semibold ">
            Pages
          </strong>
          <span className="text-gray-400 text-sm pt-4">
            pause or cancel anytime
          </span>
          <h1 className="text-slate-900 text-4xl pt-2 font-bold ">$4995/mo</h1>
          <p className="text-sm pt-6 text-gray-500 leading-6">
            Best for early-stage startups and businesses that need a marketing
            side and ongoing developmental work.
          </p>
          <ul className="h-fit text-sm text-gray-600 flex flex-col gap-4 pt-10">
            <li className="flex items-center gap-2">
              <CheckICON /> One request / page at a time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              React / Next.js / Tailwind CSS code
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Design + Development
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Unlimited Revisions
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              CMS integration
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Search Engine Optimization
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              24-hour support response time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Private communication channel
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              7-10 days turnaround time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Pause or cancel anytime
            </li>
          </ul>
          <button className="w-full h-10 mt-11 rounded-lg border-2 border-indigo-400 text-indigo-600 font-semibold text-sm hover:border-indigo-600">
            Buy Now
          </button>
          <span className="text-xs text-gray-500 mt-2">Questions?</span>
        </div>
        <div className="shadow-md bg-slate-900 rounded-3xl w-full h-full px-6 py-9  flex flex-col pr-6">
          <strong className="text-indigo-600 text-md font-semibold ">
            Multi Page Website
          </strong>
          <span className="text-neutral-400 text-sm pt-4">starts at</span>
          <h1 className="text-neutral-100 text-4xl pt-2 font-bold ">
            $12,499
          </h1>
          <p className="text-sm pt-6 text-neutral-300 leading-6">
            Best for small businesses and startups that need a performant
            website that looks great and converts visitors to customers.
          </p>
          <ul className="h-fit text-sm text-neutral-200 flex flex-col gap-4 pt-9">
            <li className="flex items-center gap-2">
              <CheckICON /> Multi-page landing page website
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Web Apps and SaaS Development
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              AI Apps development
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Design + Development
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              24-hour support response time
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Private communication channel
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Unlimited Revisions
            </li>
            <li className="flex items-center gap-2">
              <CheckICON />
              Negotiable delivery time
            </li>
          </ul>
          <button className="w-full h-10 mt-24 rounded-lg text-neutral-100 bg-indigo-600 font-semibold text-sm hover:bg-indigo-500">
            Buy Now
          </button>
          <span className="text-xs text-neutral-100 mt-2">Questions?</span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
