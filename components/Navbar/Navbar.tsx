"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdAirplaneTicket } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  handleNavShow: () => void;
};

const Navbar = ({ handleNavShow }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg ? "bg-[#222] shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/** LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-col">
            <MdAirplaneTicket className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            peak travels
          </h1>
        </div>
        {/** LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks?.map((link: Record<string, string>) => (
            <Link key={link?.id} href={link?.url}>
              {/* <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                {link?.label}
              </p> */}
              <p className="relative text-white text-base font-medium w-fit block group">
                {link?.label}
                <span className="absolute bottom-0 left-0 h-[3px] bg-yellow-500 w-full scale-x-0 origin-right transition duration-300 group-hover:scale-x-100"></span>
              </p>
            </Link>
          ))}
        </div>
        {/** BUTTON */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-white text-base bg-transparent border-white hover:bg-yellow-500 border-[2px] hover:border-yellow-500 hover:text-black hover:scale-110 transition-all duration-200 skew-x-12 cursor-pointer">
            Book Now
          </button>
          {/** RESPONSIVE */}
          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
            onClick={handleNavShow}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
