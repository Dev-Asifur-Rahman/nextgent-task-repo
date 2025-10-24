import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SliderLoader from "@/components/SliderLoader";
import ScrollSmooth from "@/components/ScrollSmooth";
import Footer from "@/components/Footer";
import GlobalContextProvider from "@/context/GlobalContextProvider";
import ScrollTopIcon from "@/components/ScrollTopIcon";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title:
    "JCX Developments Ltd. | Leading Real Estate Company in Bangladesh | Beyond Bonding Development",
  description:
    "JCX Developments Ltd, one of the Bangladesh's Leading Real Estate Company, brings contemporary design and develop large-scale Residential, Commercial, and Condominium projects in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-[1536px] w-full mx-auto ${montserrat.variable}`}>
        <GlobalContextProvider>
          <ScrollSmooth>
            <SliderLoader>
              <NavBar />
              <section>{children}</section>
            </SliderLoader>
            <Footer />
          </ScrollSmooth>
          <ScrollTopIcon></ScrollTopIcon>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
