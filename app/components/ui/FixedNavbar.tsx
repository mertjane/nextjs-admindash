import React from "react";
import { NavbarButton } from "./Button";


const FixedNavbar = () => {
  return (
    <div className="fixed-navbar">
      <ul className="flex flex-row items-center text-sm space-x-4 text-white">
        <li className="fixed-nav-link">Work</li>
        <li className="fixed-nav-link">Services</li>
        <li className="fixed-nav-link">Pricing</li>
        <li className="fixed-nav-link">Components</li>
        <li className="fixed-nav-link">Templates</li>
        <li className="fixed-nav-link">Blog</li>
        <NavbarButton />
      </ul>
    </div>
  );
};

export default FixedNavbar;
