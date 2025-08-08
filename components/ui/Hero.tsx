"use client";

import React from "react";

import CustomButton from "../button/CustomButton";
import { useState } from "react";
import SideDottedBorderContainer from "./SideDottedContainer";
import { NavbarDemo } from "./NavbarDemo";
const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className=" flex items-center">
      
      <div className="container max-w-[1440px] w-full mx-auto px-2 lg:px-[20px]">
      
        <SideDottedBorderContainer className=" px-4 sm:px-[30px]    sm:py-[35px]">
        <NavbarDemo />
          {/* Remove NavbarDemo from here */}
          <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[60px] items-center justify-center pt-[60px] sm:pt-[100px]">
            {/* Left Content Section */}
            <div className="flex-1 space-y-[15px] sm:space-y-6">
              <h1 className="heading font-abril">
              UNCOVER THE BEAUTY AND HERITAGE OF CHESS
              </h1>

              <p className="description ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived
              </p>

              <div className="pt-4">
                <CustomButton
                  name="Register Now"
                  onClick={console.log("somethign")}
                />
              </div>
            </div>

            {/* Right Video Section */}
            <div className="pb-[25px] pb-0 sm:w-[438px] sm:h-[700px] relative flex justify-center lg:justify-end shrink-0">
              <img
                src="/hero.svg"
                alt="hero"
                className="w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-100"
              />
              {/* {!isVideoLoaded && (
                <div className="absolute rounded-full inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-300  relative overflow-hidden">
                    <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                  </div>
                </div>
              )} */}

              {/* <video
                className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
                  isVideoLoaded ? "opacity-100" : "opacity-0"
                }`}
                controls
                poster="/video/hero.mp4"
                autoPlay
                muted
                loop
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
              > */}
              {/* <source src="/video/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>
        </SideDottedBorderContainer>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <span className="border-2 border-[#F3F3F3] px-2 py-1 inline-block">
                CHESS
              </span> */
}
