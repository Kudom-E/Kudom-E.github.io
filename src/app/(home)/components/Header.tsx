"use client";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

// type Props = {};

export const routes = [
  { name: "Home", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "Contact", route: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    // removed background blur
    <header className="px-[5%] w-[100%] max-w-[120rem] mx-auto">
      <div className="p-5 flex justify-between items-center relative">
        <div className="h-[3rem] w-[6rem]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center">
            {routes.map((route, index) => {
              return (
                <li key={index} className="p-3 hover:translate-y-[-2px]">
                  <Link
                    href={route.route}
                    className={
                      pathname === route.route
                        ? "text-[rgba(var(--primary-color-rgb),1)]"
                        : "hover:text-[rgba(var(--primary-color-rgb),1)]"
                    }
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="justify-center items-center gap-4 h-[3rem] hidden md:flex">
          <button className="h-full px-8 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
            <Link href="/">something</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;