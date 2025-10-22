import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";

const page = () => {
  return (
    <div className=" w-full">
      <section className="h-screen bg-yellow-600"></section>
      <section className="h-screen bg-yellow-800 flex items-center">
       <HeadingScrollAnimation></HeadingScrollAnimation>
      </section>
    </div>
  );
};

export default page;
