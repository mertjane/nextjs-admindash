import React from "react";
import Image from "next/image";
import {
  AwsICON,
  BrowserIcon,
  CloudIcon,
  CommentICon,
  CursorICON,
  DigitalICON,
  DockerICON,
  DoneICon,
  FramerICON,
  GitICON,
  GoogleIcon,
  RedisICON,
  SearchICON,
  TailICON,
  VercelICON,
} from "./Icons";
import OneSVG from "../../../public/one.svg";
import TwoSVG from "../../../public/two.svg";
import TwoTwoSVG from "../../../public/twoTwo.svg";
import Three from "../../../public/ServicesBack.svg";
import Meteors from "../../../public/Meteors_fye3ys.webp";
import Tooltip from "../../../public/Tooltip_luwy44.webp";
import TextGen from "../../../public/Text_Generate_Effect_p1p0mm.webp";
import InfiniteCards from "../../../public/Infinite_Moving_Cards_evhzur.webp";
import MaskEffect from "../../../public/SVG_Mask_Effect_idbmqx.webp";
import DiagramCards from "../../../public/Diagram_Card_tp3vaw.webp";

const Services = () => {
  return (
    <div id="services" className="py-12 mx-auto mt-16 h-full">
      <div className="container  mx-auto px-6 flex flex-col items-center justify-center h-auto">
        <h1 className="w-full px-2 text-slate-800 md:text-5xl text-3xl font-semibold md:mb-4 mb-2 text-center">
          We handle just about everything!
        </h1>
        <p className="md:text-lg text-md mt-7 text-zinc-500 mb-10 max-w-3xl text-center ">
          We manage every aspect from design to deployment, ensuring your
          website is fully prepared and ready to launch!
        </p>
        <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
          <div className="md:flex-row flex flex-col border col-span-2 rounded-lg group pt-5">
            <div className="flex flex-col p-4 md:w-3/5 w-full h-full ">
              <BrowserIcon />
              <h4 className="text-gray-600 text-lg font-semibold py-4 md:max-w-44 w-full">
                Website design and development
              </h4>
              <p className="text-zinc-500 md:text-xs text-sm font-normal md:w-full w-4/5">
                We'll create a website for you that's so impressive, it'll make
                all the other websites envious. Seriously, no joke.
              </p>
            </div>
            <div className="flex items-end justify-center gap-5 w-full overflow-hidden rounded-xl">
              <Image
                src={OneSVG}
                className="h-60 w-fit md:block hidden transition-transform first-image"
                alt="one"
              />

              <Image
                src={TwoSVG}
                className="h-60 w-fit md:block hidden transition-transform second-image"
                alt="one"
              />

              <Image
                src={TwoTwoSVG}
                className="md:h-60 h-full border w-fit md:hidden block mt-20"
                alt="one"
              />
            </div>
          </div>
          <div className="marquee-container">
            <Image
              className="absolute -z-10 min-h-full w-screen  -bottom-36"
              src={Three}
              alt="pc"
            />
            <div className="col-span-2 rounded-lg p-4">
              <CloudIcon />
              <h4 className="text-gray-600 text-lg font-semibold py-4 w-full">
                Hosting, deployment and maintenance
              </h4>
              <p className="text-zinc-500 md:text-xs text-sm font-normal md:w-full w-4/5">
                With our lightning-fast deployment services, we'll ensure your
                website is launched and out in the world where it belongs.
              </p>
            </div>
            <div className="h-2/6 flex flex-col justify-around mt-3">
              <div className="scroller1">
                <div className="marquee-content1">
                  <div className="marquee-item">
                    <RedisICON />
                    <dl className="text-sm font-medium">Redis</dl>
                  </div>
                  <div className="marquee-item">
                    <VercelICON />
                    <dl className="text-sm font-medium">Vercel</dl>
                  </div>
                  <div className="marquee-item">
                    <AwsICON />
                    <dl className="text-sm font-medium">AWS</dl>
                  </div>
                  <div className="marquee-item">
                    <GitICON />
                    <dl className="text-sm font-medium">Github</dl>
                  </div>
                  <div className="marquee-item">
                    <DockerICON />
                    <dl className="text-sm font-medium">Docker</dl>
                  </div>
                  <div className="marquee-item">
                    <DigitalICON />
                    <dl className="text-sm font-medium">Digital Ocean</dl>
                  </div>
                  <div className="marquee-item">
                    <TailICON />
                    <dl className="text-sm font-medium">Tailwind CSS</dl>
                  </div>
                  <div className="marquee-item">
                    <FramerICON />
                    <dl className="text-sm font-medium">Framer Motion</dl>
                  </div>
                </div>
              </div>
              <div className="scroller2">
                <div className="marquee-content2">
                  <div className="marquee-item">
                    <RedisICON />
                    <dl className="text-sm font-medium">Redis</dl>
                  </div>
                  <div className="marquee-item">
                    <VercelICON />
                    <dl className="text-sm font-medium">Vercel</dl>
                  </div>
                  <div className="marquee-item">
                    <AwsICON />
                    <dl className="text-sm font-medium">AWS</dl>
                  </div>
                  <div className="marquee-item">
                    <GitICON />
                    <dl className="text-sm font-medium">Github</dl>
                  </div>
                  <div className="marquee-item">
                    <DockerICON />
                    <dl className="text-sm font-medium">Docker</dl>
                  </div>
                  <div className="marquee-item">
                    <DigitalICON />
                    <dl className="text-sm font-medium">Digital Ocean</dl>
                  </div>
                  <div className="marquee-item">
                    <TailICON />
                    <dl className="text-sm font-medium">Tailwind CSS</dl>
                  </div>
                  <div className="marquee-item">
                    <FramerICON />
                    <dl className="text-sm font-medium">Framer Motion</dl>
                  </div>
                </div>
              </div>
              <div className="scroller3">
                <div className="marquee-content3">
                  <div className="marquee-item">
                    <RedisICON />
                    <dl className="text-sm font-medium">Redis</dl>
                  </div>
                  <div className="marquee-item">
                    <VercelICON />
                    <dl className="text-sm font-medium">Vercel</dl>
                  </div>
                  <div className="marquee-item">
                    <AwsICON />
                    <dl className="text-sm font-medium">AWS</dl>
                  </div>
                  <div className="marquee-item">
                    <GitICON />
                    <dl className="text-sm font-medium">Github</dl>
                  </div>
                  <div className="marquee-item">
                    <DockerICON />
                    <dl className="text-sm font-medium">Docker</dl>
                  </div>
                  <div className="marquee-item">
                    <DigitalICON />
                    <dl className="text-sm font-medium">Digital Ocean</dl>
                  </div>
                  <div className="marquee-item">
                    <TailICON />
                    <dl className="text-sm font-medium">Tailwind CSS</dl>
                  </div>
                  <div className="marquee-item">
                    <FramerICON />
                    <dl className="text-sm font-medium">Framer Motion</dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border row-span-3 rounded-lg md:col-span-1 col-span-2 md:h-full parent">
            <div className="col-span-2 rounded-lg p-4">
              <GoogleIcon />
              <h4 className="text-gray-600 text-lg font-semibold py-4 w-full">
                Get found on Google
              </h4>
              <p className="text-zinc-500 text-xs font-normal">
                We'll make sure your website is optimized for search engines, so
                you can get the traffic you're looking for.
              </p>
              <div className="typewriter">
                <SearchICON />
                <p className="text-xs ">
                  Your website in your location and area
                </p>
              </div>
              <div className="result1">
                <dl className="domain-txt">www.hackernews.com</dl>
                <p className="result-title">
                  I launched <strong>Your website </strong>
                  help me grow.
                </p>
                <span className="result-content">
                  This guy does not know what hacknews comments are.
                </span>
              </div>
              <div className="result2">
                <dl className="domain-txt">www.somewebsite.com</dl>
                <p className="result-title">
                  <strong>Your website </strong>
                  is the best
                </p>
                <span className="result-content">
                  Ask anyone around, you'll know.
                </span>
              </div>
              <div className="result3">
                <dl className="domain-txt">www.jornut.com</dl>
                <p className="result-title">
                  10 ways <strong>Your website </strong>
                  is the helping...
                </p>
                <span className="result-content">
                  Ask seen on forbes 30 under 30, Here's what Sam Bankman Fried
                  has to say
                </span>
              </div>
            </div>
          </div>
          <div className="border md:col-span-1 col-span-2 md:h-full max-h-min rounded-lg">
            <div className="col-span-2 rounded-lg p-4">
              <CommentICon />
              <h4 className="text-gray-600 text-lg font-semibold py-4 w-full">
                Regular Updates and Progress Tracking
              </h4>
              <p className="text-zinc-500 text-sm font-normal md:w-full max-w-md ">
                Get regular updates on your website's progress and see it come
                to life.
              </p>
            </div>
            <div className="px-4 rounded-md min-w-max h-10 border mx-4 my-7 flex flex-row items-center justify-between">
              <div className="relative">
                <strong className="font-semibold text-sm">Logo</strong>
                <div className="absolute left-10 top-4 rotate-12">
                  <CursorICON />
                </div>
                <div className="rounded-full bg-black text-slate-50 text-xs py-1 px-3 min-w-max flex flex-row h-auto absolute top-5 left-16">
                  <strong>You: </strong>
                  <p className="text-gray-300">make the logo bigger</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <dl className="text-xs text-gray-500">Login</dl>
                <dl className="text-xs text-gray-500">Signup</dl>
              </div>
            </div>
          </div>
          <div className="border md:col-span-2 row-span-2 rounded-lg flex md:flex-row flex-col  shadow-sm md:custom-container custom-container-small ">
            <div className="pl-4 pt-4 pr-4 md:max-w-sm w-full">
              <DoneICon />
              <h4 className="text-gray-600 text-lg font-semibold py-4 ">
                And Everything else ✨
              </h4>
              <p className="text-zinc-500 text-sm font-normal w-full ">
                React Components, Ecommerce, Landing pages, Dashboards. You name
                it, we've done it AND we'll do it for you.
              </p>
            </div>
            <div className="flex md:h-72 h-48 flex-row items-center justify-center w-full relative overflow-hidden md:mt-0 mt-10">
              <div className="first-col w-fit h-fit flex flex-col md:gap-3 gap-10 overflow-hidden absolute left-7 -top-20">
                <div className="rounded-md md:w-44 w-52 h-32 ">
                  <Image
                    className="object-fit rounded-md"
                    src={Meteors}
                    alt="meteors"
                  />
                </div>
                <div className="rounded-md md:w-44 w-52 h-32">
                  <Image
                    className="object-fit rounded-md"
                    src={Tooltip}
                    alt="tooltip"
                  />
                </div>
                <div className="rounded-md md:w-44 w-52 h-32">
                  <Image
                    className="object-fit rounded-md"
                    src={TextGen}
                    alt="textgen"
                  />
                </div>
              </div>
              <div className="second-col w-fit h-fit flex flex-col md:gap-3 gap-10 ml-4 overflow-hidden absolute right-7  -bottom-24">
                <div className="rounded-md md:w-44 w-52 h-32">
                  <Image
                    className="object-fit rounded-md"
                    src={MaskEffect}
                    alt="maskEffect"
                  />
                </div>
                <div className="rounded-md md:w-44 w-52 h-32">
                  <Image
                    className="object-fit rounded-md"
                    src={InfiniteCards}
                    alt="infiniteCards"
                  />
                </div>
                <div className="rounded-md md:w-44 w-52 h-32">
                  <Image
                    className="object-fit rounded-md" 
                    src={DiagramCards}
                    alt="diagramCards"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
