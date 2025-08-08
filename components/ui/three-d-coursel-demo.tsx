"use client";

import CustomButton from "../button/CustomButton";
import DottedBorderContainer from "./dotted-container";
import { ThreeDPhotoCarousel } from "./three-d-coursel";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className=" max-w-[1440px] w-full mx-auto lg:px-[20px]">
      <DottedBorderContainer className=" px-[50px]  pt-[70px] flex justify-center">
        <div className="w-full max-w-[961px] text-center ">
          <h1 className="font-abril heading" >
            Our Goal isn’t Just
            <br />
            to Teach Moves
          </h1>
          <p className="description mt-[15px] max-w-[600px] mx-auto">
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
      </DottedBorderContainer>
    </div>
  );
}
