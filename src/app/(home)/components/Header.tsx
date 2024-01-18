"use client";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

// type Props = {};

export const routes = [
  { name: "Home", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "Collaboration", route: "/collaboration" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    // removed background blur
    <header className="px-[5%] w-[100%] max-w-[120rem] mx-auto">
      <div className="p-5 flex justify-between items-center relative">
        <div className="h-[2rem] w-[6rem]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center">
            {routes.map((route, index) => {
              return (
                <li key={index} className="px-3">
                  <Link
                    href={route.route}
                    className={
                      pathname === route.route
                        ? "text-[rgba(var(--accent-color-rgb),1)]"
                        : "hover:text-[rgba(var(--accent-color-rgb),1)] "
                    }
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="justify-center items-center gap-4 h-[2rem] hidden md:flex">
          <button className="h-full px-6 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
