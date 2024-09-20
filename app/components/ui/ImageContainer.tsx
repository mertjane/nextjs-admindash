import Image from "next/image";
import React from "react";
import IMG from "../../../public/hero-new.webp";
import {
  Aws,
  FigmaICON,
  NextJSICON,
  NodeICON,
  ReactICON,
  SanityICON,
  TailwindICON,
  VercelIco,
} from "./Icons";

const ImageContainer = () => {
  return (
    <div className="h-full py-24 flex flex-col gap-24">
      <Image
        loading="lazy"
        className="md:w-11/12 md:h-5/6 w-11/12 h-56 mx-auto"
        src={IMG}
        alt="next-image"
      />
      <div className=" flex md:flex-row md:flex-nowrap flex-wrap items-center justify-center md:gap-12 gap-8 px-4">
        <NextJSICON />
        <ReactICON />
        <NodeICON />
        <TailwindICON />
        <FigmaICON />
        <SanityICON />
        <VercelIco />
        <Aws />
      </div>
    </div>
  );
};

export default ImageContainer;
