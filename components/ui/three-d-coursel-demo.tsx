"use client";

import CustomButton from "../button/CustomButton";
import { ThreeDPhotoCarousel } from "./three-d-coursel";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full flex justify-center py-[70px]">
      <div className="w-full max-w-4xl text-center">
         <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black text-black leading-[65.12px] tracking-0 uppercase">      
          Our Goal isn’t Just
          <br />
          to Teach Moves
        </h1>
        <p className="text-description font-helvetica  text-[16px] font-Helvetica Roman leading-[24px] tracking-0 mt-[15px] max-w-[600px] mx-auto">
          It’s to help you think like a champion. That’s why I’ve made our
          sessions more focused, more productive, and tailored to you.
        </p>
        <div className="mt-6 ">
          <CustomButton
            name="Start Your Game Today"
            onClick={() => console.log("something")}
          />
        </div>

        <ThreeDPhotoCarousel />
      </div>
    </div>
  );
}
