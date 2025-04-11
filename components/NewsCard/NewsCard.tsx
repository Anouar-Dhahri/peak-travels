import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-yellow-600 transition-all duration-200 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCard;
