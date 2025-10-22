"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const NavBar = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY - lastScrollY.current > 10) {
        gsap.killTweensOf(navRef.current);
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power2.out",
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
        });
      } else if (lastScrollY.current - currentScrollY > 10) {
        gsap.killTweensOf(navRef.current);
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.6,
          ease: "power2.out",

          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={navRef}
      className="h-20 w-full fixed top-0 flex justify-center z-50"
      onMouseEnter={() => {
        gsap.to(navRef.current, {
          backgroundColor: "black",
          backdropFilter: "blur(100px)",
          duration: 0.6,
        });
      }}
      onMouseLeave={() => {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
          duration: 0.6,
        });
      }}
    >
      <div className="h-full w-[85%] flex items-center justify-between  text-base text-white ">
        <div className=" w-fit">
          <Link href="/">
            <img
              src="https://jcxbd.com/wp-content/uploads/2021/09/logo.svg"
              alt=""
              className="w-[125px] lg:w-[125px] h-[55px] md:w-[70px]"
            />
          </Link>
        </div>
        <section className="flex lg:justify-between md:justify-between justify-end items-center w-3/5 md:w-4/5 lg:w-3/5">
          <div className="items-center md:inline-flex hidden lg:inline-flex">
            <p className="pr-[30px] border-r w-fit hover:text-[#AC9486]">
              <Link href="/properties">RESIDENTIAL</Link>
            </p>
            <p className="ml-[30px] hover:text-[#AC9486]">
              <Link href="/properties">COMMERCIAL</Link>
            </p>
          </div>
          <div className="lg:inline-flex md:inline-flex items-center gap-3 hidden hover:text-[#AC9486]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 100 100"
              style={{ height: "18px" }}
            >
              <path
                fill="#fff"
                d="M86.9486,80a34.2635,34.2635,0,0,1-24.25,10.06h-.08A34.259,34.259,0,0,1,38.2985,80c-3.1-3.1-6.13-6.26-9.31-9.28-4.7-4.46-9.6-8.77-13.24-14.19a34.2063,34.2063,0,0,1-5.52-14.61,34.6363,34.6363,0,0,1,1.44-15.36,33.9745,33.9745,0,0,1,3.32-7.16,34.6627,34.6627,0,0,1,2.32-3.32c.42-.53.86-1.06,1.32-1.57.21-.23,1.07-1.45,1.37-1.45a10.6587,10.6587,0,0,1,15.07,0l5.88,5.87a10.6769,10.6769,0,0,1,0,15.07l-3.18,3.18a8.7923,8.7923,0,0,0-1.08,11.17l7.63,7.85,6.04,6.04a8.824,8.824,0,0,0,12.47,0l3.18-3.18a10.6767,10.6767,0,0,1,15.07,0l5.87,5.88A10.6467,10.6467,0,0,1,86.9486,80Z"
              />
            </svg>
            <p>16777</p>
          </div>
          <div className="flex items-center gap-5 group cursor-pointer hover:text-[#AC9486]">
            <p>MENU</p>
            <div  className="w-[30px] h-[18px] flex flex-col justify-evenly">
              <p className="h-[2px] bg-white w-full transition-transform duration-700 transform origin-right "></p>
              <p className="h-[2px] bg-white w-full transition-transform duration-700 transform origin-right group-hover:scale-x-50"></p>
              <p className="h-[2px] bg-white w-full transition-transform duration-700 transform origin-right group-hover:scale-x-25"></p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default NavBar;
