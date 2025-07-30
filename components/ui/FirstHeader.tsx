import React from "react";
import { ChevronRight } from "lucide-react";

// Event Banner Component
const FirstHeader = () => {
  return (
    <div className="bg-black text-white py-[10px] px-4 relative">
      <div className="flex items-center justify-center">
        <span className="text-sm leading-[100%] tracking-0 mr-[5px]">
          Upcoming Event: Knight's Clash — August 2nd at 10:00 AM
        </span>
        <div className=" bg-white rounded-full">
          <ChevronRight size={16} className=" text-black" />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
