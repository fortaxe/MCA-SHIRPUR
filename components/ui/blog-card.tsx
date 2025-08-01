import { BlogProps } from "@/lib/types";
import CustomButton from "../button/CustomButton";
import React from "react";

const BlogCard: React.FC<BlogProps> = ({
  img,
  heading,
  description,
  createdAt,
}) => (
  <div className="relative bg-black rounded-[25px]">
    <div className=" p-[25px] flex flex-col h-full">
      <img
        src={"/black-card.jpg"}
        alt={heading}
        className="w-full h-full object-cover rounded-[12.5px]  "
      />

      <div className="mt-[15px] flex flex-col flex-grow">
        <p className="text-[18px] left-align text-white leading-[26px] tracking-0 font-helvetica  pt-[25px]">
          {heading}
        </p>
        <p className="text-[#C8C8C8] font-helvetica  text-[16px]  leading-[24px] tracking-0 pt-[25px]">
          {description}
        </p>
        <div className="flex justify-between items-center pt-[25px] mt-auto">
          <p className="text-[12px] left-align text-black1 mb-0 font-helvetica text-white">
            {createdAt}
          </p>
          <CustomButton name="Read More" onClick={console.log("somethign")} />
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
