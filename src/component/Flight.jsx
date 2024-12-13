import React from 'react'
import img2 from '../assets/images/Edited2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";


const Flight = () => {
  return (
    <div>  <div className="relative my-28 py-10 h-screen pt-10 pb-10 lg:h-[350px] flex items-center justify-center">
    {/* Content */}
    <div className="container mx-auto px-9 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="left-section w-full lg:w-1/2 flex justify-center">
        <img
          src={img2}
          alt="Form Section Image"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section */}
      <div className="right-section py-4 lg:w-1/2 bg-white px-6 ">
        <form className="flex flex-col gap-6">
          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="text-md bg-gray-200 w-max rounded-md font-medium px-2 p-1 text-black mb-1 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" /> Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Blank"
              defaultValue="Blank"
              className="w-full px-4 py-2 border-b  text-gray-600 focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Date and Place */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label
                htmlFor="date" 
                className=" text-md font-medium bg-gray-200 rounded-md  px-3 w-max text-black mb-1 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faCalendar} className="text-black" /> Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border-b text-gray-600 border-gray-300 focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Place */}
            <div>
              <label
                htmlFor="place"
                className="text-md font-medium px-3 rounded-md w-max bg-gray-200 text-black mb-1 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faLocationArrow} className="text-black" /> Place
              </label>
              <input
                type="text"
                id="place"
                placeholder="Rajasthan"
                defaultValue="Rajasthan"
                className="w-full px-4 py-2 border-b  text-gray-600 border-gray-300  focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-around space-x-4">
    <button
      type="button"
      className="w-max font-medium bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
    >
      Preview Hotel
    </button>
    <button
      type="submit"
      className="w-max font-medium bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
    >
      Book Now
    </button>
    </div>
        </form>
      </div>
    </div>
  </div>
    

  </div>
  )
}

export default Flight