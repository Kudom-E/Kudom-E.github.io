"use client";

import React from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  return (
    <div className={`h-screen overflow-x-hidden`}>
      {children}
      <Footer />
    </div>
  );
};

export default CombinedLayout;
