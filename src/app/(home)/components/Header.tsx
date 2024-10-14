"use client";

import React from "react";
// import Logo from "./Logo";

type Props = {
  InfoSec: React.RefObject<HTMLDivElement>;
  AbtSec: React.RefObject<HTMLDivElement>;
  StkSec: React.RefObject<HTMLDivElement>;
  ConSec: React.RefObject<HTMLDivElement>;
  ProjSec: React.RefObject<HTMLDivElement>;
  activeSec: string | null;
};

const Header = ({
  InfoSec,
  AbtSec,
  StkSec,
  ConSec,
  ProjSec,
  activeSec,
}: Props) => {
  const routes = [
    { name: "Home", ref: InfoSec },
    { name: "About", ref: AbtSec },
    { name: "Stack", ref: StkSec },
    { name: "Projects", ref: ProjSec },
    { name: "Contact", ref: ConSec },
  ];

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("not scrolling");
    }
  };

  return (
    // removed background blur
    <header className="w-[100%] mx-auto fixed top-0 z-[1000] hidden md:block">
      <div className="py-[1.5rem] backdrop-blur-md">
        {/* <div className="h-[2rem] w-[6rem]">
          <Link href="/" className="h-full w-full">
            <Logo />
          </Link>
        </div> */}
        <div className="hidden md:block">
          <ul className="flex relative items-center bg-white p-[.25rem] rounded-full w-fit mx-auto shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)]">
            <div
              className={`absolute left-0 top-0 h-full rounded-full p-[.25rem] w-fit transition-transform duration-150 ease-linear will-change-transform ${
                activeSec === "Home"
                  ? "translate-x-0"
                  : activeSec === "About"
                  ? "translate-x-[76px]"
                  : activeSec === "Stack"
                  ? "translate-x-[153.06px]"
                  : activeSec === "Projects"
                  ? "translate-x-[223.37px]"
                  : activeSec === "Contact"
                  ? "translate-x-[312.95px]"
                  : "translate-x-0"
              }`}
            >
              <div className="w-fit bg-[rgba(var(--primary-green-rgb),1)] py-[.5rem] px-[1rem] text-transparent h-full rounded-full">
                {activeSec || "Home"}
              </div>
            </div>
            {routes.map((route, index) => {
              return (
                <li
                  key={index}
                  className="relative py-[.5rem] px-[1rem] cursor-pointer"
                  onClick={() => handleScrollToSection(route.ref)}
                >
                  <div
                    className={`font-sans font-medium ${
                      activeSec === route.name
                        ? "text-white"
                        : activeSec === null && route.name === "Home"
                        ? "text-white"
                        : "hover:animate-bounce text-black opacity-70"
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
