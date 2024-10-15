import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="h-[400vh] bg-white relative">
      <div className="flex flex-col top-[5rem] md:top-[15rem] lg:top-[20rem] xl:top-[15rem] md:flex-row justify-around sticky about-pieces">
        <div className="w-[30rem]">
          <Image
            src="pieces/puzzle-1020407_1920.jpg"
            alt="puzzle bg"
            className="w-full h-full object-cover opacity-[0.05]"
            width={1920}
            height={1920}
          />
        </div>
        <div className="w-[30rem]">
          <Image
            src="pieces/puzzle-1020411_1920.jpg"
            alt="puzzle bg"
            className="w-full h-full object-cover -scale-x-100 opacity-[0.05]"
            width={1920}
            height={1920}
          />
        </div>
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
      <div className="sticky text-black font-semibold text-center pt-[5rem] md:pt-[10rem] top-0 bottom-0 h-[100vh] about-head">
        <h2>About Me</h2>
      </div>

      <div className="absolute h-full top-0 left-0 right-0 flex flex-col justify-start items-center text-base max-w-[60rem] mx-auto px-[2rem]">
        <div className="h-[100vh] flex items-center sticky top-[1rem]">
          <div className="text-black p-[1rem] md:p-[2rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[2rem] md:rounded-[3rem]">
            <div className="bg-white p-[1rem] md:p-[3rem] rounded-[1.5rem] min-h-[10rem]">{`Greetings again! I'm Emmanuel. I take great joy in the creative process. For me, it’s not just about coding—it’s about the excitement of building something that’s both beautiful and effortless to use; turning concepts into experiences people love.`}</div>
          </div>
        </div>
        <div className="h-[100vh] flex items-center sticky top-[1rem]">
          <div className="text-black p-[1rem] md:p-[2rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[2rem] md:rounded-[3rem]">
            <div className="bg-white p-[1rem] md:p-[3rem] rounded-[1.5rem] min-h-[10rem]">{`My journey in engineering and development began with a robust foundation in design principles, meticulously built through years of extensive formal education. My background has aided in my ability to create engaging and user-centered software solutions.`}</div>
          </div>
        </div>
        <div className="h-[100vh] flex items-center sticky top-[1rem]">
          <div className="text-black p-[1rem] md:p-[2rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[2rem] md:rounded-[3rem]">
            <div className="bg-white p-[1rem] md:p-[3rem] rounded-[1.5rem] min-h-[10rem]">
              {`I am a reflection of the dynamic nature of modern software engineering.  I’m always equipped to deliver high-quality solutions. I thrive on pushing boundaries and I constantly explore new technologies and trends to ensure my work stays innovative and impactful.`}
            </div>
          </div>
        </div>

        <div className="h-[100vh] flex items-center sticky top-0">
          <div className="text-black/80 font-semibold bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur p-[.5rem] mt-[30rem] rounded-[2rem] hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)]">
            <Link
              href="/Resume_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white rounded-[1.5rem] px-[2rem] py-[1rem] w-fit">
                Read My Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
