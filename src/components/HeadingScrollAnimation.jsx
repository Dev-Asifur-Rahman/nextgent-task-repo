"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeadingScrollAnimation = ({
  text = "Default Text",
  bg = true,
  color = true,
  bgcolor,
}) => {
  const containerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0, duration: 0.6 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section className="w-full lg:h-48 md:h-40 h-16  relative">
      <div
        ref={containerRef}
        className="lg:h-24 md:h-20 h-9 text-center w-full flex flex-col gap-1 justify-end items-center  absolute top-0 z-0"
      >
        <p
          ref={textRef}
          className={`${
            color === true ? "text-white" : "text-[#1B1D1D]"
          } lg:text-4xl md:text-3xl text-sm`}
        >
          {text}
        </p>
        <span
          className={`${
            bg === true ? "bg-red-600" : "bg-blue-600"
          } h-[7px] w-[50px]`}
        ></span>
      </div>
      <div
        className={`absolute w-full lg:h-24 md:h-20 h-9 bottom-0 z-10 bg-[${bgcolor}]`}
      ></div>
    </section>
  );
};

export default HeadingScrollAnimation;
