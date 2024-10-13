'use client';

import "./globals.css";
import { Urbanist } from "next/font/google";
import { Manrope } from "next/font/google";
import TopBar from "./components/layout/TopBar";
import Sidebar from "./components/layout/Sidebar";
import { usePathname } from "next/navigation";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const validPages = ["Swap", "OPerps"] as const;
type PageType = typeof validPages[number];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); // Use usePathname from next/navigation
  
  // Get the current page from the URL
  const currentPage = pathname.split("/").pop();
   // Type guard: Check if the currentPage is one of the valid options
   const page: PageType = validPages.includes(currentPage as PageType)
   ? (currentPage as PageType)
   : "Swap"; // Default to "Swap" if not valid // Default to "Swap"

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Urbanist:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className={`${urbanist.className} ${manrope.className} bg-klb h-full w-full`}>
  <div className="flex flex-row">
    <Sidebar /> {/* Sidebar fixed */}
    <div className="flex flex-col px-4 flex-1 gap-4 "> {/* Add margin-left to avoid overlap */}
      <TopBar page={page} /> {/* TopBar fixed */}
      <div className="flex justify-center  w-full "> {/* Adjust margin-top for TopBar height */}
      {children}
      </div>
    </div>
  </div>
</body>

    </html>
  );
}