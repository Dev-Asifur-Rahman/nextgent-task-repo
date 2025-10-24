"use client";

import ScrollSmooth from "@/components/ScrollSmooth";
import GlobalContextProvider from "./GlobalContextProvider";
import SliderLoader from "@/components/SliderLoader";
import NavBar from "@/components/NavBar";
import ScrollTopIcon from "@/components/ScrollTopIcon";
import Footer from "@/components/Footer";


export default function GlobalClientWrapper({ children }) {
  return (
    <GlobalContextProvider>
      <ScrollSmooth>
        <SliderLoader>
          <NavBar />
          <section>{children}</section>
        </SliderLoader>
        <Footer />
        <ScrollTopIcon />
      </ScrollSmooth>
    </GlobalContextProvider>
  );
}
