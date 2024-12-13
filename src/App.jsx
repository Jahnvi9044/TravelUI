import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './component/NotFound'
import Footer from './component/Footer'
import Destination from './component/Destination'
import Blog from './component/Blog'
import Booking from './component/Booking'
import Home from './component/Home'
import Flight from './component/Flight'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import Contactus from './component/Contactus'

function App() {


  return (
    <div>
     
    
     
      <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/booking" element={<><Booking /><Footer></Footer></>}/>
          <Route path="/blog" element={<><Blog /><Footer></Footer></>}/>
          <Route path="/flight" element={<><Flight /> <Footer></Footer></>}/>
          <Route path="/destination" element={<><Destination /><Footer></Footer></>}/>
          <Route path="/contactus" element={<><Contactus /> <Footer/></>}/>
          <Route path="*" element={<NotFound />}/>
          <Route/>
       </Routes>
      </BrowserRouter>
    </div>

   

  )
}

export default App
