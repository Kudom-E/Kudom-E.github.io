"use client";

import React, { useEffect, useRef, useState } from "react";
import ExpertiseSection from "./sections/ExpertiseSection";
import ProjectSection from "./sections/ProjectSection";
import IntroSection from "./sections/IntroSection";
import Header from "../components/Header";
import StackSection from "./sections/StackSection";
import ServicesSection from "./sections/ServicesSection";
import SidebarButton from "../components/SidebarButton";

const Home = () => {
  const InfoSec = useRef<HTMLDivElement>(null);
  const AbtSec = useRef<HTMLDivElement>(null);
  const StkSec = useRef<HTMLDivElement>(null);
  const ProjSec = useRef<HTMLDivElement>(null);
  const ConSec = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
    };
    const optionsContact = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the active section based on the entry target
          setActiveSection(entry.target.getAttribute("data-section") || null);
        }
      });
    }, options);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the active section based on the entry target
          setActiveSection(entry.target.getAttribute("data-section") || null);
        }
      });
    }, optionsContact);

    // Observe each section
    [InfoSec, AbtSec, StkSec, ConSec, ProjSec].forEach((ref) => {
      if (ref.current) {
        if (ref.current.getAttribute("data-section") === "Contact") {
          contactObserver.observe(ref.current);
        } else {
          observer.observe(ref.current);
        }
      }
    });

    return () => {
      // Clean up the observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header
        InfoSec={InfoSec}
        AbtSec={AbtSec}
        StkSec={StkSec}
        ConSec={ConSec}
        ProjSec={ProjSec}
        activeSec={activeSection}
      />
      <SidebarButton
        InfoSec={InfoSec}
        AbtSec={AbtSec}
        StkSec={StkSec}
        ConSec={ConSec}
        ProjSec={ProjSec}
        activeSec={activeSection}
      />
      <section>
        <div>
          <section ref={InfoSec} data-section="Home">
            <IntroSection />
          </section>
          <section ref={AbtSec} data-section="About">
            <ExpertiseSection />
          </section>
          <section ref={StkSec} data-section="Stack">
            <StackSection />
          </section>
          <section ref={ProjSec} data-section="Projects">
            <ProjectSection />
          </section>
          <section ref={ConSec} data-section="Contact">
            <ServicesSection />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
