import ChooseCard from "@/components/ChooseCard/ChooseCard";
import SectionHeader from "@/components/SeactionHeader/SectionHeading";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24 ">
      <SectionHeader
        title="Why Choose Us"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur earum doloremque esse, quidem reprehenderit."
      />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ChooseCard title="Best Price Guarantee" image="/images/c1.svg" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay={100}>
          <ChooseCard title="Easy & Quick" image="/images/c2.svg" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay={300}>
          <ChooseCard title="Customer Care 24/7" image="/images/c3.svg" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
