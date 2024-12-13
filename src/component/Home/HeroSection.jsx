import React from 'react'
import img1 from '../../assets/images/yellowGirlFinal2.png'
import bg1 from '../../assets/background/4.png'
import bg11 from '../../assets/background/fliped-bg.png'
import img2 from '../../assets/images/Edited2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import sider from '../../assets/images/sider1.png'

const HeroSection = () => {
  return (
    <div>
         
        <div
          className="relative pt-20 lg:pt-0 lg:mb-0 mb-20  lg:h-[550px] flex items-center justify-center">

          {/* Overlay to darken the background */}
          <div className="hidden md:flex absolute z-0 left-0 bg-opacity-70">
            <img className='md:h-[350px] lg:h-[400px] w-auto' src={bg1} alt="img"  />
          </div>
          <div className="hidden md:flex lg:hidden z-0 absolute bottom-30 right-0 bg-opacity-70">
            <img className='h-[400px] w-auto' src={bg11} alt=""  />
          </div>
    
          {/* Content */}
          <div className="relative z-10 container mx-auto px-9 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="flex flex-col  left-section lg:pl-10 w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl text-blue-950 lg:text-5xl xl:text-6xl font-bold mb-4">
                Travel Memories You'll Never Forget
              </h1>
              <p className="text-gray-700  mb-6">
                Two proximately switches detect when the value has reached the end
                of its travel.
              </p>
              <div className="buttons sm:w-auto flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start pb-14">
                <button className="bg-blue-950 w-[220px] font-medium text-white px-6 py-3 rounded-md hover:bg-blue-900">
                  Find Out More
                </button>
                <button className="bg-gray-200 w-[220px] font-medium  text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300">
                  Play Demo
                </button>
              </div>
            </div>
    
            {/* Right Section */}
            <div className="right-section w-full md:w-1/2 flex justify-center">
              <img
                src={img1}
                alt="Travel Memories"
                className="w-full max-w-lg "
              />
            </div>
          </div>



          {/* <<<<<<<<<<<<<<<<<<< */}





          

          
        </div>

        <div className="relative my-4  pb-10 lg:h-[350px] flex items-center justify-center">
         
        <div className="hidden md:flex absolute z-0 right-0 top-0 bg-opacity-70">
            <img className=' w-auto' src={sider} alt="img"  />
          </div>
        
          {/* Content */}
          <div className=" container mx-auto px-9 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="left-section w-full lg:w-1/2 flex justify-center">
              <img
                src={img2}
                alt="Form Section Image"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
    
            {/* Right Section */}
            <div className="right-section m-5 py-4 lg:w-1/2 bg-white px-6 ">
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

export default HeroSection