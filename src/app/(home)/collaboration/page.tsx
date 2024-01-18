import React from "react";
import Image from "next/image";
import Link from "next/link";

// type Props = {};

const Collaborate = () => {
  return (
    <main>
      <section className="h-[calc(100vh-88px)] relative flex justify-center items-center">
        <Image
          src="/Jig.jpg"
          alt="puzzle bg"
          className="absolute top-0 left-0 w-full h-full z-[-1] opacity-[0.05] object-cover"
          width={3648}
          height={2736}
        />
        <div className="px-[5%] max-w-[120rem] mx-auto mt-[-88px]">
          <div className="h-full">
            <div className="text-center mt-auto">
              <h4 className="text-[rgba(var(--primary-color-rgb),1)]">
                Collaboration
              </h4>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] w-full wrap-text pt-[2rem] pb-[2.5rem] max-w-[60rem] mx-auto">
                {`Let's talk about working together`}
              </h1>
            </div>
            <div className="flex gap-5 justify-center flex-wrap">
              <Link href={"/contact"}>
                <button className="h-full px-8 py-3 border-2 border-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-[rgba(var(--primary-color-rgb),1)]">
                  Get in Touch
                </button>
              </Link>
              <button className="h-full px-8 py-3 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
                My CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collaborate;
