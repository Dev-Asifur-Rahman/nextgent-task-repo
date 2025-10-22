"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

const ScrollSmooth = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; 

    setIsClient(true);

    // dynamically import ScrollSmoother only on client
    import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
      gsap.registerPlugin(ScrollSmoother);

      // prevent multiple instances
      if (!ScrollSmoother.get()) {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 3, 
          effects: true,
          normalizeScroll: true,
          ignoreMobileResize: true,
        });
      }
    });
  }, []);

  if (!isClient) return null;

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmooth;
