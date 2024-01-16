import Footer from "@/(home)/components/Footer";
import React from "react";

// type Props = {};

const ContactSection = () => {
  return (
    <section className="h-screen">
      <div className="px-[5%] max-w-[120rem] mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="text-center mt-auto">
            <h4 className="text-[rgba(var(--primary-color-rgb),1)]">
              Collaboration
            </h4>
            <h1 className="w-full wrap-text leading-[6rem] pt-[3rem] pb-[5rem] max-w-[60rem] mx-auto">
              {`Let's talk about working together`}
            </h1>
          </div>
          <div className="flex gap-5 justify-center">
            <button className="h-full px-8 py-3 border-2 border-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-[rgba(var(--primary-color-rgb),1)]">
              Get in Touch
            </button>
            <button className="h-full px-8 py-3 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
              Hire Me
            </button>
          </div>
          <div className="border-[1px] h-[1px] border-[rgba(var(--secondary-color-rgb),1)] w-[min(100%,60rem)] mx-auto mt-auto"></div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
