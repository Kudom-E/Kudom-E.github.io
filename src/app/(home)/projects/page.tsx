import Image from "next/image";
import React from "react";
import project_pic from "@/../public/project.jpeg";
import Link from "next/link";
import { homedir } from "os";

type Props = {};

export const projectlist = [
  {
    name: "St. Luke Cardiac Clinic",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
    ],
    role: "Web Developer",
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    link: "flightlocal3",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "Movie Scheduler",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
    ],
    role: "Web Developer",
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    link: "flightlocal3",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "Insomniac Night",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
    ],
    role: "Web Developer",
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    link: "flightlocal3",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "African Pharmaceutical Symposium",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
    ],
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    role: "Web Developer",
    link: "afps",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "ZroVerse",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
      {
        name: "speakers",
        route: "/afps/team_page.png",
      },
      {
        name: "about",
        route: "/afps/team_page.png",
      },
      {
        name: "resources",
        route: "/afps/team_page.png",
      },
      {
        name: "faq",
        route: "/afps/team_page.png",
      },
    ],
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    role: "Web Developer",
    link: "flightlocal1",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "KACE Alumni Platform",
    image: project_pic,
    image_routes: [
      {
        name: "home",
        route: "/afps/home_page.png",
      },
      {
        name: "events",
        route: "/afps/events_page.png",
      },
      {
        name: "team",
        route: "/afps/team_page.png",
      },
    ],
    tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
    role: "Web Developer",
    link: "flightlocal2",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
];

const Projects = (props: Props) => {
  return (
    <section className="pt-20">
      <div className="text-center">
        <h1>My Projects</h1>
        <p className="w-[40rem] max-w-[100%] mx-auto">
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React SPA and PWA. Collaborated in 140+ projects with 50+
          clients all around the world. I am also interested in data analytics
          and visualization.
        </p>
      </div>
      <div className="grid grid-cols-3 p-20 gap-8">
        {projectlist.map((project, index) => {
          return (
            <div
              key={index}
              // className={`${index === 0 ? `col-span-2 row-span-2` : ``}`}
            >
              <div className="project-card rounded-[6px] cursor-pointer">
                <div className="image-holder rounded-t-[6px] relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt="project image"
                    fill
                    className="object-cover rounded-t-[6px] transition-all duration-500"
                  />
                </div>
                <div className="p-[4vh] bg-[rgba(var(--secondary-color-rgb),1)] rounded-b-[6px]">
                  <h3>{project.name}</h3>
                  <div className="overflow-hidden h-[24px]">
                    <div className="relative project-info transition-all duration-500">
                      <div className="project-stack opacity-50">
                        <p>{project.tools}</p>
                      </div>
                      <div className="project-link opacity-0">
                        <Link href={`/projects/${project.link}`}>
                          Show project ------
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
