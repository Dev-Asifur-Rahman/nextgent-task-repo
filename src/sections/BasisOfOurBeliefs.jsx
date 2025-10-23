import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";
import TextTabSection from "@/components/TextTabSection";
import React from "react";

const BasisOfOurBeliefs = () => {
  return (
    <section className="bg-black w-full h-auto">
      <HeadingScrollAnimation
        bg={"black"}
        color={true}
        text="THE BASIS OF OUR BELIEFS"
      ></HeadingScrollAnimation>
      <div className="lg:h-screen w-full lg:relative flex flex-col-reverse md:flex-col">
        <TextTabSection></TextTabSection>
        <img
          src="https://jcxbd.com/wp-content/uploads/2024/04/Right-Choice-v4.jpg"
          alt=""
          className="lg:w-1/2 w-full lg:aspect-[1/0.6] lg:absolute lg:right-0 lg:-translate-y-1/2 lg:top-1/2 "
        />
      </div>
    </section>
  );
};

export default BasisOfOurBeliefs;
