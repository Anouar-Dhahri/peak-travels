import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotels from "./Hotels/Hotels";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <Hero />
      <Destination />
      <Hotels />
      <WhyChoose />
      <Reviews />
    </div>
  );
};

export default Home;
