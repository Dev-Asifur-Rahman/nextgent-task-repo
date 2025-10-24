"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import LeftArrowIcon from "@/components/LeftArrowIcon";
import RightArrowIcon from "@/components/RightArrowIcon";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    desc: "Exceptional design and modern aesthetics. The quality and attention to detail are outstanding, making every space feel luxurious.",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    desc: "Bright interiors, perfect ventilation, and excellent location. Truly a blend of comfort and elegance in every aspect.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    desc: "A stunning living experience with thoughtful layouts. The natural light and spacious rooms make it feel like home instantly.",
  },
  {
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    desc: "A perfect balance of functionality and beauty. The attention to fine details in the design reflects top-tier craftsmanship.",
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    desc: "Comfort, style, and innovation combined into one. Every corner feels premium and designed for modern living.",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    desc: "The aesthetics and build quality are top-notch. A beautiful space that feels both peaceful and sophisticated.",
  },
];

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [groupCount, setGroupCount] = useState(
    Math.ceil(testimonials.length / 2)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current && prevRef.current && nextRef.current) {
        const swiper = swiperRef.current;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="testimonial-section"
      className="bg-[#1B1B1B] relative flex items-center justify-center pb-20"
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          const slidesPerView = swiper.params.slidesPerView;
          const newStep = Math.floor(swiper.activeIndex / slidesPerView);
          setActiveStep(newStep);
        }}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 60 },
        }}
        spaceBetween={60}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full  border ">
              {/* Image Section */}
              <div className="w-1/2 border h-full">
                <img
                  src={t.image}
                  alt={`testimonial-${i}`}
                  className="w-full h-full  object-cover"
                />
              </div>
              {/* Description section  */}
              <div className="w-[55%] h-4/5 absolute top-1/2 -translate-y-1/2 right-0 border ">
                <div className="w-full h-full bg-black text-white p-8 ">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows + Progress */}
      <section className="w-full absolute bottom-0 left-0 h-[15%]">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex items-center gap-3 z-10">
          <div ref={prevRef} className="cursor-pointer">
            <LeftArrowIcon />
          </div>
          <div ref={nextRef} className="cursor-pointer">
            <RightArrowIcon />
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="w-3/5 lg:inline md:inline hidden absolute h-px right-[5%] top-1/2 -translate-y-1/2 bg-gray-600 overflow-hidden">
          <div className="flex justify-between w-full">
            {Array.from({ length: groupCount }).map((_, index) => (
              <div
                key={index}
                className={`h-[3px] transition-all duration-500 ${
                  activeStep === index ? "bg-white" : "bg-gray-600"
                }`}
                style={{ width: `${100 / groupCount}%` }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TestimonialSlider;
