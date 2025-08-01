"use client";

import React, { useState } from "react";

import CustomButton, { CustomArrow } from "../button/CustomButton";

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      date: "22.05.2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
    {
      id: 2,
      date: "22.05.2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
    {
      id: 3,
      date: "22.05.2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
    {
      id: 4,
      date: "22.05.2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
    {
      id: 3,
      date: "June 25, 2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
    {
      id: 4,
      date: "June 25, 2025",
      title:
        "Event description Lorem ipsum dolor sit amet, consectetur description ",
      image: "/home/event1.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const getVisibleEvents = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % events.length;
      visible.push(events[index]);
    }
    return visible;
  };

  return (
    <div className="max-w-[1440px] mx-auto px-[50px] py-[70px] ">
      <div className="flex items-center justify-between mb-[50px]">
        <h2 className="text-[38px]  text-black leading-[100%] tracking-0 uppercase">
          Upcoming Events
        </h2>
        <div className="flex gap-2">
          <CustomArrow img="/arrows/left.png" onClick={prevSlide} />
          <CustomArrow img="/arrows/right.png" onClick={nextSlide} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getVisibleEvents().map((event, index) => (
          <div
            key={`${event.id}-${currentIndex}-${index}`}
            className="overflow-x-auto  duration-300"
          >
            <div className="relative h-[373px] overflow-hidden">
              {/* Image */}
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className="w-full h-full object-cover rounded-[24px]  "
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2  z-10" />

              {/* Centered Date on bottom */}
            </div>

            <div>
              <p className="text-[16px] py-4 text-description font-helvetica leading-[24px] tracking-0 ">
                {event.title}
              </p>

              <div className="flex items-center justify-between text-[14px] leading-[24px] tracking-0 text-description transition-colors group pb-2 pr-1">
                <span className="mr-2 text-description font-helvetica  leading-[24px] tracking-0">
                  {event.date}
                </span>
                <CustomButton
                  name="READ MORE"
                  onClick={console.log("somethign")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
