"use client";
import React, { useState } from "react";
import { MinusICON, PlusICON } from "./Icons";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "What is turnaround time?",
      answer:
        "Can’t find the answer you’re looking for? Reach out to us and we will get in touch with you",
    },
    {
      id: 2,
      question: "How do you communicate?",
      answer:
        "We use email, Slack, WhatsApp and Signal to communicate. We strongly prefer slack and keep the conversations async so that we can focus on building your website.",
    },
    {
      id: 3,
      question: "What is the process of working with you?",
      answer:
        "Our process involves adding you to a communication channel where you describe your requirements (a call is optional). We then dive deep into your project which involves research, ideation and iterations -- all this with working closely with you for instant feedback.",
    },
    {
      id: 4,
      question: "What happens if I don't like the design?",
      answer:
        "We provide unlimited revisions until you are happy with the design. We will work with you to make sure you are happy with the design.",
    },
    {
      id: 5,
      question: "Are there any refunds?",
      answer:
        "We provide refunds only if we haven't started working on your website. Once we start working on your website, we don't provide any refunds.",
    },
    {
      id: 6,
      question: "What is your Tech Stack?",
      answer:
        "We are comfortable with all the major frameworks and technologies there are (since we are engineers). But yes, we have our favourites. We use Next.js and Tailwind CSS to build out your website. Next because it has SEO benefits, Tailwind because it makes us fast.",
    },
    {
      id: 7,
      question: "Why no calls or meetings?",
      answer:
        "We are a small team and we want to focus on building your website. We have found that calls and meetings are a huge distraction and we want to avoid them as much as possible. We prefer async communication over calls and meetings. In the past, We've built huge softwares and SaaS applications without ever getting on a call. We are confident that we can build your website without getting on a call.",
    },
    {
      id: 8,
      question:
        "What happens if I have to make some changes in the website after it is delivered?",
      answer:
        "We provide you with a video tutorial on how to make changes to your website. If you still need help, we can make changes for you at an hourly rate OR you can sign up for our retainer services. Contact us on the website chat for more details.",
    },
  ];
  const [openItemId, setOpenItemId] = useState(null);

  const handleClick = (id: any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="w-full h-full flex flex-col pt-48">
      <div className="md:mx-auto md:w-3/5 w-full md:p-0 px-6">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <p className="text-gray-600 pt-5 pb-8">
          Can’t find the answer you’re looking for?{" "}
          <strong className="text-indigo-600 font-semibold">
            Reach out to us
          </strong>{" "}
          and we will get in touch with you
        </p>
        <div className="mt-10 flex flex-col gap-8">
          {faqData?.map((item) => (
            <div
              className="border-b border-gray-300 w-full pb-6 flex flex-col"
              key={item.id}
            >
              <div
                className="  flex items-center justify-between cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <h2 className="text-slate-800 font-semibold ">
                  {item.question}
                </h2>
                {openItemId === item.id ? <MinusICON /> : <PlusICON />}
              </div>
              {openItemId === item.id && (
                <div className="flex flex-col  justify-center h-full pt-3 pb-2">
                  <p className="text-gray-600 ">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
