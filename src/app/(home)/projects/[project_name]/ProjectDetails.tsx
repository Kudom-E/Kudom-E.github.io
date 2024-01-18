"use client";

import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projectdeets:
    | {
        name: string;
        image: any;
        image_routes: { name: string; route: string }[];
        role: string;
        tools: string;
        link: string;
        summary: string;
      }
    | undefined;
};

const ProjectDetails = ({ projectdeets }: Props) => {
  const [page, setPage] = useState(0);

  return (
    <section className="px-[5%] w-[100%] max-w-[120rem] mx-auto relative">
      <div className="absolute">
        <Link href="/projects">
          <button className="rounded-full border-2 hover:border-4 border-[rgba(var(--secondary-color-rgb),1)] w-[3rem] aspect-square flex justify-center items-center">
            <BsArrowLeftShort className="" />
          </button>
        </Link>
      </div>
      <div className="p-5 pt-[5rem]">
        <section className="flex gap-20">
          <div className="max-w-[40rem]">
            <div>
              <h4 className="text-sm opacity-50">{projectdeets?.role}</h4>
              <h1 className="leading-[2rem] md:leading-[6rem] text-4xl md:text-8xl">
                {projectdeets?.name}
              </h1>
            </div>
            <div className="pt-10 pb-3">
              <span className="text-[rgba(var(--primary-color-rgb),1)]">
                {projectdeets?.tools}
              </span>
            </div>
            <div>
              <p className="opacity-80">{projectdeets?.summary}</p>
            </div>
          </div>
          {/* home image */}
          <div className="relative w-full">
            <Image
              src={projectdeets?.image}
              alt="project main image"
              fill
              className="object-contain opacity-[20%] rounded-t-[6px] transition-all duration-500 w-full h-full"
            />
          </div>
        </section>
        {/* image */}
        <div className="w-full">
          <div className="pt-28 pb-5 flex gap-20">
            <p className="opacity-[50%] md:ml-auto">{`Sample Routes ->`}</p>
            <ul className="flex flex-wrap gap-4 w-fit">
              {projectdeets?.image_routes.map((pageImage, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                      page === index
                        ? "text-[rgba(var(--primary-color-rgb),1)]"
                        : ""
                    }`}
                    onClick={() => setPage(index)}
                  >
                    {pageImage.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full relative">
            <Image
              src={
                projectdeets === undefined
                  ? ""
                  : projectdeets.image_routes !== undefined
                  ? projectdeets.image_routes[page].route
                  : ""
              }
              className="w-full h-full border-2 border-[rgba(var(--primary-color-rgb),1)]"
              alt="Project Image"
              width={3360}
              height={13494}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
