import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  const activeClass = "text-indigo-600 font-semibold";
  const normalClass = "text-gray-700 hover:text-indigo-600 transition";
  const links=<>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Projects
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Contact
              </NavLink>
            </li>
  </>
  return (
    <div className="navbar bg-indigo-50 shadow-md sticky  top-0 z-50 px-4">
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

        {/* Logo */}
        <NavLink to="/" className="btn btn-ghost normal-case text-xl font-bold text-indigo-500">
          Bijoy Das
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Resume button */}
      <div className="navbar-end lg:flex">
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
