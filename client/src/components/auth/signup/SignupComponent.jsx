import React, { useState } from "react";

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    email2FA: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-backgroundSlate min-h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" text-white flex flex-col gap-3 items-center justify-center max-[410px]:min-w-[340px] min-[410px]:min-w-[405px] sm:min-w-[450px] -mt-16"
      >
        <h1 className=" font-semibold text-4xl mb-3">Sign Up</h1>
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
        <input
          type="text"
          name="email2FA"
          onChange={handleChange}
          placeholder="Email 2FA"
          className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
          required
        />
        <button className=" w-full border border-lightCholocate font-semibold text-white bg-lightCholocate py-3 px-4 text-center rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupComponent;
