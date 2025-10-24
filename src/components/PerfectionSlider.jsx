"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";
import { useRef, useState, useEffect } from "react";

const fakeData = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    Orientation: "South Facing",
    Address: "123 Sunset Blvd, Dhaka",
    LandSize: "10 Katha",
    ApartmentSize: "2400 sq.ft",
    Units: 8,
    Parks: 2,
    Slots: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    Orientation: "East Facing",
    Address: "45 Green Road, Dhaka",
    LandSize: "8 Katha",
    ApartmentSize: "1800 sq.ft",
    Units: 6,
    Parks: 1,
    Slots: 3,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    Orientation: "North Facing",
    Address: "12 Gulshan Ave, Dhaka",
    LandSize: "12 Katha",
    ApartmentSize: "3000 sq.ft",
    Units: 10,
    Parks: 3,
    Slots: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    Orientation: "West Facing",
    Address: "88 Banani, Dhaka",
    LandSize: "6 Katha",
    ApartmentSize: "1600 sq.ft",
    Units: 5,
    Parks: 1,
    Slots: 2,
  },
];

const PerfectionSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = 5;

  // Initialize navigation after refs are mounted
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section
      id="perfection-slider-section"
      className="bg-black h-screen relative flex items-center justify-center"
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const newStep = index % steps;
          setActiveStep(newStep);
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
      >
        {Array.from({ length: 8 }, (_, i) => {
          const data = fakeData[i % fakeData.length];
          return (
            <SwiperSlide
              key={i}
              className="relative group overflow-hidden"
            >
              <img
                src={data.image}
                alt={data.Address}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-700 flex flex-col justify-start p-5 text-white">
                <ul className="text-sm space-y-2">
                  {Object.entries(data).map(([key, value]) => {
                    if (key === "image") return null;
                    return (
                      <li key={key} className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-white inline-block"></span>
                        <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Arrows + Progress Line */}
      <section className="w-full absolute bottom-0 left-0 h-[15%]">
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex items-center gap-3 z-10">
          <div ref={prevRef} className="cursor-pointer">
            <LeftArrowIcon />
          </div>
          <div ref={nextRef} className="cursor-pointer">
            <RightArrowIcon />
          </div>
        </div>

        <div className="w-3/5 lg:inline md:inline hidden absolute h-px right-[5%] top-1/2 -translate-y-1/2 bg-gray-600 overflow-hidden">
          <div className="flex justify-between w-full">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`h-[3px] transition-all duration-500 ${
                  activeStep === index ? "bg-white" : "bg-gray-600"
                }`}
                style={{ width: "20%" }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PerfectionSlider;
