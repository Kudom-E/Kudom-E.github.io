import React, { useEffect, useState } from "react";

type Props = {};

// Contact
const ServicesSection = (props: Props) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);

  const handleInput = (name: string, value: string) => {
    if (value) {
      setFormDetails((prevState) => ({ ...prevState, name: value }));
    }
  };

  return (
    <section className="h-[70vh] bg-white">
      <div className="text-black px-[1rem]">
        <div className="text-center">
          <h2 className="font-semibold">Contact me</h2>
          <p className="font-semibold">
            Let's connect and collaborate! Whether you have an opportunity in
            mind, or just want to chat about innovative ideas.
          </p>
        </div>

        <div className="pt-[2rem] md:pt-[5rem]">
          <div className="w-[50rem] mx-auto ">
            <div className="flex gap-20">
              <form className="flex-grow">
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold mb-[.25rem]">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      value={formDetails.name}
                      placeholder="Your Name"
                      onChange={(e) =>
                        handleInput(e.target.name, e.target.value)
                      }
                      className="border-[1px] outline-none border-black/50 rounded-xl py-[.5rem] px-[.5rem]"
                    ></input>
                  </div>
                  <div className="flex flex-col pt-[1.5rem]">
                    <label
                      htmlFor="email"
                      className="font-semibold mb-[.25rem]"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      onChange={(e) =>
                        handleInput(e.target.name, e.target.value)
                      }
                      placeholder="youremail@mail.com"
                      className="border-[1px] outline-none border-black/50 rounded-xl py-[.5rem] px-[.5rem]"
                    ></input>
                  </div>
                  <div className="flex flex-col pt-[1.5rem]">
                    <label
                      htmlFor="message"
                      className="font-semibold mb-[.25rem]"
                    >
                      Message
                    </label>
                    <textarea
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
                    <button className="bg-black text-white w-full py-[.5rem] rounded-full">
                      Send message
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
                <div>
                  <h6 className="font-bold">Find my profile</h6>
                  <p>Connect with a part of my journey</p>
                  <div className="pt-[1rem]">
                    <p className="underline font-semibold">Github</p>
                    <p className="underline font-semibold py-[.25rem]">
                      LinkedIn
                    </p>
                  </div>
                </div>
                <div className="pt-[2rem]">
                  <h6 className="font-bold">Chat with me</h6>
                  <p>Speak to me via social media</p>
                  <div className="pt-[1rem]">
                    <p className="underline font-semibold">
                      Message on LinkedIn
                    </p>
                  </div>
                </div>
                <div className="pt-[2rem]">
                  <h6 className="font-bold">Email me</h6>
                  <p>Send me an Email any day of the week</p>
                  <div className="pt-[1rem]">
                    <p className="underline font-semibold">Gmail</p>
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
