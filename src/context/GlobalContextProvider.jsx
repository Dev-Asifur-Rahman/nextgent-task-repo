"use client";

import { useState, useRef, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const GlobalContextProvider = ({ children }) => {
  const [route, setRoute] = useState(undefined);
  const [hasReloaded, setHasReloaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dynamicRouteHydration, setDynamicRouteHydration] = useState(false);
  const firstRenderDone = useRef(false);
  const pathname = usePathname();

  const contextValue = {
    route,
    setRoute,
    hasReloaded,
    setHasReloaded,
    dynamicRouteHydration,
    setDynamicRouteHydration,
  };

  const shutterRefs = useRef([]);
  shutterRefs.current = [];
  const addShutterRef = (el) => {
    if (el && !shutterRefs.current.includes(el)) shutterRefs.current.push(el);
  };

  const routeRefs = useRef([]);
  routeRefs.current = [];
  const addRouteRef = (el) => {
    if (el && !routeRefs.current.includes(el)) routeRefs.current.push(el);
  };

  useEffect(() => {
    if (!firstRenderDone.current) {
      // const timer = setTimeout(() => {
      //   gsap.to(shutterRefs.current, {
      //     y: "-100%",
      //     duration: 0.6,
      //     stagger: 0.05,
      //     ease: "power2.out",
      //     delay: 0.3,
      //     onComplete: () => setLoading(false),
      //   });
      // }, 100);

      // firstRenderDone.current = true;
      return () => clearTimeout(timer);
    } else {
      // Route change animation
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
    <GlobalContext.Provider value={contextValue}>
      {/* {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex pointer-events-none">
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
      )} */}

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
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
