import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const linkClass = "cursor-pointer text-gray-700 hover:text-indigo-600 transition";

  const links = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500} offset={-70} className={linkClass}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} offset={-70} className={linkClass}>
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} offset={-70} className={linkClass}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="education" smooth={true} duration={500} offset={-70} className={linkClass}>
          Education
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} offset={-70} className={linkClass}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} offset={-70} className={linkClass}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-indigo-50 shadow-md sticky top-0 z-50 px-4">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo + Name + Hire Me */}
        <div className="flex items-center gap-3">
          <Link to="home" smooth={true} duration={500} offset={-70} className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Logo" className="w-18 h-12 rounded-full object-cover" />
                 <span className="text-2xl font-bold text-indigo-500">Bijoy.</span>
          </Link>

          
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="/resume.pdf"
          download
          className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
