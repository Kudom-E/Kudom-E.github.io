import React from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { IoIosInformationCircleOutline } from "react-icons/io";
// import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import Image from "next/image";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  InfoSec: React.RefObject<HTMLDivElement>;
  AbtSec: React.RefObject<HTMLDivElement>;
  StkSec: React.RefObject<HTMLDivElement>;
  ConSec: React.RefObject<HTMLDivElement>;
  ProjSec: React.RefObject<HTMLDivElement>;
  activeSec: string | null;
};

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  InfoSec,
  AbtSec,
  StkSec,
  ConSec,
  ProjSec,
  activeSec,
}: Props) => {
  const tabs = [
    {
      pathname: "Home",
      icon: <AiOutlineHome />,
      ref: InfoSec,
    },
    {
      pathname: "About",
      icon: <IoIosInformationCircleOutline />,
      ref: AbtSec,
    },
    {
      pathname: "Stack",
      icon: <GiSkills />,
      ref: StkSec,
    },
    {
      pathname: "Projects",
      icon: <GoProjectRoadmap />,
      ref: ProjSec,
    },
    {
      pathname: "Contact",
      icon: <GrContactInfo />,
      ref: ConSec,
    },
  ];

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("not scrolling");
    }
  };

  const navigateAround = (ref: React.RefObject<HTMLDivElement>) => {
    handleScrollToSection(ref);
    setSidebarOpen(false);
  };

  return (
    <div
      className={`h-screen bg-white min-w-[60%] transition-all duration-300 fixed ${
        sidebarOpen ? "right-0" : "right-[-100%]"
      } top-0 bottom-0 z-[99]`}
    >
      <div className="p-4 pb-0 flex items-center justify-end">
        <button
          className="hover:text-red-500 transition-all duration-300 rotate-180 p-[1rem]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <BiArrowBack className="w-[2rem] h-[1rem] text-black" />
        </button>
      </div>
      <div className="">
        <Link
          href="/"
          className="min-w-[5rem] mx-auto block"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="h-[4rem] w-[8rem] mx-auto">
            <Image
              src={"/e-logo.svg"}
              width={1935}
              height={1271}
              className="w-full h-full"
              alt="my logo"
            />
          </div>
        </Link>
      </div>
      <div className="pt-8">
        <ul className="flex flex-col justify-between">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className="mb-4">
                <div
                  className={`flex items-center font-semibold gap-5 text-black px-5 py-3 hover:text-[rgba(var(--primary-green-rgb))] ${
                    activeSec === tab.pathname ? "active-link" : ""
                  }`}
                  onClick={() => navigateAround(tab.ref)}
                >
                  {tab.icon}
                  <p>{tab.pathname}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
