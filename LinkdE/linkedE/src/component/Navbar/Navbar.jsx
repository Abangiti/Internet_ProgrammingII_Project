import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenAvatarDropdown(false);
  };

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          activeClassName="text-blue-900"
          className="nav-link"
          onClick={toggleNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/Event"
          activeClassName="text-blue-900"
          className="nav-link"
          onClick={toggleNav}
        >
          Event
        </NavLink>
        <div className="nav-link" onClick={toggleAvatarDropdown}>
          <span className="cursor-pointer font-bold text-blue-500">
            Services
          </span>
          <div className={`dropdown ${openAvatarDropdown ? "show" : ""}`}>
            <NavLink to="/Birthday" onClick={toggleNav}>
              Birthday
            </NavLink>
            <NavLink to="/grad" onClick={toggleNav}>
              Graduation
            </NavLink>
            <NavLink to="/Concert" onClick={toggleNav}>
              Concert
            </NavLink>
            <NavLink to="/Wedding" onClick={toggleNav}>
              Wedding
            </NavLink>
            <NavLink to="/Funeral" onClick={toggleNav}>
              Funeral
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/Aboutus"
          activeClassName="text-blue-900"
          className="nav-link"
          onClick={toggleNav}
        >
          About Us
        </NavLink>
      </>
    );
  };

  return (
    <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <img src={logo} alt="Logo" width={100} height={100} />
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-semibold text-gray-800">
            <img
              className="w-20"
              src="WellnessFusion.png"
              alt="WellnessFusion Logo"
            />
          </NavLink>
          <button
            onClick={toggleNav}
            className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
          >
            {openNav ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">{navList()}</nav>
        <div
          className={`md:hidden ${
            openNav ? "block" : "hidden"
          } mt-4 bg-slate-400 flex flex-col gap-4 p-6 rounded transition-all duration-500`}
        >
          {navList()}
        </div>
        <div className="relative space-x-5 transition-all duration-500">
          <NavLink
            to="/Login"
            activeClassName="text-blue-900"
            className="nav-link"
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="text-blue-900"
            className="nav-link"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
