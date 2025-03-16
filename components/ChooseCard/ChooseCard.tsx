import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
};

const ChooseCard = ({ title, image }: Props) => {
  return (
    <div>
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
      <p className="mt-2 text-center text-gray-700 font-medium text-xs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
        sapiente eos dolorum vero in iste.
      </p>
    </div>
  );
};

export default ChooseCard;
