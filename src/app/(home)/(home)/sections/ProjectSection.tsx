import Image from "next/image";
import React from "react";
import { projects } from "./Data";

const ProjectSection = () => {
  return (
    <section>
      <div className="py-[5rem] relative">
        <div className="absolute bottom-0 right-0 w-[10rem] z-[99] hidden md:block">
          <Image
            src="pieces/puzzle-1020410_1920.jpg"
            alt="puzzle bg"
            className="w-full h-full object-cover"
            width={1920}
            height={1920}
          />
        </div>
        <div className="text-center text-black px-[1rem]">
          <h2 className="font-semibold">Projects</h2>
          <p className="w-[40rem] max-w-[100%] mx-auto font-semibold">
            Explore a selection of projects showcasing my experience tackling a
            wide range of challenges across various domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[5rem] gap-8 max-w-[80rem] mx-auto items-center">
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-card mx-auto h-full">
                <div className="text-black p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]">
                  <div className="bg-white rounded-[1.5rem] text-3xl font-semibold overflow-hidden">
                    <div className="w-full h-[20rem] md:h-[28rem] mx-auto hover:scale-110 hover:opacity-50 transition-transform cursor-pointer">
                      <Image
                        src={project.image}
                        alt="puzzle bg"
                        className={`w-full h-full object-cover rounded-[1.5rem]`}
                        width={3648}
                        height={2736}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[1.5rem] pl-[1.5rem] text-black">
                  <h6>{project.year}</h6>
                  <h4>{project.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
