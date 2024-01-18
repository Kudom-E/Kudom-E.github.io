"use client";

import React from "react";
// import ProjectSection from "./sections/projects/ProjectSection";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import {
  SiJest,
  SiTypescript,
  SiCircleci,
  SiHeroku,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

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
                <h1
                  className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-center"
                  data-testid="main-header"
                >
                  Emmanuel Kudom-Agyemang
                </h1>
                <h4
                  className="p-8 text-center text-[1rem] sm:text-[1.5rem]"
                  data-testid="sub-header"
                >
                  <span className="ltr-mix-bg whitespace-pre-line text-wrap">
                    {`Navigating the Digital Landscape: Piecing Together
                    Innovative Solutions, One Code Puzzle at a Time.`}
                  </span>
                </h4>
                <div className="w-[90vw]">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    speed={3000}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <span>
                        <FaReact className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaVuejs className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaAngular className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaHtml5 className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaCss3Alt className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiTailwindcss className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaGithub className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaPython className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiJest className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <FaNodeJs className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiJavascript className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiHeroku className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiCircleci className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span>
                        <SiTypescript className="w-[3rem] h-[3rem]" />
                      </span>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
