import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import "@/globals.css";
import Image from "next/image";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

// type Props = {};

const Contact = () => {
  return (
    <section className="mx-auto px-[5%] lg:px-[15%] py-[5rem] relative">
      <Image
        src="/Jig.jpg"
        alt="puzzle bg"
        className="absolute top-0 left-0 w-full h-full z-[-1] opacity-[0.05] object-cover"
        width={3648}
        height={2736}
      />
      <section className="md:p-8">
        <div className="bg-[rgba(var(--secondary-color-rgb),.6)] max-w-[35rem] mx-auto rounded-[6px] p-5 md:p-10 xl:p-20">
          <section
            data-testid="contact-card"
            className="flex flex-wrap md:flex-nowrap justify-center"
          >
            {/* info */}
            <div
              className="flex flex-col items-center md:items-start"
              data-testid="contact-info"
            >
              <div>
                <h3 className="text-2xl font-bold text-center md:text-start">
                  Reach out to me
                </h3>
                <p className="mt-5 max-w-[25rem] text-center md:text-start">
                  Feel free to reach out to me through the provided contacts or
                  directly via email. I am eager to hear from you and discuss
                  any inquiries, collaboration opportunities, or feedback you
                  may have. Your communication is highly valued, and I look
                  forward to connecting with you soon.
                </p>
              </div>
              <div className="flex flex-grow mt-3">
                <ul>
                  <li className="flex items-center gap-3">
                    <FaLinkedin className="w-[1.2rem] h-[1.2rem] text-inherit" />
                    <Link
                      href={
                        "https://www.linkedin.com/in/emmanuel-kudom-agyemang-b93a4117a/"
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--accent-color-rgb),1)]"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className="my-5 flex items-center gap-3">
                    <SiGmail className="w-[1.2rem] h-[1.2rem] text-inherit" />
                    <Link
                      href={"mailto:emmanuelkudomagyemang@gmail.com"}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--accent-color-rgb),1)]"
                    >
                      Gmail
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Contact;
