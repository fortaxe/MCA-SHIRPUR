import { BlogProps } from "@/lib/types";
import BlackButton from "../button/black-button";
import React from "react";

const BlogCard: React.FC<BlogProps> = ({
  img,
  heading,
  description,
  createdAt,
}) => (
  <div className="relative bg-black rounded-[20px] sm:rounded-[25px]">
    <div className="p-4 sm:p-[25px] flex flex-col h-full min-w-[272px] sm:min-w-[315px]">
      <img
        src={img}
        alt={heading}
        className="w-full h-full object-cover rounded-[8px] sm:rounded-[12.5px]  "
      />

      <div className="] flex flex-col flex-grow">
        <p className="text-[16px] sm:text-[20px] left-align text-white leading-[20px] sm:leading-[26px] tracking-0 font-medium  pt-[15px] sm:pt-[25px]">
          {heading}
        </p>
        <p className="description pt-[15px] sm:pt-[25px]">
          {description}
        </p>
        <div className="flex justify-between items-end pt-[15px] sm:pt-[25px] mt-auto">
          <p className="text-[12px] left-align text-black1 mb-0 text-white">
            {createdAt}
          </p>
          <p className="description text-white! underline cursor-pointer">
                    Read More
                  </p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
