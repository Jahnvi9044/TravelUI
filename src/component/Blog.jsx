import React from 'react'
import bg3 from '../assets/background/6.png'
import pahalgam from '../assets/images/untitled/9.png'
import b1 from '../assets/images/OurBlog/1.png'
import b2 from '../assets/images/OurBlog/2.png'
import b3 from '../assets/images/OurBlog/3.png'
import b4 from '../assets/images/OurBlog/4.png'
import b6 from '../assets/images/OurBlog/6.png'
import b7 from '../assets/images/OurBlog/7.png'



const Blog = () => {
  return (
    <div className="relative">
      

      <section className="relative z-10 our-blog bg-cover bg-center pt-16 px-8" style={{ backgroundImage: 'url(https://example.com/background-image.jpg)' }}>
       <div className="relative z-10">
         <h2 className="text-3xl text-center mb-8">
          <span className="font-bold">Our</span> Blog
         </h2>
         <p className='text-center font-medium text-gray-700 mb-12' >
             An insight of the incredible experience of the world.
         </p>
        </div>
       <div>
          <img src={bg3} alt="" className=' flex absolute z-0 top-0 left-1/2 transform -translate-x-1/2 translate-y-0' />
       </div>
     
       <div>
          <img src={b1} alt="" className='flex opacity-15 absolute z-0 top-3 left-1/4 transform -translate-x-1/2 translate-y-0' />
       </div>

{/* <<<<<<<<<<<<<<<<<<<<<< */}
<div className="relative z-10 my-4 h-screen pt-10 pb-10  lg:h-[350px] flex items-center justify-center">
      
          <div className="container mx-auto md:px-9 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="left-section w-full lg:w-1/2 flex justify-center">
              <img
                src={pahalgam}
                alt="Form Section Image"
                className="w-full max-w-lg  md:rounded-lg  shadow-lg"
              />
            </div>
    


     

    {/* Content - takes full width on mobile, 50% on larger screens */}
    <div className="relative z-10 hidden md:flex md:flex-col md:blog-text p-4 lg:px-10 md:px-16 lg:w-1/2 ">
      <h3 className="text-2xl font-bold mb-4">Beautiful Kashmir Let's Travel</h3>
      <p className="text-lg text-gray-700 mb-4">
        We are ready to help you build and realize the room design that you dream of, with our experts and also the best category recommendations for you.
      </p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read more →
      </a>
    </div>

    <div className="p-5 md:hidden blog-card max-w-md mx-auto bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">Beautiful Kashmir Let's Travel</h3>
          <p className="text-gray-600">
            We are ready to help you build and realize the room design that you
            dream of, with our experts and also the best category recommendations
            for you.
          </p>
          <a href="#" className="text-blue-600 font-bold mt-4 inline-block">
            Read more →
          </a>
        </div>
  </div>
  </div>
</section>



{/* >>>>>>>>>>>>>>>>>> */}
       <div>
          <img src={b7} alt="" className='hidden lg:flex absolute  z-0 top-96  opacity-[0.6] right-0 transform -translate-x-1/2 translate-y-0' />
       </div>

       <div>
          <img src={b6} alt="" className='hidden md:flex absolute  z-0 top-2/4 left-28 transform -translate-x-1/2 translate-y-0' />
       </div>

{/* Blog Section 2 */}
<section className="relative z-10 our-blog bg-cover bg-center pb-16 px-8" style={{ backgroundImage: 'url(https://example.com/background-image.jpg)' }}>
<div className="relative z-10 my-4 h-screen pt-10 pb-10  lg:h-[350px] flex items-center justify-center">
      
      <div className="container mx-auto md:px-9 flex flex-col lg:flex-row items-center justify-between">
      
        

      {/* Left Section */}
      <div className=" left-section w-full lg:w-1/2 flex lg:hidden justify-center">
          <img
            src={pahalgam}
            alt="Form Section Image"
            className="w-full max-w-lg  md:rounded-lg  shadow-lg"
          />
        </div>



{/* Content - takes full width on mobile, 50% on larger screens */}
<div className="hidden md:flex md:flex-col md:blog-text p-4 lg:px-10 md:px-16 lg:w-1/2 ">
  <h3 className="text-2xl font-bold mb-4">Beautiful Kashmir Let's Travel</h3>
  <p className="text-lg text-gray-700 mb-4">
    We are ready to help you build and realize the room design that you dream of, with our experts and also the best category recommendations for you.
  </p>
  <a href="#" className="text-blue-600 font-semibold hover:underline">
    Read more →
  </a>
</div>

<div className="p-5 md:hidden blog-card max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4">Beautiful Kashmir Let's Travel</h3>
      <p className="text-gray-600">
        We are ready to help you build and realize the room design that you
        dream of, with our experts and also the best category recommendations
        for you.
      </p>
      <a href="#" className="text-blue-600 font-bold mt-4 inline-block">
        Read more →
      </a>
    </div>


        {/* Left Section */}
    <div className=" hidden  left-section w-full lg:w-1/2 lg:flex justify-center">
          <img
            src={pahalgam}
            alt="Form Section Image"
            className="w-full max-w-lg  md:rounded-lg  shadow-lg"
          />
        </div>
</div>
</div>

</section>


    </div>
  )
}

export default Blog