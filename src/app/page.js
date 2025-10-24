import Banner from "@/components/Banner";
import AwardsAndRecognition from "@/sections/AwardsAndRecognition";
import BasisOfOurBeliefs from "@/sections/BasisOfOurBeliefs";
import CallToAction from "@/sections/CallToAction";
import Map from "@/sections/Map";
import Perfection from "@/sections/Perfection";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner></Banner>
      <BasisOfOurBeliefs></BasisOfOurBeliefs>
      <CallToAction></CallToAction>
      <Perfection></Perfection>
      <Testimonials></Testimonials>
      <AwardsAndRecognition></AwardsAndRecognition>
      <Map></Map>
    </section>
  );
}
