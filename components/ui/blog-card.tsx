import { BlogProps } from "@/lib/types";
import BlackButton from "../button/black-button";
import React from "react";

const BlogCard: React.FC<BlogProps> = ({
  img,
  heading,
  description,
  createdAt,
}) => (
  <div className="relative bg-[#3D3D3D] rounded-[25px]">
    <div className=" p-[25px] flex flex-col h-full">
      <img
        src={"/black-card.jpg"}
        alt={heading}
        className="w-full h-full object-cover rounded-[12.5px]  "
      />

      <div className="mt-[15px] flex flex-col flex-grow">
        <p className="text-[20px] left-align text-white leading-[26px] tracking-0 font-medium  pt-[25px]">
          {heading}
        </p>
        <p className="description pt-[25px]">
          {description}
        </p>
        <div className="flex justify-between items-end pt-[25px] mt-auto">
          <p className="text-[12px] left-align text-black1 mb-0 text-white">
            {createdAt}
          </p>
          <BlackButton name="Read More" onClick={console.log("somethign")} />
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
