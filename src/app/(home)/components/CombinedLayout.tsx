"use client";

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Footer from "./Footer";
import SidebarButton from "./SidebarButton";
// import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  // const pathname = usePathname();

  return (
    <div className={`z-0 font-serif h-screen overflow-y-scroll`}>
      {/* ${
        pathname === "/" ? "flex flex-col" : ""
      } */}
      <SidebarButton />
      <Header />
      {children}
      <div className="border-[1px] h-[1px] border-[rgba(var(--secondary-color-rgb),1)] w-[min(100%,60rem)] mx-auto mt-auto"></div>
      <Footer />
    </div>
  );
};

export default CombinedLayout;
