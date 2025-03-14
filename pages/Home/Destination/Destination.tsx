import React from "react";
import SectionHeading from "../../../components/SeactionHeader/SectionHeading";
import DestinationSlider from "../../../components/Slider/Slider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading
        title="Exploring Popular Destination"
        description="Lorem ipsum dolor sit amet consectetur."
      />
      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
