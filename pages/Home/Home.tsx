import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotels from "./Hotels/Hotels";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <Hero />
      <Destination />
      <Hotels />
      <WhyChoose />
    </div>
  );
};

export default Home;
