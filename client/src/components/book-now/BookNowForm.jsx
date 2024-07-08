import React, { useState } from "react";
import bookNowIcon from "../../assets/icons/book-now-icon.png";
import iconBg from "../../assets/icons/icon-bg.png";
import { FaChevronDown } from "react-icons/fa";

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "",
    message: "",
    pickupLocation: "",
    dropOffLocation: "",
    vehicle: "Mercendes Benz s550",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="font-medium text-white flex flex-col justify-center items-center gap-4 bg-backgroundSlate py-8 px-4 mt-2">
      <div className="relative -mt-14 w-14">
        <img src={iconBg} className="" alt="" />
        <img
          src={bookNowIcon}
          className="w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col justify-center items-center gap-1 ">
          <h1 className=" text-3xl">Book Now</h1>
          <p className=" text-opacity-50 text-white">
            Global reservation center
          </p>
          <div className=" bg-lightishGray h-0.5 w-28 rounded my-1.5"></div>
          <p className=" text-opacity-50 text-white">(888) 826-3431</p>
          <p className=" text-opacity-50 text-white">
            specialservices@brandname.com
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" max-[410px]:min-w-[320px] min-[410px]:min-w-[390px] sm:min-w-[450px] flex flex-col gap-3 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
            required
          />
          <input
            type="text"
            name="company"
            onChange={handleChange}
            placeholder="Company"
            className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
            required
          />
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Phone"
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
          <div className="relative w-full text-black">
            <select
              className="block w-full appearance-none bg-white px-4 py-4 pr-8 rounded shadow-sm leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              onChange={handleChange}
              required
            >
              <option
                value={""}
                disabled
                selected
                className="bg-backgroundGray text-white"
              >
                Please select category
              </option>
              <option
                value={"Option 1"}
                className="bg-backgroundGray text-white"
              >
                Option 1
              </option>
              <option
                value={"Option 2"}
                className="bg-backgroundGray text-white"
              >
                Option 2
              </option>
              <option
                value={"Option 3"}
                className="bg-backgroundGray text-white"
              >
                Option 3
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <FaChevronDown />
            </div>
          </div>
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            placeholder="Type your message"
            className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
            rows={3}
            required
          ></textarea>
          <input
            type="text"
            name="pickupLocation"
            onChange={handleChange}
            placeholder="Pick up location"
            className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
            required
          />
          <input
            type="text"
            name="dropOffLocation"
            onChange={handleChange}
            placeholder="Drop off location"
            className=" bg-backgroundGray p-4 placeholder:text-white text-white rounded w-full focus-within:outline-none"
            required
          />
          {/* <div className="relative w-full text-black">
            <select
              className="block w-full appearance-none bg-white px-4 py-4 pr-8 rounded shadow-sm leading-tight focus:outline-none focus:shadow-outline"
              name="pickupLocation"
              onChange={handleChange}
              required
            >
              <option
                value={""}
                disabled
                selected
                className="bg-backgroundGray text-white"
              >
                Pickup location
              </option>
              <option value={"Option 1"} className="bg-backgroundGray text-white">
                Option 1
              </option>
              <option value={"Option 2"} className="bg-backgroundGray text-white">
                Option 2
              </option>
              <option value={"Option 3"} className="bg-backgroundGray text-white">
                Option 3
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <FaChevronDown />
            </div>
          </div>
          <div className="relative w-full text-black">
            <select
              className="block w-full appearance-none bg-white px-4 py-4 pr-8 rounded shadow-sm leading-tight focus:outline-none focus:shadow-outline"
              name="dropOffLocation"
              onChange={handleChange}
              required
            >
              <option
                value={""}
                disabled
                selected
                className="bg-backgroundGray text-white"
              >
                Drop-off location
              </option>
              <option value={"Option 1"} className="bg-backgroundGray text-white">
                Option 1
              </option>
              <option value={"Option 2"} className="bg-backgroundGray text-white">
                Option 2
              </option>
              <option value={"Option 3"} className="bg-backgroundGray text-white">
                Option 3
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <FaChevronDown />
            </div>
          </div> */}
          <h1 className="w-full text-left font-medium text-white">
            Pick 1 from our available vehicles
          </h1>
          <div className=" text-sm sm:text-base grid grid-cols-2 gap-3 items-center justify-center w-full">
            <button
              type="button"
              className={` ${
                formData.vehicle === "Cadillac Escalade"
                  ? " border-white bg-lightCholocate "
                  : " border-darkCholocate bg-darkCholocate "
              } border text-white py-[10px] px-2 sm:px-4 w-full rounded`}
              onClick={() =>
                setFormData({ ...formData, vehicle: "Cadillac Escalade" })
              }
            >
              Cadillac Escalade
            </button>
            <button
              type="button"
              className={` ${
                formData.vehicle === "Mercendes Benz s550"
                  ? " border-white bg-lightCholocate "
                  : " border-darkCholocate bg-darkCholocate "
              } border text-white py-[10px] px-2 sm:px-4 w-full rounded`}
              onClick={() =>
                setFormData({ ...formData, vehicle: "Mercendes Benz s550" })
              }
            >
              Mercendes Benz s550
            </button>
          </div>
          <button className=" w-full border border-lightCholocate text-white bg-lightCholocate py-3 px-4 text-center rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
