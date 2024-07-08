import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/register", formData)
      .then((res) => {
        console.log(res);
        toast.success("Registered succesfully");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <motion.div
      variants={animationVariantFadeIn}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className="bg-backgroundSlate min-h-screen flex justify-center items-center "
    >
      <form
        onSubmit={handleSubmit}
        className=" text-white flex flex-col gap-3 items-center justify-center max-[410px]:min-w-[340px] min-[410px]:min-w-[405px] sm:min-w-[450px] -mt-16"
      >
        <h1 className=" font-semibold text-4xl mb-3">Sign Up</h1>
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          placeholder="Full Name"
          className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
          required
        />
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          placeholder="Phone Number"
          className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
          required
        />
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

export default SignupComponent;
