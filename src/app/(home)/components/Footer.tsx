import Link from "next/link";
import React from "react";

// type Props = {};

const Footer = () => {
  return (
    <footer className="pt-[3rem] relative">
      <div className="px-[5%] py-[3rem] lg:py-0 max-w-[120rem]">
        <div className="flex justify-between flex-wrap items-start">
          <div className="flex flex-col">
            <div className="max-w-[25rem] flex-grow text-black">
              Passionate about crafting digital experiences, I am an engineer
              with a keen eye for detail and a love for problem-solving. My
              journey in the world of technology is a continuous exploration of
              new possibilities and a commitment to turning complex puzzles into
              elegant solutions.
            </div>
            <div className="opacity-50 text-xs mt-[2rem] mb-[1rem] text-black">
              © Emmanuel Kudom-Agyemang. All rights reserved 2024
            </div>
          </div>
          <div>
            <ul className="flex gap-5 md:flex-col text-black">
              <li>
                <Link
                  href={"https://github.com/Kudom-E"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-[rgba(var(--accent-color-rgb),1)]"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.linkedin.com/in/emmanuel-kudom-agyemang-b93a4117a/"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-[rgba(var(--accent-color-rgb),1)]"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={"mailto:emmanuelkudomagyemang@gmail.com"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-[rgba(var(--accent-color-rgb),1)]"
                >
                  Gmail
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
