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
        live: string;
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
      <div className="absolute top-[1rem]">
        <Link href="/">
          <button className="rounded-full border-2 text-black hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)] px-[1.5rem] py-[.75rem] flex justify-center items-center">
            <BsArrowLeftShort className="w-[1.5rem] h-[1.5rem]" /> Back to Home
          </button>
        </Link>
      </div>
      <div className="p-5 pt-[5rem]">
        <section className="flex gap-20">
          <div className="max-w-[40rem]">
            <div>
              <h4 className="text-sm opacity-50 text-black">
                {projectdeets?.role}
              </h4>
              <h1 className="leading-[2rem] md:leading-[6rem] text-4xl md:text-8xl text-black">
                {projectdeets?.name}
              </h1>
            </div>
            <div className="pt-10 pb-3">
              <span className="text-[rgba(var(--primary-color-rgb),1)]">
                {projectdeets?.tools}
              </span>
            </div>
            <div>
              <p className="opacity-80 text-black/80 text-base">
                {projectdeets?.summary}
              </p>
            </div>
            <div className="flex items-center pt-[1rem] gap-4">
              <a
                href={
                  projectdeets?.live !== "No Longer Live" &&
                  projectdeets?.live !== "Coming Soon"
                    ? projectdeets?.live
                    : "/"
                }
                className={`${
                  projectdeets?.live === "No Longer Live" ||
                  projectdeets?.live === "Coming Soon"
                    ? "bg-red-500  cursor-not-allowed"
                    : "bg-blue-400"
                } py-[1rem] px-[3rem] rounded-[3rem] w-fit`}
              >
                <span className="text-sm font-semibold">
                  {projectdeets?.live !== "No Longer Live" &&
                  projectdeets?.live !== "Coming Soon"
                    ? "Live"
                    : projectdeets?.live}
                </span>
              </a>
              <div className="w-fit">
                <Link href={`/projects/${projectdeets?.link}/details`}>
                  <span className="text-black/50 underline font-semibold hover:text-[rgba(var(--primary-green-rgb),1)] text-base">
                    More info
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* home image */}
          <div className="relative w-full hidden lg:block">
            <Image
              src={projectdeets?.image.view}
              alt="project main image"
              fill
              className="object-contain opacity-[50%] rounded-t-[6px] transition-all duration-500 w-full h-full"
            />
          </div>
        </section>
        {/* image */}
        <div className="w-full">
          <div className="pt-20 pb-5 flex gap-2 flex-col justify-end">
            <p className="opacity-[50%] text-black/50 text-base">{`Sample Routes`}</p>
            <ul className="flex flex-wrap gap-4 w-fit">
              {projectdeets?.image_routes.map((pageImage, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer hover:text-[rgba(var(--primary-green-rgb),1)] ${
                      page === index
                        ? "text-[rgba(var(--primary-green-rgb),1)]"
                        : "text-black"
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
