import Image from "next/image";
import React from "react";

// type Props = {};

const Footer = () => {
  return (
    <footer className="pt-[3rem] relative">
      <div className="px-[5%] py-[3rem] lg:py-0 max-w-[120rem]">
        <div className="flex justify-between flex-wrap items-start">
          <div className="flex flex-col">
            <div className="max-w-[25rem] flex-grow">
              Passionate about crafting digital experiences, I am a developer
              with a keen eye for detail and a love for puzzles and
              problem-solving, I thrive on creating seamless and user-friendly
              applications. My journey in the world of technology is a
              continuous exploration of new possibilities and a commitment to
              turning complex puzzles into elegant solutions.
            </div>
            <div className="opacity-50 text-xs mt-[2rem] mb-[1rem]">
              © Emmanuel Kudom-Agyemang. All rights reserved 2023
            </div>
          </div>
          <div>
            <ul className="flex gap-5 md:flex-col">
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Gmail</li>
              <li>Emm.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
