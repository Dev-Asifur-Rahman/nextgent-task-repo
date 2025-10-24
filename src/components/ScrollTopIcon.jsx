"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const ScrollTopIcon = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const { route, isTransitioning } = context;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (route || isTransitioning) return null;

  return (
    <div
      className="fixed bottom-4 right-4 w-[50px] h-[50px] cursor-pointer flex items-center justify-center"
      onClick={scrollToTop}
    >
      <span
        className="absolute w-full h-full rounded-full border border-blue-800"
        style={{ animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite" }}
      />
      <span
        className="absolute w-[70%] h-[70%] rounded-full border border-blue-700"
        style={{
          animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
          animationDelay: "0.5s",
        }}
      />
      <img
        src="/images/scrolltopicon.svg"
        alt="Scroll to top"
        className="w-1/2 h-1/2 object-contain relative"
      />
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollTopIcon;
