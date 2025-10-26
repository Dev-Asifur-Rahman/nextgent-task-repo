
import Banner from "@/components/Banner";
import AwardsAndRecognition from "@/sections/AwardsAndRecognition";
import BasisOfOurBeliefs from "@/sections/BasisOfOurBeliefs";
import CallToAction from "@/sections/CallToAction";
import Map from "@/sections/Map";
import Perfection from "@/sections/Perfection";
import Testimonials from "@/sections/Testimonials";


import React from 'react';

const page = () => {
  return (
    <section >
      <Banner />
      <BasisOfOurBeliefs />
      <CallToAction />
      <Perfection />
      <Testimonials />
      <AwardsAndRecognition />
      <Map />
    </section>
  );
};

export default page;

