import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_BASE_URL}/user/login`, formData)
      .then((res) => {
        console.log(res);
        toast.success("Login succesful");
        if (res.data.admin === true) {
          sessionStorage.setItem("adminToken", res.data.token);
        }
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const animationVariantFadeIn = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={animationVariantFadeIn}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className=" text-white bg-backgroundSlate min-h-screen flex justify-center items-center "
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-7 left-7 flex items-center gap-2"
      >
        <IoArrowBack className=" -mb-0.5" /> <span>Back</span>
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center justify-center max-[410px]:min-w-[340px] min-[410px]:min-w-[405px] sm:min-w-[450px] -mt-16"
      >
        <h1 className=" font-semibold text-4xl mb-3">Login</h1>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
          required
        />
        <button className=" w-full border border-lightCholocate font-semibold text-white bg-lightCholocate py-3 px-4 text-center rounded">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default LoginComponent;
