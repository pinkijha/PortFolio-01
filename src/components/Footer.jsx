import React from "react";
import { FaLinkedin, FaGithub, SiGmail, FaCopyright, FcLike } from "../utils/Icons.js";

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaGithub
                className=" cursor-pointer hover:scale-110 duration-200 "
                size={"24px"}
              />
              <FaLinkedin
                className=" cursor-pointer hover:scale-110 duration-200 "
                size={"24px"}
              />
              <SiGmail
                className=" cursor-pointer hover:scale-110 duration-200 "
                size={"24px"}
              />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                <p>Created By ❤️ Pinki Jha ©️ 2024. </p>
              
             
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
