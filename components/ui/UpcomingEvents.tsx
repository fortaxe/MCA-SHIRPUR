"use client";

import React, { useState } from "react";

import CustomButton from "../button/CustomButton";
import CustomArrow from "../button/custom-arrow";
import DottedBorderContainer from "./dotted-container";

const events = [
  {
    id: 1,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
  {
    id: 2,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
  {
    id: 3,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
  {
    id: 4,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
  {
    id: 3,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
  {
    id: 4,
    date: "22.05.2025",
    title:
      "Event description Lorem ipsum dolor sit amet, consectetur description ",
    image: "/upcoming.jpg",
  },
];

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 sm:px-[20px]  ">
      <DottedBorderContainer className="px-[15px]  sm:px-[30px] py-[35px]">
        <div className="flex items-center justify-center mb-[15px] sm:mb-[50px]">
          <p className="sub-small-heading font-abril uppercase">
            Upcoming Events
          </p>
          {/* <div className="flex gap-2">
            <CustomArrow img="/arrows/left.svg" onClick={prevSlide} />
            <CustomArrow img="/arrows/right.svg" onClick={nextSlide} />
          </div> */}
        </div>

        <div className="flex overflow-x-auto gap-[10px] sm:gap-6 no-scrollbar">
          {events.map((event, index) => (
            <div
              key={`${event.id}-${currentIndex}-${index}`}
             className="min-w-[272px] sm:min-w-[315px] duration-300"
            >
              <div className="relative  overflow-hidden">
                {/* Image */}
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px]  "
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/2  z-10" />

                {/* Centered Date on bottom */}
              </div>

              <div>
                <p className="text-[16px] py-4 description  leading-[22px] tracking-0 ">
                  {event.title}
                </p>

                <div className="flex items-end justify-between text-[14px]  description transition-colors group pb-2 pr-1">
                  <span className="mr-2 description   ">
                    {event.date}
                  </span>
                  {/* <CustomButton
                    name="READ MORE"
                    onClick={console.log("somethign")}
                  /> */}
                  <p className="description text-[#D7816A]! underline">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DottedBorderContainer>
    </div>
  );
};

export default UpcomingEvents;

// <div className="max-w-[1440px] mx-auto px-[50px] py-[70px] bg-gray-50 min-h-screen">
//     <div className="flex items-center justify-between mb-[50px]">
//       <h2 className="text-[38px] text-black leading-[100%] tracking-0 uppercase font-bold">
//         Upcoming Events
//       </h2>
//       <div className="flex gap-2">
//         <CustomArrow img="/arrows/left.png" onClick={prevSlide} />
//         <CustomArrow img="/arrows/right.png" onClick={nextSlide} />
//       </div>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {events.map((event, index) => (
//         <div
//           key={`${event.id}-${currentIndex}-${index}`}
//           className="relative overflow-hidden duration-300"
//         >
//           {/* Main content container with dotted border effect */}
//           <div className="relative bg-white rounded-[24px] overflow-hidden">
//             {/* Corner decorative elements */}
//             <div className="absolute top-0 left-0 w-4 h-4 z-20">
//               <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
//             </div>
//             <div className="absolute top-0 right-0 w-4 h-4 z-20">
//               <div className="w-2 h-2 bg-gray-400 rounded-sm ml-auto"></div>
//             </div>
//             <div className="absolute bottom-0 left-0 w-4 h-4 z-20">
//               <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
//             </div>
//             <div className="absolute bottom-0 right-0 w-4 h-4 z-20">
//               <div className="w-2 h-2 bg-gray-400 rounded-sm ml-auto"></div>
//             </div>

//             {/* Dotted border lines */}
//             {/* Top border */}
//             <div
//               className="absolute top-0 left-4 right-4 h-px z-10"
//               style={{
//                 background: `repeating-linear-gradient(
//                   to right,
//                   #9ca3af 0px,
//                   #9ca3af 4px,
//                   transparent 4px,
//                   transparent 8px
//                 )`
//               }}
//             ></div>

//             {/* Bottom border */}
//             <div
//               className="absolute bottom-0 left-4 right-4 h-px z-10"
//               style={{
//                 background: `repeating-linear-gradient(
//                   to right,
//                   #9ca3af 0px,
//                   #9ca3af 4px,
//                   transparent 4px,
//                   transparent 8px
//                 )`
//               }}
//             ></div>

//             {/* Left border */}
//             <div
//               className="absolute left-0 top-4 bottom-4 w-px z-10"
//               style={{
//                 background: `repeating-linear-gradient(
//                   to bottom,
//                   #9ca3af 0px,
//                   #9ca3af 4px,
//                   transparent 4px,
//                   transparent 8px
//                 )`
//               }}
//             ></div>

//             {/* Right border */}
//             <div
//               className="absolute right-0 top-4 bottom-4 w-px z-10"
//               style={{
//                 background: `repeating-linear-gradient(
//                   to bottom,
//                   #9ca3af 0px,
//                   #9ca3af 4px,
//                   transparent 4px,
//                   transparent 8px
//                 )`
//               }}
//             ></div>

//             {/* Image container */}
//             <div className="relative h-[373px] overflow-hidden rounded-[24px]">
//               <img
//                 src={event.image}
//                 alt={`Event ${event.id}`}
//                 className="w-full h-full object-cover"
//               />

//               {/* Bottom Gradient Overlay */}
//               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent z-10" />
//             </div>

//             {/* Content */}
//             <div className="p-4">
//               <p className="text-[16px] py-4 text-gray-600  leading-[24px] tracking-0">
//                 {event.title}
//               </p>

//               <div className="flex items-center justify-between text-[14px] leading-[24px] tracking-0 text-gray-600 transition-colors group pb-2 pr-1">
//                 <span className="mr-2 text-gray-600  leading-[24px] tracking-0">
//                   {event.date}
//                 </span>
//                 <CustomButton
//                   name="READ MORE"
//                   onClick={() => console.log("Read more clicked")}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
