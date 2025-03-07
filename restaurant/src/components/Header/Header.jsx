import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="bg-[#111] w-full flex justify-between items-center px-12 fixed top-0 z-10">
          <img
            src="./public/logo.png"
            alt="Logo of the restraunt"
            className="w-28 h-20 object-cover"
          />
          <ul className="flex  justify-center items-center gap-6 font-bold text-[#f1f1f1] ">
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">Menu</NavLink>
            </li>
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">Testimonals</NavLink>
            </li>
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">FAQs</NavLink>
            </li>
            <li className="hover:border-b-orange-700 hover:border-b-2 transition-all duration-200 ease-in">
              <NavLink to="/">Contact Us </NavLink>
            </li>
          </ul>

          <div>
            <button class="relative px-4 py-2 tracking-widest transition-all duration-300 shadow-lg bg-gradient-to-r from-[#800020] to-[#A52A2A] text-white hover:border-[#FFD700] hover:border-[0.7px]  hover:from-[#A52A2A] hover:to-[#800020] hover:shadow-[0_0_7px_#FFD700] ">
              Book Your Table
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
