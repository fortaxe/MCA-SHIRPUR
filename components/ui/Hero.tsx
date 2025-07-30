"use client";

import React from "react";
import MainHeader from "./Mainheader";
import FirstHeader from "./FirstHeader";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/home/hero.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full  z-0"
      />

      {/* Headers on top */}
      <div className="absolute top-0 left-0 z-30 w-full">
        <FirstHeader />
        <MainHeader />
      </div>

      {/* Centered Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-4xl md:text-6xl text-center font-bold leading-tight">
          Uncover the Timeless Beauty and Heritage of Chess
        </h1>
      </div>
    </div>
  );
};

export default Hero;
