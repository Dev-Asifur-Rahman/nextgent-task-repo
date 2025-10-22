"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export default function SliderLoader({ children }) {
  const router = useRouter();
  const panelsRef = useRef([]);
  const panelsCount = 8;
  const firstLoad = useRef(true);

  const addToRefs = (el) => {
    if (el && !panelsRef.current.includes(el)) panelsRef.current.push(el);
  };

  // First load animation
  useEffect(() => {
    if (!panelsRef.current.length) return;
    if (!firstLoad.current) return;

    const tl = gsap.timeline();
    tl.set(panelsRef.current, { y: 0 })
      .to(panelsRef.current, {
        y: "-100%", 
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.inOut",
      });

    firstLoad.current = false;
  }, []);

  // Handle route navigation with shutter
  const navigateWithShutter = (href) => {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href); 
        // Reveal bars after navigation
        gsap.to(panelsRef.current, {
          y: "-100%",
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.inOut",
          delay: 0.1,
        });
      },
    });

    // Bars come down to cover current page
    tl.set(panelsRef.current, { y: "-100%" })
      .to(panelsRef.current, {
        y: 0, 
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.inOut",
      });
  };

  // 🔹 Intercept internal links automatically
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    const handler = (e) => {
      e.preventDefault();
      navigateWithShutter(e.currentTarget.getAttribute("href"));
    };
    links.forEach((link) => link.addEventListener("click", handler));
    return () =>
      links.forEach((link) => link.removeEventListener("click", handler));
  }, []);

  return (
    <>
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
      <div className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none flex">
        {[...Array(panelsCount)].map((_, i) => (
          <div
            key={i}
            ref={addToRefs}
            style={{ width: `${100 / panelsCount}%` }}
            className="h-full bg-black"
          />
        ))}
      </div>
    </>
  );
}
