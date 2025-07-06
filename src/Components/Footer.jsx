import React from "react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-indigo-100  mt-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} 
            alt="Bijoy Das "
            className="w-20 h-20 rounded-full object-cover"
          />
         
        </div>

        {/* Right: Copyright */}
        <div className="text-sm select-none">
          &copy; {new Date().getFullYear()} Bijoy Das. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
