import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={` text-white font-medium py-6 pl-16 pr-12 flex justify-between items-center gap-3`}
    >
      <div className=" flex items-center gap-2">
        <img src={logo} alt="" />
        <h1 className=" text-3xl">NAME</h1>
      </div>
      <div className=" text-lg flex items-center gap-5 justify-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/fleet"}>Fleet</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className=" flex justify-center items-center gap-4 text-lg ">
        <Link to={"/login"} className="bg-[#AA8B65] py-2 px-6 rounded-md">
          Login
        </Link>
        <Link to={"/register"} className="">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
