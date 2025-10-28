"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const SliderLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const firstRenderDone = useRef(false);
  const pathname = usePathname();

  const shutterRefs = useRef([]);
  shutterRefs.current = [];
  const addShutterRef = (el) => {
    if (el && !shutterRefs.current.includes(el)) shutterRefs.current.push(el);
  };

  // --- Refs for route change pillars ---
  const routeRefs = useRef([]);
  routeRefs.current = [];
  const addRouteRef = (el) => {
    if (el && !routeRefs.current.includes(el)) routeRefs.current.push(el);
  };

  useEffect(() => {
    if (!firstRenderDone.current) {
      // const timer = setTimeout(() => {
      //   // Animate shutters first
      //   gsap.to(shutterRefs.current, {
      //     y: "-100%", // move up
      //     duration: 0.6,
      //     stagger: 0.05,
      //     ease: "power2.out",
      //     delay: 0.3,
      //   });
      // }, 100);
       if(pathname.includes('/projects')) alert('dynamic route')
      // firstRenderDone.current = true;
      // return () => clearTimeout(timer);
    } else {
      // Route change animation stays the same
      // const tl = gsap.timeline();
      // tl.fromTo(
      //   routeRefs.current,
      //   { y: "-100%" },
      //   {
      //     y: "0%",
      //     duration: 0.5,
      //     stagger: 0.05,
      //     ease: "power2.out",
      //     onComplete: () => {
      //       gsap.to(routeRefs.current, {
      //         y: "-100%",
      //         duration: 0.5,
      //         stagger: 0.05,
      //         ease: "power2.in",
      //       });
      //     },
      //   }
      // );
    }
  }, [pathname]);

  return (
    <section>
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 flex">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              ref={addShutterRef}
              className="h-screen"
              style={{
                flex: 1,
                backgroundColor: "#1b1b1b",
                transform: "translateY(0%)",
              }}
            />
          ))}
      </div>
      <div className="fixed top-0 left-0 w-full h-full z-40 pointer-events-none flex">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              ref={addRouteRef}
              className="h-full"
              style={{
                flex: 1,
                backgroundColor: "#1b1b1b",
                transform: "translateY(-100%)",
              }}
            />
          ))}
      </div>
      {children}
    </section>
  );
};

export default SliderLoader;
