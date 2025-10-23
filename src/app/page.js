import Banner from "@/components/Banner";
import BasisOfOurBeliefs from "@/sections/BasisOfOurBeliefs";
import CallToAction from "@/sections/CallToAction";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner></Banner>
      <BasisOfOurBeliefs></BasisOfOurBeliefs>
      <CallToAction></CallToAction>
    </section>
  );
}
