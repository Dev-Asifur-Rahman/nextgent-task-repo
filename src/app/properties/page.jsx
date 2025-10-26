

import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";
import Link from "next/link";



const page = () => {
  return (
    <div id="main-content" className="w-full">
      <section className="h-screen bg-yellow-600"></section>
      <section className="h-screen bg-yellow-800 flex items-center">
        <HeadingScrollAnimation />
      </section>
      <Link href={`/projects/68fc95165a1835bed2dce093`}>
        Go To Dynamic Route
      </Link>
    </div>
  );
};


export default page;
