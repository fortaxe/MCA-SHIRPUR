"use client";

import React, { useState } from "react";

import { CustomArrow } from "../button/CustomButton";
import BlogCard from "./blog-card";
import DottedBorderContainer from "./dotted-container";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      date: "22.05.2025",
      title: "Freestyle Chess Grand Slam goes live in Las Vegas",
      image: "/home/event1.png",
      description:
        "Hosted at Wynn’s Lafite Ballroom, this Chess960 “Freestyle” event features Magnus Carlsen and Hans Niemann among 16 top players, blending elite chess with live entertainment",
    },
    {
      id: 2,
      date: "22.05.2025",
      title: "Freestyle Chess Grand Slam goes live in Las Vegas",
      image: "/home/event1.png",
      description:
        "Hosted at Wynn’s Lafite Ballroom, this Chess960 “Freestyle” event features Magnus Carlsen and Hans Niemann among 16 top players, blending elite chess with live entertainment",
    },
    {
      id: 3,
      date: "22.05.2025",
      title: "Freestyle Chess Grand Slam goes live in Las Vegas",
      image: "/home/event1.png",
      description:
        "Hosted at Wynn’s Lafite Ballroom, this Chess960 “Freestyle” event features Magnus Carlsen and Hans Niemann among 16 top players, blending elite chess with live entertainment",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (

      <div className=" max-w-[1440px] w-full mx-auto lg:px-[20px]">
        <DottedBorderContainer className=" px-[50px]  py-[35px]">
          <div className="flex items-center justify-between mb-[50px]">
            <p className="text-[32px]  text-black leading-[100%] tracking-0 uppercase font-monument">
              News and Updates{" "}
            </p>
            <div className="flex gap-2">
              <CustomArrow img="/arrows/left.png" onClick={prevSlide} />
              <CustomArrow img="/arrows/right.png" onClick={nextSlide} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto">
            {events.map((event, index) => (
              <BlogCard
                key={`${event.id}`}
                img={event.image}
                heading={event.title}
                description={event.description}
                createdAt={event.date}
              />
            ))}
          </div>
        </DottedBorderContainer>
      </div>
 
  );
};

export default Blogs;
