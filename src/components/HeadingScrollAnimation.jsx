"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeadingScrollAnimation = ({
  text = "Default Text",
  bg = true,
  color = true,
}) => {
  const containerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 20, opacity: 0, duration: 0.6 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:h-24 text-center w-full flex flex-col gap-1 justify-center items-center"
    >
      <p
        ref={textRef}
        className={`${
          color === true ? "text-white" : "text-[#8E8F8F]"
        } lg:text-4xl md:text-3xl text-xl`}
      >
        {text}
      </p>
      <span
        className={`${
          color === true ? "bg-red-600" : "bg-blue-600"
        } h-[7px] w-[50px]`}
      ></span>
    </div>
  );
};

export default HeadingScrollAnimation;
