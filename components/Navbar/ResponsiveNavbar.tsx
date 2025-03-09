"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleNavClose = () => setShowNav(false);
  return (
    <div>
      <Navbar handleNavShow={handleNavShow}/>
      <MobileNavbar showNav={showNav} handleNavClose={handleNavClose}/>
    </div>
  );
};

export default ResponsiveNavbar;
