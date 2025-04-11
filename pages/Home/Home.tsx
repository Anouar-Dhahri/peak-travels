import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotels from "./Hotels/Hotels";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotels />
      <WhyChoose />
      <Reviews />
      <News />
      <Newsletter />
    </div>
  );
};

export default Home;
