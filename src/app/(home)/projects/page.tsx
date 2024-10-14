import Image from "next/image";
import React from "react";
// import project_pic from "@/../public/project.jpeg";
import Link from "next/link";
// import { homedir } from "os";
import { projectlist } from "./data";

const Projects = () => {
  return (
    <section className="md:pt-12 relative">
      <div>
        <Image
          src="/Jig.jpg"
          alt="puzzle bg"
          className="absolute top-0 left-0 w-full h-full z-[-1] opacity-[0.05] object-cover"
          width={3648}
          height={2736}
        />
        <div className="text-center">
          <h1>My Projects</h1>
          <p className="w-[40rem] max-w-[100%] mx-auto">
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 sm:p-10 md:p-15 lg:p-20 gap-8">
          {projectlist.map((project, index) => {
            return (
              <Link key={index} href={`/projects/${project.link}`} className="">
                <div
                  // className={`${index === 0 ? `col-span-2 row-span-2` : ``}`}
                  className="h-full"
                >
                  <div className="project-card rounded-[6px] cursor-pointer h-full flex flex-col border-[1px] border-[rgba(var(--primary-color-rgb),1)]">
                    <div className="image-holder rounded-t-[6px] relative aspect-[4/3]">
                      <Image
                        src={project.image.desktop}
                        alt="project image"
                        fill
                        className="object-cover rounded-t-[6px] transition-all duration-500"
                      />
                    </div>
                    <div className="p-[4vh] bg-[rgba(var(--primary-color-rgb),.6)] rounded-b-[5px] flex-grow">
                      <h3>{project.name}</h3>
                      <div className="overflow-hidden h-[24px]">
                        <div className="relative project-info transition-all duration-500">
                          <div className="project-stack opacity-50">
                            <p>{project.tools}</p>
                          </div>
                          <div className="project-link opacity-0">
                            Show project ------
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
