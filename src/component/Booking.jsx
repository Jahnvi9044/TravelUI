import React from 'react'
import { NavLink  } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar, faLocationArrow,faSearch ,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import l1 from '../assets/images/untitled/1.png'
import l2 from '../assets/images/untitled/2.png'
import l3 from '../assets/images/untitled/3.png'
import l4 from '../assets/images/untitled/4.png'
import bg1 from '../assets/images/register-back.webp'

const Booking = () => {
  return (
    <div> <section className="relative best-vacation bg-white py-16 px-8">

       <div>
         <img src={bg1} alt="" className='flex absolute z-5 top-0 left-1/2 w-full transform -translate-x-1/2 translate-y-0' />
       </div>
    <div className='relative'>
    <h2 className="text-3xl text-center mb-8">
      <span className="font-bold">Best</span> Vacation Plan
    </h2>
  
    <p className='text-center font-medium text-gray-700' >Your perfect vacation with our travel agency - Choose among hundereds of all exclusive offers</p>
    <div className="vacation-cards mx-10 grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="vacation-card bg-gray-50 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="h-40 rounded-md mb-4 overflow-hidden">
          <img
            src={l1}  // Add your image URL here
            alt="Rome, Italy"
            className=" w-full h-full object-cover "
          />
        </div>
        {/* Location */}
        <h3 className="text-lg font-bold">Rome, Italy</h3>
        {/* Details Row */}
        <div className="flex justify-between items-center mt-2">
          {/* Duration */}
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPaperPlane} className="text-black" />
            <p className="text-gray-700 text-sm">7-Day Trip</p>
          </div>
          {/* Price and Rating */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-bold text-gray-800">$432.5</p>
            <i className="fas fa-star text-green-500"></i>
            <p className="text-sm text-gray-600">4.5</p>
          </div>
        </div>
      </div>
  
      <div className="vacation-card bg-gray-50 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="h-40  rounded-md mb-4 overflow-hidden">
          <img
            src={l2}  // Add your image URL here
            alt="Delhi, India"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Location */}
        <h3 className="text-lg font-bold">India, Delhi</h3>
        {/* Details Row */}
        <div className="flex justify-between items-center mt-2">
          {/* Duration */}
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPaperPlane} className="text-black" />
            <p className="text-gray-700 text-sm">6-Day Trip</p>
          </div>
          {/* Price and Rating */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-bold text-gray-800">$520.0</p>
            <i className="fas fa-star text-green-500"></i>
            <p className="text-sm text-gray-600">4.7</p>
          </div>
        </div>
      </div>
  
      <div className="vacation-card bg-gray-50 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="h-40 rounded-md mb-4 overflow-hidden">
          <img
            src={l3}  // Add your image URL here
            alt="Chicago, USA"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Location */}
        <h3 className="text-lg font-bold">USA, Chicago</h3>
        {/* Details Row */}
        <div className="flex justify-between items-center mt-2">
          {/* Duration */}
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPaperPlane} className="text-black" />
            <p className="text-gray-700 text-sm">8-Day Trip</p>
          </div>
          {/* Price and Rating */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-bold text-gray-800">$700.0</p>
            <i className="fas fa-star text-green-500"></i>
            <p className="text-sm text-gray-600">4.8</p>
          </div>
        </div>
      </div>
  
      <div className="vacation-card bg-gray-50 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="h-40 rounded-md mb-4 overflow-hidden">
          <img
            src={l4}  // Add your image URL here
            alt="London, UK"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Location */}
        <h3 className="text-lg font-bold">UK, London</h3>
        {/* Details Row */}
        <div className="flex justify-between items-center mt-2">
          {/* Duration */}
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPaperPlane} className="text-black" />
            <p className="text-gray-700 text-sm">7-Day Trip</p>
          </div>
          {/* Price and Rating */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-bold text-gray-800">$650.0</p>
            <i className="fas fa-star text-green-500"></i>
            <p className="text-sm text-gray-600">4.6</p>
          </div>
        </div>
      </div>
    </div>
      <div className='w-full  pt-10 p-2 underline flex justify-center items-center'>
       <NavLink className=" bg-gray-50  ">See more</NavLink>
       </div>
      </div>
  </section>

  </div>
  )
}

export default Booking