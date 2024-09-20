import React from "react";
import columst from "../columnst.json";
import columnnd from "../columnnd.json";
import columnrd from "../columnrd.json";
import columnth from "../columnth.json";
import columnfth from "../columnfth.json";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 md:px-8 pb-20 pt-20">
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-indigo-500/50 to-violet-600/50 xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 relative text-center text-neutral-700 max-w-6xl mx-auto !leading-normal mt-32">
        We have worked with thousands of <br className="hidden md:block" />
        <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-indigo-500 to-indigo-500/[0.8] z-10">
          amazing founders{" "}
        </span>
      </h2>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        {columst?.map((item) => (
          <figure
            key={item.id}
            className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
          >
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>“{item.text}”</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <Image
                width={900}
                height={1200}
                className="h-10 w-10 object-cover object-top rounded-full bg-gray-50"
                src={item.img}
                alt="head2"
              />
              <div className="flex-auto">
                <div className="font-semibold">{item.owner}</div>
                <div className="text-gray-600">{item.position}</div>
              </div>
            </figcaption>
          </figure>
        ))}

        <div className="space-y-8 xl:contents xl:space-y-0">
          <div className="xl:row-span-2 space-y-8">
            {columnnd?.map((item) => (
              <figure
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p>“{item.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 object-cover object-top rounded-full bg-gray-50"
                    src={item.img}
                    alt="heads_"
                    width={900}
                    height={1200}
                  />
                  <div>
                    <div className="font-semibold">{item.owner}</div>
                    <div className="text-gray-600">{item.position}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="xl:row-start-1 space-y-8">
            {columnrd?.map((item) => (
              <figure
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p>{item.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 object-cover object-top rounded-full bg-gray-50"
                    src={item.img}
                    alt="heads_"
                    width={900}
                    height={1200}
                  />
                  <div>
                    <div className="font-semibold">{item.owner}</div>
                    <div className="text-gray-600">{item.position}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="space-y-8 xl:contents xl:space-y-0">
          <div className="xl:row-start-1 space-y-8">
            {columnth?.map((item) => (
              <figure
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p>“{item.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 object-cover object-top rounded-full bg-gray-50"
                    src={item.img}
                    alt="heads_"
                    width={1200}
                    height={900}
                  />
                  <div>
                    <div className="font-semibold">{item.owner}</div>
                    <div className="text-gray-600">{item.position}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="xl:row-span-2 space-y-8">
            {columnfth?.map((item) => (
              <figure
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p>“{item.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 object-cover object-top rounded-full bg-gray-50"
                    src={item.img}
                    alt="heads_"
                    width={1200}
                    height={900}
                  />
                  <div>
                    <div className="font-semibold">{item.owner}</div>
                    <div className="text-gray-600">{item.position}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
