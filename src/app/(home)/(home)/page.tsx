"use client";

import React, { useRef } from "react";
import ExpertiseSection from "./sections/ExpertiseSection";
import ProjectSection from "./sections/ProjectSection";
import IntroSection from "./sections/IntroSection";
import Header from "../components/Header";

const Home = () => {
  const InfoSec = useRef<HTMLDivElement>(null);
  const AbtSec = useRef<HTMLDivElement>(null);
  const StkSec = useRef<HTMLDivElement>(null);
  const SerSec = useRef<HTMLDivElement>(null);
  const ProjSec = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        InfoSec={InfoSec}
        AbtSec={AbtSec}
        StkSec={StkSec}
        SerSec={SerSec}
        ProjSec={ProjSec}
      />
      <section>
        <div>
          <section ref={InfoSec} id="Intro">
            <IntroSection />
          </section>
          <section ref={AbtSec} id="About">
            <ExpertiseSection />
          </section>
          <section ref={StkSec} id="Projects">
            <ProjectSection />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
