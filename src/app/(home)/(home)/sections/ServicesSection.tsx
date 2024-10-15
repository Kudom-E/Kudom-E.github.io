import Image from "next/image";
import React, { useState } from "react";
import Toast from "../components/Toast";
import Link from "next/link";

// Contact
const ServicesSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitingStatus, setSubmitingStatus] = useState(false);

  const handleInput = (name: string, value: string) => {
    setFormDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedData = formDetails;
    setFormDetails({
      name: "",
      email: "",
      message: "",
    });
    setSubmitingStatus(true);

    const URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      await fetch(`${URL}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }

    setShowToast(true);
    setSubmitingStatus(false);
  };

  return (
    <section className="bg-white relative">
      {showToast && <Toast onClose={() => setShowToast(false)} />}
      <div className="absolute bottom-[-5rem] lg:bottom-[-.5rem] right-0 w-[10rem] z-[1] hidden md:block">
        <Image
          src="pieces/puzzle-1020410_1920.jpg"
          alt="puzzle bg"
          className="w-full h-full object-cover"
          width={1920}
          height={1920}
        />
      </div>
      <div className="text-black px-[1rem] relative z-[2]">
        <div className="text-center pt-[5rem]">
          <h2 className="font-semibold">Contact me</h2>
          <p className="text-[1.2rem]">Let&apos;s connect and collaborate!</p>
          <p className="font-normal text-[1.2rem]">
            {" "}
            Whether you have an opportunity in mind,
          </p>
          <p className="text-[1.2rem]">
            or just want to chat about innovative ideas.
          </p>
        </div>

        <div className="py-[2rem] md:pt-[5rem]">
          <div className="w-full max-w-[50rem] mx-auto relative">
            <div className="flex flex-wrap gap-10">
              <form
                className="flex-grow"
                onSubmit={(e) => handleSubmit(e)}
                method="POST"
              >
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold mb-[.25rem]">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      id="name"
                      pattern="[A-Za-z ]*"
                      type="text"
                      value={formDetails.name}
                      placeholder="Your Name"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(
                          /[^A-Za-z ]| {2,}/g,
                          ""
                        );
                        handleInput(target.name, target.value);
                      }}
                      className="border-[1px] outline-none border-black/50 rounded-xl py-[.5rem] px-[.5rem]"
                    ></input>
                  </div>
                  <div className="flex flex-col pt-[1rem]">
                    <label
                      htmlFor="email"
                      className="font-semibold mb-[.25rem]"
                    >
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      id="email"
                      value={formDetails.email}
                      onChange={(e) =>
                        handleInput(e.target.name, e.target.value)
                      }
                      placeholder="youremail@mail.com"
                      className="border-[1px] outline-none border-black/50 rounded-xl py-[.5rem] px-[.5rem]"
                    ></input>
                  </div>
                  <div className="flex flex-col pt-[1rem]">
                    <label
                      htmlFor="message"
                      className="font-semibold mb-[.25rem]"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      value={formDetails.message}
                      name="message"
                      id="message"
                      placeholder="Leave me a message..."
                      onChange={(e) =>
                        handleInput(e.target.name, e.target.value)
                      }
                      className="border-[1px] h-[10rem] outline-none resize-none border-black/50 rounded-xl py-[.5rem] px-[0.5rem]"
                    ></textarea>
                  </div>
                  <div className="pt-[1.5rem]">
                    <button
                      className="bg-black text-white w-full py-[.5rem] rounded-full flex items-center justify-center hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.25)]"
                      disabled={submitingStatus}
                      type="submit"
                    >
                      {!submitingStatus ? (
                        "Send message"
                      ) : (
                        <div className="loader"></div>
                      )}
                    </button>
                  </div>
                  {/* <div className="flex justify-center flex-grow-0 pt-[1.5rem]">
                    <div className="text-black w-full font-semibold bg-[rgba(var(--primary-green-rgb),0.05)] backdrop-blur p-[.5rem] rounded-[2rem] hover:shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)] ">
                      <button className="bg-white rounded-[1.5rem] px-[2rem] py-[1rem] w-full outline-none">
                        Send message
                      </button>
                    </div>
                  </div> */}
                </div>
              </form>
              <div>
                <div className="pt-[1rem]">
                  <h6 className="font-bold">Find my profile</h6>
                  <p className="text-base">Connect with a part of my journey</p>
                  <div className="pt-[.75rem] flex flex-col">
                    <Link
                      href={"https://github.com/Kudom-E"}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--primary-green-rgb),1)] font-semibold"
                    >
                      Github
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/emmanuel-kudom-agyemang-b93a4117a/"
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--primary-green-rgb),1)] font-semibold"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
                <div className="pt-[2rem]">
                  <h6 className="font-bold">Chat with me</h6>
                  <p className="text-base">Speak to me via social media</p>
                  <div className="pt-[.75rem]">
                    <Link
                      href={
                        "https://www.linkedin.com/in/emmanuel-kudom-agyemang-b93a4117a/"
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--primary-green-rgb),1)] font-semibold"
                    >
                      Message me on LinkedIn
                    </Link>
                  </div>
                </div>
                <div className="pt-[2rem]">
                  <h6 className="font-bold">Email me</h6>
                  <p className="text-base">
                    Send me an Email any day of the week.
                  </p>
                  <div className="pt-[.75rem]">
                    <Link
                      href={"mailto:emmanuelkudomagyemang@gmail.com"}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-[rgba(var(--primary-green-rgb),1)] font-semibold"
                    >
                      Gmail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
