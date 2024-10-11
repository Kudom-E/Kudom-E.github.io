import React from "react";
import { stackLogos } from "./Data";
import Image from "next/image";

type Props = {};

const StackSection = (props: Props) => {
  return (
    <div className="h-[380vh] md:h-[300vh] relative">
      <div className="w-[30rem] md:w-[60rem] sticky top-0 left-0 right-0 mx-auto z-[-1]">
        <Image
          src="pieces/puzzle-1020409_1920.jpg"
          alt="puzzle bg"
          className="w-full h-full object-cover opacity-[0.1]"
          width={1920}
          height={1920}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[10rem] z-[99] hidden md:block">
        <Image
          src="pieces/puzzle-1020410_1920.jpg"
          alt="puzzle bg"
          className="w-full h-full object-cover"
          width={1920}
          height={1920}
        />
      </div>
      <section className="max-w-[80rem] mx-auto absolute top-0 left-0 right-0">
        <div className="text-black font-semibold text-center pt-[5rem]">
          <h2>My Stack</h2>
        </div>
        <div className="mt-[5rem] flex gap-4 md:gap-8 flex-wrap justify-center">
          {stackLogos.map((logo, index) => {
            return (
              <div
                className="text-black flex-shrink-0 p-[1rem] md:p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]"
                key={index}
              >
                <div className="bg-white stack-card py-[2rem] md:py-[4rem] rounded-[1.5rem] text-3xl font-semibold">
                  <div className="w-[3rem] md:w-[5rem] md:h-[5rem] h-[3rem] mx-auto">
                    <Image
                      src={logo.logo}
                      alt="puzzle bg"
                      className={`w-full h-full ${
                        logo.name === "Node" ||
                        logo.name === "AWS" ||
                        logo.name === "GCP" ||
                        logo.name === "Sanity" ||
                        logo.name === "SASS"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                      width={3648}
                      height={2736}
                    />
                  </div>
                  <div className="mt-[1.5rem] text-center text-sm">
                    {logo.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default StackSection;
