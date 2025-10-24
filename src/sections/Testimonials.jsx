import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";
import TestimonialSlider from "@/components/TestimonialSlider";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#1B1B1B]">
      <HeadingScrollAnimation
        text="TESTIMONIALS"
        color={true}
        bg={true}
        bgcolor={"#1B1B1B"}
      ></HeadingScrollAnimation>
      <div>
        <TestimonialSlider></TestimonialSlider>
      </div>
    </section>
  );
};

export default Testimonials;
