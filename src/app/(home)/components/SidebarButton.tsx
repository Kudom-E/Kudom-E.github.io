"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  InfoSec: React.RefObject<HTMLDivElement>;
  AbtSec: React.RefObject<HTMLDivElement>;
  StkSec: React.RefObject<HTMLDivElement>;
  ConSec: React.RefObject<HTMLDivElement>;
  ProjSec: React.RefObject<HTMLDivElement>;
  activeSec: string | null;
};

const SidebarButton = ({
  InfoSec,
  AbtSec,
  StkSec,
  ConSec,
  ProjSec,
  activeSec,
}: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <div
      className={`md:hidden absolute backdrop-blur-md left-0 right-0 pr-5 z-[999] top-0 h-[calc(2.5rem+48px)] flex items-center overflow-x-clip ${
        currentPath !== "/" ? "hidden" : ""
      }`}
    >
      <div className="flex-grow">
        <div className="h-[4rem] w-[8rem] pl-[1rem]">
          <Image
            src={"/e-logo.svg"}
            width={1935}
            height={1271}
            className="w-full h-full"
            alt="my logo"
          />
        </div>
      </div>
      <div>
        <button
          className="h-[3rem] aspect-square bg-[rgba(var(--primary-green-rgb),1)] rounded-[6px] block md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <HiMenuAlt3 className="mx-auto w-5 h-5 text-white" />
        </button>
      </div>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        InfoSec={InfoSec}
        AbtSec={AbtSec}
        StkSec={StkSec}
        ConSec={ConSec}
        ProjSec={ProjSec}
        activeSec={activeSec}
      />
    </div>
  );
};

export default SidebarButton;
