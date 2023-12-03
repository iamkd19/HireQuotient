// Navbar.js

import React from "react";
import { Outlet, Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-red-50 border-b-2 border-solid border-[rgba(118, 117, 117, 0.05)] p-6 mt-[-5px]">
      <div className="flex items-center">
        {/* Your logo or brand name can go here */}
        <span className="text-xl font-bold">Your Brand</span>
      </div>

      <div className="flex items-center space-x-16  ">
        <Link to="/features" className="text-base">
          Features
        </Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/pricing" className="text-base">
          Pricing
        </Link>
        <Link to="/testimonials" className="text-base">
          Testimonials
        </Link>
        <div className="bg-white p-4 py-2 px-5 rounded-md">
          <Link to="/buytemplate" className="font-bold text-base">
            Buy Template
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
