import React from "react";
import ContinualTypings from "../components/ContinualTypings";
import Image from "next/image";

type Props = {};

const IntroSection = (props: Props) => {
  const names = [
    "Emmanuel!",
    "Kudom!",
    "Agyemang!",
    "Kudom-Agyemang!",
    "Emmanuel Kudom-Agyemang!",
  ];

  return (
    <section>
      <div className="h-[100vh] relative overflow-y-visible">
        <div className="absolute top-0 left-0 w-[20rem] lg:top-[-5rem] lg:w-[50rem]">
          <Image
            src="pieces/puzzle-1020409_1920.jpg"
            alt="puzzle bg"
            className="w-full h-full opacity-[0.05] object-cover"
            width={1920}
            height={1920}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[20rem] lg:top-[-5rem] lg:w-[50rem]">
          <Image
            src="pieces/puzzle-1020012_1920.jpg"
            alt="puzzle bg"
            className="w-full h-full opacity-[0.05] object-cover -scale-x-100"
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
        <div className="px-[5%] max-w-[120rem] mx-auto h-full">
          <section className="flex flex-col items-center justify-center h-full">
            <div>
              <div className=" text-center mx-auto">
                <span className="text-black flex flex-col font-semibold text-center whitespace-break-spaces">
                  {`Hi, I am `}{" "}
                  <strong className="font-bold">
                    <ContinualTypings text={names} speed={150} />
                  </strong>
                </span>
              </div>
              <h3 className="text-center pt-[.5rem] text-[1.5rem] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2rem] text-[rgba(var(--primary-green-rgb),1)]">
                Software Engineer
              </h3>
              <h4
                className="px-3 py-5 lg:px-5 text-center"
                data-testid="sub-header"
              >
                <span className="text-black/80 whitespace-pre-line text-wrap font-semibold">
                  {`Navigating the Digital Landscape: Piecing Together
                Innovative Solutions, One Code Puzzle at a Time.`}
                </span>
              </h4>
            </div>
            <div className="flex justify-center flex-grow-0 text-2xl">
              <div className="text-black font-semibold bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur p-[.5rem] rounded-[2rem] hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)] w-fit">
                <button className="bg-white rounded-[1.5rem] px-[2rem] py-[1rem] w-fit">
                  Let's Work
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
