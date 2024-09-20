import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import UKFlag from "../../../public/uk_flag.svg";
import ESFlag from "../../../public/es_flag.svg";
import GRFlag from "../../../public/gr_flag.svg";
import { DownArrow } from "./Icons";

interface NavLinksProps {
  isOpen: boolean;
  scrollRefs: {
    servicesRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    referenceRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

const NavLinks = forwardRef<HTMLUListElement, NavLinksProps>(
  ({ isOpen, scrollRefs }, ref) => {
    const { servicesRef, aboutRef, referenceRef, contactRef } = scrollRefs;

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [openDropdown, setOpenDropdown] = useState(false);
    const [lanSelect, setLanSelect] = useState("en");
    const dropdownRef = useRef<HTMLDivElement | null>(null);



    const handleLanSelection = (language: any) => {
      setLanSelect(language);
      setOpenDropdown(false);
    };

    let currentFlag;
    if (lanSelect === "en") {
      currentFlag = UKFlag;
    } else if (lanSelect === "es") {
      currentFlag = ESFlag;
    } else {
      currentFlag = GRFlag;
    }

    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpenDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);
  

    return (
      <ul
        ref={ref}
        className={`${
          isOpen
            ? "w-full absolute h-screen z-50 flex-col border-slate-950 top-24 py-12 left-0 md:flex gap-8 md:w-auto bg-slate-50"
            : "w-full md:flex items-center gap-12 md:w-auto"
        } `}
      >
        <li className={`${isOpen ? "nav-item-secondary" : "nav-item"}`}>
          <Link
            onClick={() => scrollToSection(aboutRef)}
            className={`${isOpen ? "nav-link-secondary" : "nav-link"}`}
            href="#about-us"
          >
            About Us
          </Link>
        </li>
        <li className={`${isOpen ? "nav-item-secondary" : "nav-item"}`}>
          <Link
            onClick={() => scrollToSection(servicesRef)}
            className={`${isOpen ? "nav-link-secondary" : "nav-link"}`}
            href="#services"
          >
            Services
          </Link>
        </li>
        <li className={`${isOpen ? "nav-item-secondary" : "nav-item"}`}>
          <Link
            onClick={() => scrollToSection(referenceRef)}
            className={`${isOpen ? "nav-link-secondary" : "nav-link"}`}
            href="#references"
          >
            References
          </Link>
        </li>
        <li className={`${isOpen ? "nav-item-secondary" : "nav-item"}`}>
          <Link
            onClick={() => scrollToSection(contactRef)}
            className={`${isOpen ? "nav-link-secondary " : "nav-link"}`}
            href="#contact"
          >
            Contact Us
          </Link>
        </li>
        {isOpen ? (
          <></>
        ) : (
          <div className="flex items-center gap-4">
            <button className="ml-8 bg-custom-black hover:bg-indigo-600 text-slate-100 font-medium text-xs rounded-full outline-none border-none py-2 px-6  transition">
              Contact Us
            </button>
            <div
              className="flex items-center gap-1 cursor-pointer relative"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <Image className="w-5 h-5" src={currentFlag} alt="lang" />
              <DownArrow />
            </div>
            {openDropdown && (
              <div ref={dropdownRef} className="absolute z-50 top-6 -right-28 w-28 h-auto border border-gray-300 rounded-sm box-shadow-lg">
                <ul className="flex flex-col gap-2 cursor-pointer">
                  <li
                    className="px-3 py-2 hover:bg-gray-300"
                    onClick={() => handleLanSelection("en")}
                  >
                    English
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-300"
                    onClick={() => handleLanSelection("es")}
                  >
                    Spanish
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-300"
                    onClick={() => handleLanSelection("gr")}
                  >
                    German
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </ul>
    );
  }
);

export default NavLinks;
