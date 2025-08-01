"use client";

import CustomButton from "../button/CustomButton";
import { ThreeDPhotoCarousel } from "./three-d-coursel";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full flex justify-center py-[70px]">
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-[58px] text-black tracking-0 leading-[100%]">
      Our Goal isn’t Just
      <br />
       to Teach Moves
    </h2>

    <div className="mt-6 mb-10">
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
