import React from 'react'
import bg2 from '../assets/background/5.png'
import { NavLink  } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar, faLocationArrow,faSearch ,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import bg1 from '../assets/images/register-back.webp'



const Destination = () => {
  return (
    <div>
       <section className=" overflow-hidden">
     
     {/* <<<<<<<<<<<<<< */}
    <section className="relative find-destination  py-16 px-8">
  <div>
      <img src={bg1} alt="" className='flex absolute z-5 top-1 left-1/2 w-full transform -translate-x-1/2 translate-y-0' />
  </div>

  <div>
      <img src={bg2} alt="" className='hidden md:flex absolute  z-0 top-1 left-1/2 transform -translate-x-1/2 translate-y-0' />
  </div>

  <div className=' relative z-10 m-5'>
    <h2 className="text-3xl   text-center mb-8"> <span className='font-bold'>Find Your Best</span> Destination</h2>
    <p className="text-center font-medium text-gray-700 mb-6">
      We have more than 2000 destinations you can choose from.
    </p>
    
    {/* Search bar */}

    <div className="max-w-md mx-auto mb-8 relative">
    {/* Left Icon */}
   <FontAwesomeIcon
     icon={faMapMarkerAlt}
     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white  "/>

    {/* Input Field */}
     <input
      type="text"
      placeholder="Search Destination"
      className="w-full font-medium pl-10 pr-10 py-2 bg-blue-950 border rounded-lg text-white"
     />

     {/* Right Icon */}
     <FontAwesomeIcon
      icon={faSearch}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
     />
   </div>
 </div>
  </section>


<div className=" relative z-20 max-w-screen-xl  pb-10 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto   space-y-24 flex flex-col justify-center">
{/* Image Card Row */}
<div className="flex flex-col sm:flex-row mx-auto">
  {/* Individual Image Cards */}
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="rounded-xl border border-white rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12  sm:h-full  sm:w-full h-56 object-cover sm:hover:scale-150 transform origin-bottom"
      alt="Image 1"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 sm:h-full sm:w-full h-56 object-cover sm:hover:scale-150 transform origin-bottom"
      alt="Image 2"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 sm:h-full sm:w-full h-56 object-cover sm:hover:scale-150 transform origin-bottom"
      alt="Image 3"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 sm:h-full sm:w-full h-56 object-cover sm:hover:scale-150 transform origin-bottom"
      alt="Image 4"
    />
  </a>
</div>

</div>


<div className='w-full  pt-10 p-2 pb-10 underline flex justify-center items-center'>
 <NavLink className=" bg-gray-50  ">See more</NavLink>
 </div>
</section>
   
    </div>
  )
}

export default Destination