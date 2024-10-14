import { projects } from "@/(home)/(home)/sections/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  currentProject: string;
};

const Others = ({ currentProject }: Props) => {
  return (
    <section>
      <div className="text-black pt-[5rem]">
        <h2 className="font-semibold text-center pt-[5rem]">Other Projects</h2>
      </div>
      <div className="flex flex-wrap gap-12 justify-around pt-[3rem] max-w-[80rem] mx-auto items-center pb-[5rem]">
        {projects.map((project, index) => {
          return (
            project.short !== currentProject && (
              <div key={index} className="project-card max-w-[38rem]">
                <div className="text-black p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]">
                  <Link href={project.link}>
                    <div className="bg-white rounded-[1.5rem] text-3xl font-semibold overflow-hidden">
                      <div className="h-[15rem] md:h-[20rem] mx-auto hover:scale-110 hover:opacity-50 transition-transform cursor-pointer">
                        <Image
                          src={project.image}
                          alt="puzzle bg"
                          className={`w-full h-full object-cover rounded-[1.5rem]`}
                          width={3648}
                          height={2736}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="mt-[.5rem] pl-[1.5rem] text-black">
                  <h6>{project.year}</h6>
                  <h4 className="text-[2rem] font-semibold">{project.name}</h4>
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default Others;
