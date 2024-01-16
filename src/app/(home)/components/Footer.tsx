import React from "react";

// type Props = {};

const Footer = () => {
  return (
    <footer className="mt-[3rem]">
      <div className="px-[5%] py-[3rem] lg:py-0 max-w-[120rem]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="max-w-[25rem] flex-grow">
              Eu ut eiusmod exercitation cupidatat. Duis exercitation ullamco
              qui consequat id anim ipsum aliquip ad. Incididunt excepteur sit
              et officia qui fugiat ullamco ad ipsum. Id ullamco occaecat
              laboris ex.
            </div>
            <div className="opacity-50 text-xs mt-[2rem] mb-[1rem]">
              © Emmanuel Kudom-Agyemang. All rights reserved 2023
            </div>
          </div>
          <div>
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Gmail</li>
              <li>Emm.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
