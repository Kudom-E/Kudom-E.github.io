"use client";

import React from "react";
// import Logo from "./Logo";
import { usePathname } from "next/navigation";

type Props = {
  InfoSec: React.RefObject<HTMLDivElement>;
  AbtSec: React.RefObject<HTMLDivElement>;
  StkSec: React.RefObject<HTMLDivElement>;
  SerSec: React.RefObject<HTMLDivElement>;
  ProjSec: React.RefObject<HTMLDivElement>;
};

const Header = ({ InfoSec, AbtSec, StkSec, SerSec, ProjSec }: Props) => {
  const pathname = usePathname();

  const routes = [
    { name: "Home", route: "/" },
    { name: "About", route: "/#About" },
    { name: "Stack", route: "/#Stack" },
    { name: "Services", route: "/#Services" },
    { name: "Projects", route: "/#Projects" },
  ];

  const handleScrollToSection = (
    ref: React.RefObject<HTMLDivElement> | undefined
  ) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Ref is undefined or null");
    }
  };

  return (
    // removed background blur
    <header className="w-[100%] mx-auto fixed top-0 z-[1000]">
      <div className="py-[1.5rem] backdrop-blur-md">
        {/* <div className="h-[2rem] w-[6rem]">
          <Link href="/" className="h-full w-full">
            <Logo />
          </Link>
        </div> */}
        <div className="hidden md:block">
          <ul className="flex relative items-center bg-white p-[.25rem] rounded-full w-fit mx-auto shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 left-0 h-full rounded-full p-[.25rem] w-fit">
              <div className="w-fit bg-[rgba(var(--primary-green-rgb),1)] py-[.5rem] px-[1rem] text-transparent h-full rounded-full">
                Home
              </div>
            </div>
            {routes.map((route, index) => {
              return (
                <li
                  key={index}
                  className="relative py-[.5rem] px-[1rem] cursor-pointer"
                >
                  <div
                    className={`font-sans font-medium ${
                      pathname === route.route
                        ? "text-white"
                        : "hover:text-[rgba(var(--accent-color-rgb),1)] text-black opacity-70"
                    }`}
                  >
                    {route.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="justify-center items-center gap-4 h-[2rem] hidden md:flex">
          <button className="h-full px-6 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
            <Link href="/contact">Contact</Link>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
