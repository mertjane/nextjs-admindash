"use client";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Faq from "../components/ui/Faq";
import Footer from "../components/ui/Footer";
import Hero from "../components/ui/Hero";
import ImageContainer from "../components/ui/ImageContainer";
import Pricing from "../components/ui/Pricing";
import Services from "../components/ui/Services";
import FixedNavbar from "../components/ui/FixedNavbar";
import Reference from "../components/ui/Reference";
import Testimonials from "../components/ui/Testimonials";

export default function Home() {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        // User is scrolling up
        setShowFixedNavbar(true);
      } else {
        // User is scrolling down
        setShowFixedNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {showFixedNavbar && <FixedNavbar />}
      <Hero />
      <ImageContainer />
      <Reference />
      <Testimonials />
      <Services />
      <Pricing />
      <Faq />
      <Card />
      <Footer />
    </>
  );
}
