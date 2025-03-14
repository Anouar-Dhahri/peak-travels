import React from "react";

type Props = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-[#222] font-bold">{title}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
