import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SeactionHeader/SectionHeading";
import { hotelsData } from "@/data";
import React from "react";

const Hotels = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <SectionHeader
        title="Recommended Hotels"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, non?"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData?.map((item) => (
          <div key={item.id}>
            <Card hotel={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
