import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div>
      <div
        className={` relative z-50 text-white font-medium py-5 lg:py-6 px-6 md:px-3 lg:pl-16 lg:pr-12 flex justify-between items-center gap-3`}
      >
        <div className=" flex items-center gap-1.5 lg:gap-2">
          <img src={logo} className=" w-8 lg:w-auto" alt="" />
          <h1 className=" text-2xl lg:text-3xl">NAME</h1>
        </div>
        <div className=" text-lg hidden md:flex items-center md:gap-3 lg:gap-5 justify-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/fleet"}>Fleet</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className=" hidden md:flex justify-center items-center gap-2 lg:gap-4 text-lg ">
          <Link
            to={"/login"}
            className="bg-lightCholocate py-1 lg:py-2 px-3 lg:px-6 rounded-md"
          >
            Login
          </Link>
          <Link to={"/register"} className="">
            Sign Up
          </Link>
        </div>
        <div className=" flex md:hidden">
          {openMenu ? (
            <MdClose
              onClick={() => setOpenMenu(!openMenu)}
              className=" text-3xl text-stone-50 cursor-pointer mr-3"
            />
          ) : (
            <RiMenu3Fill
              onClick={() => setOpenMenu(!openMenu)}
              className=" text-3xl text-stone-50 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={` absolute md:hidden bg-backgroundBlack text-white top-16 z-40 bottom-0 h-full w-full transition-all duration-500 ease-in ${
          openMenu ? "left-0 " : " -left-[770px]"
        }`}
      >
        <div className=" text-4xl font-semibold flex flex-col gap-6 md:hidden items-center justify-center -mt-14 pb-10 h-full">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/fleet"}>Fleet</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
          <div className=" md:hidden flex flex-col justify-center items-center gap-3 text-3xl font-semibold mt-10 ">
            <Link to={"/login"} className="bg-lightCholocate py-1 px-6 rounded">
              Login
            </Link>
            <Link to={"/register"} className="">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
