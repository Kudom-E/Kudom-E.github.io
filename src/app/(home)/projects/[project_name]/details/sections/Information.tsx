import React from "react";
import { moreDetails } from "./ExtraData";

type Props = {
  currentProject: string;
};

const Information = ({ currentProject }: Props) => {
  const projectExtraDetail = moreDetails.find(
    (obj) => obj.name === currentProject
  );

  return (
    <section>
      <div className="pt-[5rem]">
        <div className="max-w-[80vw] mx-auto text-black">
          <div className="flex flex-wrap lg:flex-nowrap gap-[4rem] h-[100vh] overflow-y-scroll relative">
            <div className="w-full px-[1rem] md:min-w-[20rem] lg:sticky top-0">
              <div>
                <div className="flex justify-between pb-[1rem]">
                  <p className="text-sm font-semibold">Users:</p>
                  <p className="text-sm">{projectExtraDetail?.users}</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                  <p className="text-sm font-semibold">Objective:</p>
                  <p className="text-sm">{projectExtraDetail?.objective}</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                  <p className="text-sm font-semibold">Main Feature:</p>
                  <p className="text-sm">{projectExtraDetail?.mainFeature}</p>
                </div>
              </div>
              {projectExtraDetail?.live === "Live" ? (
                <div className="bg-[rgba(var(--primary-green-rgb),1)] py-[1rem] px-[1.5rem] rounded-[3rem] w-full text-center cursor-not-allowed">
                  <span className="text-sm font-semibold text-white">
                    Visit Site
                  </span>
                </div>
              ) : (
                <div
                  className={`${
                    projectExtraDetail?.live === "No Longer Live"
                      ? "bg-red-500"
                      : "bg-blue-400"
                  } py-[1rem] px-[1.5rem] rounded-[3rem] w-full text-center cursor-not-allowed`}
                >
                  <span className="text-sm font-semibold text-white">
                    {projectExtraDetail?.live}
                  </span>
                </div>
              )}
            </div>
            <div className="pr-[1rem] flex-shrink">
              <div>
                <p className="text-base">{projectExtraDetail?.description}</p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    My Approach
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.approach}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Vision and Innovation
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.vision}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Identifying Unique Challenges
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.challenge}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Meeting User Needs
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.userNeeds}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Detailed Pages and Features
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.features}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Accessibility and Optimization
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.optimization}
                </p>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl pt-[1.5rem]">
                    Conclusion
                  </h3>
                </div>
                <p className="pt-[1rem] text-base">
                  {projectExtraDetail?.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
