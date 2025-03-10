import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { RiHotelBedLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4  sm:mt-12 w-[95%] sm:w-[80%]">
      {/** FIRST SEARCH INPUT */}
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input
            type="text"
            placeholder="Where are you going ?"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/** SECOND SEARCH INPUT */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
          <input
            type="date"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/** THIRD SEARCH INPUT */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
          <input
            type="date"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/** FOURTH SEARCH INPUT */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className="w-6 h-6 text-blue-600" />
        <div className="w-full">
          <p className="text-lg font-medium mb-[0.2rem]">Guests</p>
          <div className="flex flex-row space-x-4   ">
            <div className="flex flex-1">
              <GoPerson className="w-6 h-6 text-gray-800" />
              <select className="w-full h-6 border-none outline-none">
                <option>1 Guest(s)</option>
                <option>2 Guest(s)</option>
                <option>3 Guest(s)</option>
                <option>4 Guest(s)</option>
                <option>5 Guest(s)</option>
              </select>
            </div>
            <div className="flex flex-1">
              <RiHotelBedLine className="w-6 h-6 text-gray-800" />
              <select className="w-full h-6 border-none outline-none">
                <option>1 Room(s)</option>
                <option>2 Room(s)</option>
                <option>3 Room(s)</option>
                <option>4 Room(s)</option>
                <option>5 Room(s)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
