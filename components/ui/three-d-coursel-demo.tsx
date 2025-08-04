"use client";

import CustomButton from "../button/CustomButton";
import { ThreeDPhotoCarousel } from "./three-d-coursel";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full flex justify-center py-[70px]">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-[32px] text-black tracking-0 leading-[100%] uppercase">
          Our Goal isn’t Just
          <br />
          to Teach Moves
        </h2>
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
