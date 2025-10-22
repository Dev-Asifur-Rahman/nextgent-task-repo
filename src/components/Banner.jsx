"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full">
      <section className="h-screen w-full relative">
        <Swiper
          speed={2000}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          centeredSlides={true}
          navigation={{ prevEl: null, nextEl: null }}
        >
          <SwiperSlide>
            <img src="/images/sliderone.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slidertwo.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/sliderthree.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/sliderfour.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/sliderfive.webp" alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Arrows */}
        <div
          ref={prevRef}
          className="absolute lg:right-0 lg:left-[77%] md:left-5 left-5 lg:top-[92%] lg:bottom-0 md:top-1/2  top-1/2 -translate-y-1/2 z-10 cursor-pointer w-fit"
        >
          <LeftArrowIcon />
        </div>
        <div
          ref={nextRef}
          className="absolute right-5 top-1/2 -translate-y-1/2 lg:top-[92%] lg:bottom-0 lg:right-[10%] cursor-pointer z-10"
        >
          <RightArrowIcon />
        </div>
      </section>
    </section>
  );
};

export default Banner;
