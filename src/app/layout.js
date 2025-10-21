// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title:
    "JCX Developments Ltd. | Leading Real Estate Company in Bangladesh | Beyond Bonding Development",
  description:
    "JCX Developments Ltd, one of the Bangladesh's Leading Real Estate Company, brings contemporary design and develop large-scale Residential, Commercial, and Condominium projects in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1536px] w-full border mx-auto">{children}</body>
    </html>
  );
}
