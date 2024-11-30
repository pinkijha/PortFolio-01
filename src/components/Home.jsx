import React, { useEffect, useState } from "react";
import photo from "/Passport_size_photo.JPG";
import { FaLinkedin, FaGithub, SiGmail, SiCss3 } from "../utils/Icons.js";
import { ReactTyped } from "react-typed";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const Home = () => {
 


  return (
    <>
      <div id="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-10 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="space-y-2">
              <span className="md:text-xl">Welcome In My Feed</span>
              <div className="flex md:flex-row flex-col  space-x-1 md:text-4xl text-2xl">                
              <h1 className="">
                Hello, I am  </h1>                
                <ReactTyped  className="text-green-500 font-bold"
                  strings={[
                    "Software Engineer",
                    "Software Developer",
                    "Frontend Developer",
                    "React Developer",
                    "HTML Developer",
                    "Wordpress Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>
            <br />

            <div>
              <p className="text-sm md:text-md text-justify">
                Highly motivated Front-End Developer with 2.5 years of
                experience crafting user-centric web applications. Adept at
                translating UI/UX designs into responsive, interactive
                interfaces using HTML5, CSS3, and JavaScript frameworks (e.g.,
                React, Angular). Proven ability to collaborate effectively with
                cross-functional teams to deliver seamless user experiences and
                drive innovation.
              </p>
            </div>
            <br />

            {/* Social Icons */}
            <div className="flex justify-between items-center flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
              <div className="space-y-3">
                <h1 className="text-sm md:text-lg">Available on </h1>
                <ul className="flex text-lg md:text-2xl space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/pinkijha/" target="_blank">
                    <FaLinkedin className="cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/pinkijha" target="_blank">
                    <FaGithub className="cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/" target="_blank">
                    <SiGmail className="cursor-pointer" /></a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h1 className=" text-sm md:text-lg">Currently Working on </h1>

                <div className="flex text-lg md:text-2xl space-x-5">
                  <FaReact className=" hover:scale-150 duration-200 " />
                  <FaHtml5 className=" hover:scale-150 duration-200 " />
                  <SiCss3 className=" hover:scale-150 duration-200" />
                  <FaNodeJs className=" hover:scale-150 duration-200"  />
                  <IoLogoJavascript className=" hover:scale-150 duration-200"  />
                </div>
               
              </div>
            </div>
          </div>

          <div className="w-1/2 mt-5 md:mt-20 ml-16 md:ml-48 order-1">
            <img className=" md:h-[300px] rounded-full" src={photo} />
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
};

export default Home;
