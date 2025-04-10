import ReviewSlider from "@/components/ReviewSlider/ReviewSlider";
import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 items-center justify-center flex-col bg-[#222]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* TEXT CONTENT */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us ?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            cumque amet enim incidunt nemo modi ut eos. Quidem iure facere odio
            facilis? Expedita deserunt quos nobis officiis non magnam
            consequatur.
          </p>
          {/* RATING */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER */}
        <div className="overflow-hidden">
          <ReviewSlider/>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
