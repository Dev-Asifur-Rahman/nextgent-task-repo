"use client";
import { useState } from "react";

const TextTabSection = () => {
  const [activeTab, setActiveTab] = useState("TRUST");

  const tabs = [
    {
      id: "TRUST",
      label: "TRUST",
      content:
        "Trustworthiness is one of our most prized values. Ensuring a culture that naturalizes the sense of reliability among the people involved enhances productivity, respect and helps strengthen the bond between the clients and us.",
    },
    {
      id: "CLOSENESS",
      label: "CLOSENESS",
      content:
        "Maintaining long-term, rewarding relationships with our clients is one of the principal things we transgress. Their happiness is our advancement towards success, and we make it happen by paying attention to the tiniest details.",
    },
    {
      id: "UNIQUENESS",
      label: "UNIQUENESS",
      content:
        "Here at JCX, we do things differently. All of our building projects portray uniqueness in their own accord. With the touch of modern architectural concepts used in the structures, state-of-the-art technology, and finally with large amounts of sustainability, all infuse together and produce results that mesmerize.",
    },
    {
      id: "INTEGRITY",
      label: "INTEGRITY",
      content:
        "Integrity is a fundamental value that characterizes us. We demonstrate integrity in our work and garner trust from our clients by accumulating accomplishments and success over the new course of our journey.",
    },
  ];

  return (
    <section className="bg-[#1B1B1B] text-white w-full lg:w-[55%] aspect-[1/0.49] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:z-10">
      <div className="">
        <div className="flex flex-col lg:flex-row md:flex-row items-start lg:justify-center lg:gap-3 md:gap-2  lg:border-b md:border-b w-full lg:w-fit md:w-fit mx-auto mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative w-full lg:w-auto text-left lg:text-center py-4 pl-4 md:pl-0 lg:pl-0 text-base tracking-wide transition-all duration-300 
                ${
                  activeTab === tab.id
                    ? "text-white font-semibold"
                    : "text-gray-400 font-normal"
                }
                hover:text-white
                after:absolute after:left-0 after:bottom-0 lg:after:h-0 md:after:h-0 after:h-[2px] after:w-full after:bg-gray-200
                before:absolute before:left-0 before:-bottom-[2px] before:h-[4px] before:w-0 before:bg-white before:transition-all before:duration-500
                hover:before:w-full
                ${activeTab === tab.id ? "before:w-full before:h-[3px]" : ""}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 text-white p-4 text-lg leading-relaxed text-justify">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default TextTabSection;
