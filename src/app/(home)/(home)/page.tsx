import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
// import ProjectSection from "./sections/projects/ProjectSection";
import Image from "next/image";
import ContactSection from "./sections/contact/ContactSection";

// type Props = {};

const Home = () => {
  return (
    <main>
      <div>
        <div className="h-[calc(100vh-88px)] relative">
          <Image
            src="/Jig.jpg"
            alt="puzzle bg"
            className="absolute top-0 left-0 w-full h-full z-[-1] opacity-[0.05] object-cover"
            width={3648}
            height={2736}
          />
          <div className="px-[5%] max-w-[120rem] mx-auto h-full">
            <section className="flex items-center justify-center h-full">
              <div>
                <h1 className=" text-center" data-testid="main-header">
                  Emmanuel Kudom-Agyemang
                </h1>
                <h4 className="p-8 text-center" data-testid="sub-header">
                  <span className="ltr-mix-bg">
                    A nextjs boilerplat with Jest, Circle CI, Vercel, Typescript
                  </span>
                </h4>
                <div>
                  <ul className="flex flex-wrap gap-10 justify-center">
                    <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
                      <BsGithub className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
                    </li>
                    <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
                      <AiFillInstagram className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
                    </li>
                    <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
                      <BsLinkedin className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
                    </li>
                    <li className="bg-[rgba(var(--secondary-color-rgb),1)] p-3 rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)] cursor-pointer">
                      <BsFacebook className="w-[2rem] h-[2rem] fill-[rgba(var(--text-color-rgb),1)]" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <Sections /> */}
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
