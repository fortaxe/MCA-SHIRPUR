"use client";

import React from "react";

import { NavbarDemo } from "./NavbarDemo";
import CustomButton from "../button/CustomButton";
import { useState } from "react";
import SideDottedBorderContainer from "./SideDottedContainer";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="bg-gray-100 flex items-center">
      <div className="container max-w-[1440px] w-full mx-auto lg:px-[20px]">
        <SideDottedBorderContainer className="  px-[30px] py-[35px]">
          {/* Remove NavbarDemo from here */}
          <div className="flex flex-col lg:flex-row gap-[60px] items-center justify-center pt-[100px]">
            {/* Left Content Section */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black text-black leading-[65.12px] tracking-0 uppercase font-monument">
                UNCOVER THE
                <br />
                TIMELESS BEAUTY
                <br />
                AND HERITAGE OF
                <br />
                CHESS
              </h1>

              <p className="description font-helvetica  text-[16px] font-Helvetica Roman leading-[24px] tracking-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived
              </p>

              <div className="pt-4">
                <CustomButton
                  name="REGISTER NOW"
                  onClick={console.log("somethign")}
                />
              </div>
            </div>

            {/* Right Video Section */}
            <div className="w-[438px] h-[700px] relative flex justify-center lg:justify-end shrink-0">
              {!isVideoLoaded && (
                <div className="absolute rounded-full inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-300  relative overflow-hidden">
                    <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                  </div>
                </div>
              )}

              <video
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
              >
                <source src="/video/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
