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
        <div className="max-w-[40rem]">
          <div>
            <h4 className="text-sm opacity-50">{projectdeets?.role}</h4>
            <h1 className="leading-[2rem] md:leading-[6rem] text-4xl md:text-8xl">
              {projectdeets?.name}
            </h1>
          </div>
          <div className="py-16 opacity-50">
            <span>{projectdeets?.tools}</span>
          </div>
          <div>
            <p className="opacity-50">
              Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In
              aute veniam irure aliquip reprehenderit tempor. Anim laboris
              reprehenderit proident quis cillum cillum adipisicing ullamco
              cillum proident reprehenderit. Culpa duis elit cillum labore
              cupidatat mollit proident mollit. In aute veniam irure aliquip
              reprehenderit tempor. Anim laboris reprehenderit proident quis
              cillum cillum adipisicing ullamco cillum proident reprehenderit.
              Culpa duis elit cillum labore cupidatat mollit proident mollit.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="w-full">
          <div className="pt-28 pb-5">
            <ul className="flex flex-wrap gap-4 w-fit md:ml-auto">
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 0 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(0)}
              >
                Home
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 1 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(1)}
              >
                Events
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 2 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(2)}
              >
                Meet the Team
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 3 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(3)}
              >
                Speakers
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 4 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(4)}
              >
                About
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 5 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(5)}
              >
                Resources
              </li>
              <li
                className={`cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] ${
                  page === 6 ? "text-[rgba(var(--primary-color-rgb),1)]" : ""
                }`}
                onClick={() => setPage(6)}
              >
                FAQ
              </li>
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
