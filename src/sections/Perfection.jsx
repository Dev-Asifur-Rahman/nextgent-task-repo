import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";
import PerfectionSlider from "@/components/PerfectionSlider";

const Perfection = () => {
  return (
    <section className=" w-full border bg-black">
      <HeadingScrollAnimation
        text="OUR PERFECTIONS"
        color={true}
        bgcolor={"#000000"}
      ></HeadingScrollAnimation>
      <PerfectionSlider></PerfectionSlider>
    </section>
  );
};

export default Perfection;
