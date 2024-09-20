import React from "react";
import LogoLight from "../../../public/logo-transparent-light.png";
import Image from "next/image";
import { TwitterICON, TwitterNEWICON } from "./Icons";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="w-full h-full md:px-32 px-0">
      <div className="border-t border-gray-200 flex flex-row flex-wrap pb-36">
        <div className="md:w-fit w-full h-full text-zinc-500 md:px-16 px-8 pt-16">
          <Image className="w-32 mb-2" src={LogoLight} alt="logo" />
          <span className="text-sm">
            © {date} DiploDev Solutions Private Limited.
            <br />
            All rights reserved.
            <br />
            <br />
            hello@diplodev.co.uk
          </span>
          <div className="flex mt-4">
            <TwitterICON />
            <dl className="text-zinc-500 mx-2">/</dl>
            <TwitterNEWICON />
          </div>
        </div>
        <div className="h-full text-sm md:pl-16 pl-8 pr-6 pt-20">
          <ul className="text-zinc-500 flex flex-col gap-2">
            <h4 className="font-bold mb-2 text-slate-800">Company</h4>
            <li>Work</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="h-full text-sm pl-2 pr-6 pt-20">
          <ul className="text-zinc-500 flex flex-col gap-2">
            <h4 className="font-bold mb-2 text-slate-800">Services</h4>
            <li>Landing Page Development</li>
            <li>SaaS App development</li>
            <li>Custom Webapp Development</li>
            <li>AI App Development</li>
          </ul>
        </div>
        <div className="h-full text-sm pl-2 pr-6 pt-20">
          <ul className="text-zinc-500 flex flex-col gap-2">
            <h4 className="font-bold mb-2 text-slate-800">Legal</h4>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="h-full text-sm md:px-2 px-8 pt-20">
          <ul className="text-zinc-500 flex flex-col gap-2">
            <h4 className="font-bold mb-2 text-slate-800">Tools</h4>
            <li>Awesome Components</li>
            <li>Tailwindcss Buttons</li>
            <li>Mechanical Keyboard</li>
            <li>Box Shadows</li>
            <li className="hover:underline cursor-pointer">
              <Link href="/api/auth/signin">Admin Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
