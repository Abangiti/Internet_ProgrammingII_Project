import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logos.png'

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
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/Event"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Event
                </NavLink>
               
                    <div onClick={toggleAvatarDropdown} className=" transition-all duration-500 ">
                    <span className="cursor-pointer font-bold text-blue-500 ">Services</span>
                    <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2 z-10`}>
                        <div className='p-4 flex flex-col '>
                            <NavLink to="/Birthday">Birthday</NavLink>
                            <NavLink to="/grad">Graduation</NavLink>
                            <NavLink to="/Concert">Concert</NavLink>
                            <NavLink to="/Wedding">Wedding</NavLink>
                            <NavLink to="/Funeral">Funeral</NavLink>
                        </div>
                    </div>
                </div>
                
                <NavLink
                    to="/Aboutus"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    About Us
                </NavLink>
            </>
        );
    };

    return (
        <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
            <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
                <img src={logo} alt="" width={100} height={100} />
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        <img className='w-20' src="WellnessFusion.png" alt="" />
                    </a>
                    <button
                        onClick={toggleNav}
                        className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
                    >
                        <svg
                            className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
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
                        <svg
                            className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
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
                    </button>
                </div>
                <nav className="hidden md:flex space-x-4">
                    {navList()}
                </nav>
                <div
                    className={`${openNav ? '' : 'hidden'
                        } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
                >
                    {navList()}
                </div>
                <div className=" relative space-x-5 transition-all duration-500">
                <NavLink
                    to="/Login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Log In
                </NavLink>
                
                <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Sign In
                </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
