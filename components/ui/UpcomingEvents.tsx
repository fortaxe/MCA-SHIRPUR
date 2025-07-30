"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      date: "June 25, 2025",
      title: "EVENT DESCRIPTION LOREM IPSUM DOLOR SIT AMET, CONSECTETUR",
      image: "/home/event1.png",
    },
    {
      id: 2,
      date: "June 25, 2025",
      title: "EVENT DESCRIPTION LOREM IPSUM DOLOR SIT AMET, CONSECTETUR",
      image: "/home/event1.png",
    },
    {
      id: 3,
      date: "June 25, 2025",
      title: "EVENT DESCRIPTION LOREM IPSUM DOLOR SIT AMET, CONSECTETUR",
      image: "/home/event1.png",
    },
    {
      id: 4,
      date: "June 25, 2025",
      title: "EVENT DESCRIPTION LOREM IPSUM DOLOR SIT AMET, CONSECTETUR",
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
        <h2 className="text-[42px] font-light text-black leading-[100%] tracking-0">
          Upcoming Events
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous events"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next events"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getVisibleEvents().map((event, index) => (
          <div
            key={`${event.id}-${currentIndex}-${index}`}
            className="bg-white rounded-[5px] overflow-x-auto  duration-300"
          >
            <div className="relative h-[373px] overflow-hidden">
              {/* Image */}
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className="w-full h-full object-cover"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />

              {/* Centered Date on bottom */}
              <div className="absolute bottom-[30px] w-full flex justify-center z-20">
                <span className="text-white text-[20px] px-4 py-1 rounded">
                  {event.date}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[16px] py-5 text-gray-900  leading-[24px] tracking-0">
                {event.title}
              </p>

              <button className="flex items-center text-[14px] leading-[24px] tracking-0 text-black transition-colors group">
                <span className="mr-2">Read More</span>
                <div className="w-[107px] h-px bg-gray-900 mr-2 group-hover:w-12 transition-all duration-300"></div>
               <img src="/home/arrow.png" alt="arrow" className="w-[9px] h-[9px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;


