import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/destination", label: "Destination" },
        { path: "/flight", label: "Flight" },
        { path: "/booking", label: "Booking" },
        { path: "/blog", label: "Blog" },
        { path: "/contactus", label: "ContactUs" },
      ];
  return (
    <>
    
    <nav className="bg-white  text-black p-2 shadow-lg text-md">
      <div className="container  pt-8 mx-auto flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <div className="text-2xl font-bold font-sans">Daily Travel</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex font-normal lg:space-x-6 space-x-4">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons (Hidden on Small Screens) */}
        <div className="hidden lg:flex lg:space-x-4 space-x-2 text-sm">
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
            Login
          </button>
          <button className="bg-blue-950  text-white py-2 px-4 rounded hover:bg-indigo-950">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-3xl text-black focus:outline-none"
          >
            &#8801;
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Buttons for Mobile View */}
          <div className="flex flex-col space-y-2 mt-4 px-4">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
              Login
            </button>
            <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-indigo-950">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  


    </>
  );
};
export default Navbar




// <div>
     
    

    // <nav className="bg-white text-black p-2 shadow-lg text-md">
    //   <div className="container pt-8 mx-auto flex items-center justify-between md:justify-around">
    //     {/* Logo */}
    //     <div className="text-2xl  font-bold font-sans">Daily Travel</div>
        
    //     {/* Navigation Links */}
       

    //     <ul className="md:flex font-normal lg:space-x-6 space-x-4 md:justify-between hidden">
    //         {navLinks.map(({path,label}) => (
    //         <li key={path}>
    //             <NavLink to={path}
    //               className={({ isActive }) =>
    //                 isActive
    //                   ? "text-black "
    //                   : "text-gray-700 hover:text-black"
    //               }>
    //                 {label}
    //               </NavLink>

    //         </li>


    //         ))}
    //         </ul>
          
        
        // {/* Buttons */}
        // <div className="hidden md:flex lg:space-x-4 space-x-2 text-sm">
        //   <button className="bg-gray-200  text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
        //     Login
        //   </button>
        //   <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-indigo-950">
        //     Sign Up
        //   </button>
        // </div>

    //     <div className="md:hidden p-6">
    //        <NavLink className=" font-bold text-3xl text-black " href="#">&#8801;</NavLink>
    //     </div>
    //   </div>
    // </nav>
    // </div>

