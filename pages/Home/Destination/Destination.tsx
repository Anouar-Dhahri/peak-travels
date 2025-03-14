import React from "react";
import SectionHeading from "@/components/SeactionHeader/SectionHeading";
import Slider from "@/components/Slider/Slider";
import { destinationData } from "@/data";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading
        title="Exploring Popular Destination"
        description="Lorem ipsum dolor sit amet consectetur."
      />
      <div className="mt-14 w-[80%] mx-auto">
        {destinationData && destinationData?.length > 0 && (
          <Slider data={destinationData} />
        )}
      </div>
    </div>
  );
};

export default Destination;
