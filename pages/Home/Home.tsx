import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";

const Home = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <Hero />
      <Destination />
    </div>
  );
};

export default Home;
