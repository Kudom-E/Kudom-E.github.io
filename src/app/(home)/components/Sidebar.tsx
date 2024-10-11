import React from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
// import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { BsProjector } from "react-icons/bs";
import { PiHandshake } from "react-icons/pi";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const pathname = usePathname();

  const tabs = [
    {
      pathname: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      pathname: "Projects",
      path: "/projects",
      icon: <BsProjector />,
    },
    {
      pathname: "Collaboration",
      path: "/collaboration",
      icon: <PiHandshake />,
    },
    {
      pathname: "Contact",
      path: "/contact",
      icon: <GrContactInfo />,
    },
  ];
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
          <BiArrowBack className="w-[2rem] h-[2rem] text-black" />
        </button>
      </div>
      <div className="p-5">
        <Link
          href="/"
          className="w-[8vw] min-w-[5rem] mx-auto block"
          onClick={() => setSidebarOpen(false)}
        >
          <Logo />
        </Link>
      </div>
      <div className="pt-10">
        <ul className="flex flex-col justify-between">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className="mb-4">
                <Link
                  className={`flex items-center font-semibold gap-5 text-black px-5 py-3 hover:text-[rgba(var(--primary-green-rgb))] ${
                    pathname === tab.path ? "active-link" : ""
                  }`}
                  href={tab.path}
                  onClick={() => setSidebarOpen(false)}
                >
                  {tab.icon}
                  <p>{tab.pathname}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
