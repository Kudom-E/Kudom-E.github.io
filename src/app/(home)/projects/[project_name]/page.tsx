import React from "react";
import { projectlist } from "../data";
import ProjectDetails from "./ProjectDetails";

export async function generateStaticParams() {
  // const paths = (projectlist || []).map((project) => ({
  //   params: { project_name: project.link },
  // }));

  return [
    { project_name: "flightlocal3" },
    { project_name: "flightlocal3" },
    { project_name: "flightlocal3" },
    { project_name: "afps" },
    { project_name: "flightlocal1" },
    { project_name: "flightlocal2" },
  ];
}

const Project = ({ params }: { params: { project_name: string } }) => {
  const ProjectDetail = projectlist.find(
    (obj) => obj.link === params.project_name
  );

  return (
    <>
      <ProjectDetails projectdeets={ProjectDetail} />
    </>
  );
};

export default Project;
