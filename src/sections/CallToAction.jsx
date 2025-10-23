import YaxisBorderHeading from "@/components/YaxisBorderHeading";

const CallToAction = () => {
  return (
    <section>
      <div className="lg:h-screen lg:w-screen md:h-screen md:w-screen w-full aspect-square relative">
        <img
          src="/images/cta.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute text-white flex flex-col items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <p className='lg:text-base md:text-base text-sm'>A LITTLE PIECE OF</p>
          <p className="lg:text-8xl md:text-6xl  text-4xl font-extralight lg:mb-8 md:mb-6 mb-4">HEAVEN</p>
          <YaxisBorderHeading heading="CONTACT US"></YaxisBorderHeading>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
