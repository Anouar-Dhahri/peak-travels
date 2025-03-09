import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  handleNavClose: () => void;
};
const MobileNavbar = ({ showNav, handleNavClose }: Props) => {
  const open = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/** OVERLAY */}
      <div
        className={`fixed ${open} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/** LINKS */}
      <div className = {`text-white ${open} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {navLinks?.map((link: Record<string, string>) => (
          <Link key={link?.id} href={link?.url}>
            <p className=" text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link?.label}
            </p>
          </Link>
        ))}
        {/** CLOSE BTN */}
        <CgClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          onClick={handleNavClose}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
