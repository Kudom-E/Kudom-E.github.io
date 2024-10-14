import React from "react";
import { projectlist } from "../../data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Information from "./sections/Information";
import Others from "./sections/Others";

export async function generateStaticParams() {
  return [
    { project_name: "stluke" },
    { project_name: "afps" },
    { project_name: "scheduler" },
    { project_name: "zroverse" },
    { project_name: "aiti" },
  ];
}

const ProjectExtraDetails = ({
  params,
}: {
  params: { project_name: string };
}) => {
  const ProjectDetail = projectlist.find(
    (obj) => obj.link === params.project_name
  );

  if (!ProjectDetail) {
    return <div className="text-black">Project not found.</div>;
  }

  return (
    <section>
      <div className="relative">
        <div className="absolute top-[3rem] left-[3rem]">
          <Link href={`/projects/${params.project_name}`}>
            <button className="rounded-3xl border-2 hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)] text-black/60 font-semibold flex px-[1.5rem] py-[.75rem] items-center ">
              <BsArrowLeftShort className=" w-[1.5rem] h-[1.5rem]" />
              Back to Summary
            </button>
          </Link>
        </div>
        <div className="text-black pt-[8rem]">
          <h2 className="font-semibold text-center px-[1rem]">
            {ProjectDetail.name}
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-[5rem] px-[1.5rem]">
            <div className="w-[35rem]">
              <div className="p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]">
                <div className="w-full h-[15rem] md:h-[20rem] mx-auto">
                  <Image
                    src={ProjectDetail.image.desktop}
                    alt="puzzle bg"
                    className={`w-full h-full object-cover rounded-[1.5rem]`}
                    width={3648}
                    height={2736}
                  />
                </div>
              </div>
            </div>
            <div className="w-[35rem]">
              <div className="p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]">
                <div className="w-full h-[15rem] md:h-[20rem] mx-auto">
                  <Image
                    src={ProjectDetail.image.tab}
                    alt="puzzle bg"
                    className={`w-full h-full object-cover rounded-[1.5rem]`}
                    width={3648}
                    height={2736}
                  />
                </div>
              </div>
            </div>
            <div className="w-[35rem]">
              <div className="p-[1.5rem] bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur rounded-[3rem]">
                <div className="w-full h-[15rem] md:h-[20rem] mx-auto">
                  <Image
                    src={ProjectDetail.image.mobile}
                    alt="puzzle bg"
                    className={`w-full h-full object-cover rounded-[1.5rem]`}
                    width={3648}
                    height={2736}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <Information currentProject={params.project_name} />
        </>
        <>
          <Others currentProject={params.project_name} />
        </>
      </div>
    </section>
  );
};
export default ProjectExtraDetails;
