"use client";

import React from "react";
import Footer from "./Footer";
import SidebarButton from "./SidebarButton";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  return (
    <div className={`h-screen overflow-x-hidden`}>
      <SidebarButton />
      {children}
      <Footer />
    </div>
  );
};

export default CombinedLayout;
