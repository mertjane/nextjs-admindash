import Image from "next/image";
import React from "react";
import headshot from "../../../public/headshot.webp";

const refData = [
  {
    id: 1,
    img: headshot,
    text1:
      "MaryJane is phenomenal! She is the top front-end developer I have ever collaborated with. She took the project requirements and immediately started working on them.",
    text2:
      "We are extremely pleased with the final product. She's incredibly smart, experienced, approachable, and supportive. To anyone considering her services - I highly recommend MaryJane; your project will be executed superbly, and you will be thrilled with the outcome.",
    owner: "Alex Roberts",
    position: "CEO at Starbeam",
  },
];

const Reference = () => {
  return (
    <>
      {refData?.map((data) => (
        <div
          key={data.id}
          className="w-full h-full -mt-8 pb-20 md:px-0 px-8 relative border-b flex flex-col items-center justify-center"
        >
          <Image
            width={65}
            height={65}
            src={data.img}
            alt="headshot"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="transition duration-300 blur-0 inline-block object-cover object-top rounded-full mb-8 border-2 border-slate-200 drop-shadow-sm"
          />
          <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-slate-700 mb-8">
            "{data.text1}
          </blockquote>
          <br />
          <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-slate-700 mb-8">
            {data.text2}"
          </blockquote>
          <p className="max-w-4xl mx-auto text-xs md:text-lg text-center !leading-9 text-black font-medium">
            {data.owner}
          </p>
          <span className="max-w-4xl mx-auto text-xs md:text-base text-center !leading-9 text-slate-500">
            {data.position}
          </span>

          <div className="absolute bottom-0 right-48 flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Reference;
