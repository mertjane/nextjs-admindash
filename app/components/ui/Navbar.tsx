"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import NavLinks from "./NavLinks";
import { CloseBtn } from "./Icons";
import Image from "next/image";
import LogoDark from "../../../public/logo-transparent-png.png";
import LogoLight from "../../../public/logo-transparent-light.png";

const Navbar = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Define section refs
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 h-28">
      <div className="flex justify-between items-center h-full w-full  ">
        <Link href="/" className="h-full w-32">
          <Image
            className="h-full w-full object-contain"
            src={theme === "dark" ? LogoDark : LogoLight}
            alt="DiploDev"
          />
        </Link>
        <div className="hidden md:flex gap-8 md:w-auto relative left-40">
          <NavLinks
            isOpen={open}
            ref={navLinksRef}
            scrollRefs={{ servicesRef, aboutRef, referenceRef, contactRef }}
          />
        </div>

        <div className="flex items-center gap-3">
          {open ? (
            <CloseBtn onClick={() => setOpen(false)} />
          ) : (
            <button
              ref={buttonRef}
              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-default"
              type="button"
              className=" inline-flex items-center p-2 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#0000"
                viewBox="0 0 17 14"
                
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {open && (
        <div className="mt-4 flex flex-col md:hidden lg:block sm:hidden ">
          <NavLinks
            isOpen={open}
            ref={navLinksRef}
            scrollRefs={{ servicesRef, aboutRef, referenceRef, contactRef }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
