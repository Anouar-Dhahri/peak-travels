import NewsCard from "@/components/NewsCard/NewsCard";
import SectionHeader from "@/components/SeactionHeader/SectionHeading";
import React from "react";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeader
        title="Exciting Travel News For You"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, beatae!"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Australia"
            date="1 April 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 place to visit in Turkey"
            date="2 April 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 place to visit in Italy"
            date="3 April 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 place to visit in New Zealand"
            date="4 April 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
