"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  year: string;
  title: string;
  place: string;
  desc: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];
  const currentYear = currentExperience.year.split("—")[0].trim(); // Extract the start year

  // Helper to get years for the arc display
  const getArcYears = () => {
    const years = experiences.map(exp => parseInt(exp.year.split("—")[0].trim()));
    const uniqueYears = Array.from(new Set(years)).sort((a, b) => a - b);
    const currentYearInt = parseInt(currentYear);

    const yearPositions = [];
    const totalYears = uniqueYears.length;
    const currentYearIndex = uniqueYears.indexOf(currentYearInt);

    // Display current year, one before, and one after if available
    if (currentYearIndex > 0) yearPositions.push({ year: uniqueYears[currentYearIndex - 1], offset: -1 });
    yearPositions.push({ year: currentYearInt, offset: 0 });
    if (currentYearIndex < totalYears - 1) yearPositions.push({ year: uniqueYears[currentYearIndex + 1], offset: 1 });

    return yearPositions;
  };

  const arcYears = getArcYears();

  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-white">
      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
        {/* Semi-circular SVG for the timeline */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] overflow-visible"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer arc */}
          <path
            d="M0 400 C200 100 600 100 800 400"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          {/* Inner arc */}
          <path
            d="M50 400 C225 150 575 150 750 400"
            stroke="#E5E7EB"
            strokeWidth="1"
          />

          {/* Current year marker (top center) */}
          <line x1="400" y1="100" x2="400" y2="150" stroke="#5DA9E9" strokeWidth="2" />

          {/* Dynamic year markers */}
          {arcYears.map((yearData, index) => {
            // Simple positioning for demonstration, can be made more precise
            let xOffset = 0;
            let yOffset = 0;
            let rotation = 0;
            let fontSize = "text-sm";
            let color = "text-gray-500";

            if (yearData.offset === 0) { // Current year
              xOffset = 400;
              yOffset = 70;
              fontSize = "text-5xl md:text-6xl";
              color = "text-gray-900";
            } else if (yearData.offset === -1) { // Previous year
              xOffset = 200;
              yOffset = 250;
              rotation = -30;
            } else if (yearData.offset === 1) { // Next year
              xOffset = 600;
              yOffset = 250;
              rotation = 30;
            }

            return (
              <text
                key={index}
                x={xOffset}
                y={yOffset}
                textAnchor="middle"
                className={`font-primary font-bold ${fontSize} ${color}`}
                transform={`rotate(${rotation} ${xOffset} ${yOffset})`}
              >
                {yearData.year}
              </text>
            );
          })}
        </svg>

        {/* Current Experience Details */}
        <div className="absolute top-[200px] w-full max-w-md text-center px-4">
          <h3 className="font-header text-2xl font-bold text-gray-800 mb-2">
            {currentExperience.title}
          </h3>
          <p className="font-primary text-lg italic text-gray-600 mb-2">
            {currentExperience.place}
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-primary">
            {currentExperience.desc}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous experience"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Next experience"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ExperienceTimeline;