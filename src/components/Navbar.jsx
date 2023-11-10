import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full py-3">
      <figure className="grid place-items-center">
        <img
          src=""
          alt="Logo"
          className="object-contain aspect-square h-auto w-6 md:w-8 lg:w-10"
        />
      </figure>
      <nav className="grid place-items-center">
        <ul className="flex md:gap-6 lg:gap-8">
          <li className="relative font-semibold py-1 group hover:-translate-y-[2px]">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : "inherit" };
              }}
              to={"/"}
            >
              Home
            </NavLink>
            <span className="absolute bottom-0 transition-all duration-150 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-csi-primary-light w-[50%] group-hover:w-full h-[2px]"></span>
          </li>
          <li className="relative font-semibold py-1 group hover:-translate-y-[2px]">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : "inherit" };
              }}
              to={"/events"}
            >
              Events
            </NavLink>
            <span className="absolute bottom-0 transition-all duration-150 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-csi-primary-light w-[50%] group-hover:w-full h-[2px]"></span>
          </li>
          <li className="relative font-semibold py-1 group hover:-translate-y-[2px]">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : "inherit" };
              }}
              to={"/teams"}
            >
              Our Team
            </NavLink>
            <span className="absolute bottom-0 transition-all duration-150 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-csi-primary-light w-[50%] group-hover:w-full h-[2px]"></span>
          </li>
          <li className="relative font-semibold py-1 group hover:-translate-y-[2px]">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : "inherit" };
              }}
              to={"/hackathons"}
            >
              Hackathon
            </NavLink>
            <span className="absolute bottom-0 transition-all duration-150 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-csi-primary-light w-[50%] group-hover:w-full h-[2px]"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
