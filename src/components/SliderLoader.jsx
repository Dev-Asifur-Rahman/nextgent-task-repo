"use client";

import { useRef, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { GlobalContext } from "@/context/GlobalContext";

export default function SliderLoader({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { setRoute } = useContext(GlobalContext);
  const panelsRef = useRef([]);
  const panelsCount = 8;
  const currentTl = useRef(null);
  const prevPath = useRef(pathname);
  const isLinkClick = useRef(false); // <-- track manual link clicks

  const addToRefs = (el) => {
    if (el && !panelsRef.current.includes(el)) panelsRef.current.push(el);
  };

  const animatePanelsIn = (onComplete) => {
    currentTl.current?.kill();
    const tl = gsap.timeline({ onComplete });
    tl.set(panelsRef.current, { y: "-100%" }).to(panelsRef.current, {
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.inOut",
    });
    currentTl.current = tl;
  };

  const animatePanelsOut = (onComplete) => {
    currentTl.current?.kill();
    const tl = gsap.timeline({ onComplete });
    tl.to(panelsRef.current, {
      y: "-100%",
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.inOut",
    });
    currentTl.current = tl;
  };

  // Initial load
  useEffect(() => {
    if (!panelsRef.current.length) return;
    setRoute(true);
    animatePanelsOut(() => setRoute(false));
  }, [setRoute]);

  // Route change animation
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    if (!panelsRef.current.length) return;
    if (isLinkClick.current) return; // <-- skip if handled by link click

    setRoute(true);
    animatePanelsIn(() => {
      animatePanelsOut(() => setRoute(false));
    });
  }, [pathname, setRoute]);

  // Link clicks
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');

    const handler = async (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");

      if (currentTl.current?.isActive()) return;

      isLinkClick.current = true; // <-- mark click in progress
      setRoute(true);

      await new Promise((resolve) => animatePanelsIn(resolve));
      router.push(href);
      await new Promise((resolve) => animatePanelsOut(resolve));

      setRoute(false);
      isLinkClick.current = false; // <-- reset
    };

    links.forEach((link) => link.addEventListener("click", handler));
    return () =>
      links.forEach((link) => link.removeEventListener("click", handler));
  }, [router, setRoute]);

  return (
    <>
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex z-50">
        {[...Array(panelsCount)].map((_, i) => (
          <div
            key={i}
            ref={addToRefs}
            style={{ width: `${100 / panelsCount}%` }}
            className="h-full bg-[#1B1B1B]"
          />
        ))}
      </div>
    </>
  );
}
