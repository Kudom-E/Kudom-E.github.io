import Image from "next/image";
import React from "react";
import project_pic from "@/../public/project.jpeg";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <section className="pt-40">
      <div className="text-center">
        <h2>My Projects</h2>
        <p className="w-[40rem] max-w-[100%] mx-auto">
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React SPA and PWA. Collaborated in 140+ projects with 50+
          clients all around the world. I am also interested in data analytics
          and visualization.
        </p>
      </div>
      <div className="grid grid-cols-3 py-20 gap-8">
        {[1, 2, 3, 4].map((project, index) => {
          return (
            <div key={index}>
              <div className="project-card rounded-[6px] cursor-pointer">
                <div className="image-holder rounded-t-[6px]">
                  <Image
                    src={project_pic}
                    alt="project image"
                    width={380}
                    height={380}
                    className="object-cover rounded-t-[6px] transition-all duration-500"
                  />
                </div>
                <div className="p-[4vh] bg-[rgba(var(--secondary-color-rgb),1)] rounded-b-[6px]">
                  <h3>Flight Local</h3>
                  <div className="overflow-hidden h-[24px]">
                    <div className="relative project-info transition-all duration-500">
                      <div className="project-stack opacity-50">
                        <p>Frontend Development</p>
                      </div>
                      <div className="project-link opacity-0">
                        <p className="hover">Show project ------</p>
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

export default ProjectSection;
