import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";
import React from "react";

const AwardsAndRecognition = () => {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <HeadingScrollAnimation
        text="OUR AWARDS AND RECOGNITION"
        bg={false}
        color={false}
        bgcolor={"#FFFFFF"}
      ></HeadingScrollAnimation>
      <section
        id="awards-recognition-section"
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 w-full lg:aspect-[1/0.3] md:aspect-[1/0.3] aspect-[1/1.3]"
      >
        <div>
          <img
            src="https://jcxbd.com/wp-content/uploads/2023/09/Award-2-min.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jcxbd.com/wp-content/uploads/2023/09/Award-1-min.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jcxbd.com/wp-content/uploads/2023/09/Award-3-min.webp"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default AwardsAndRecognition;
