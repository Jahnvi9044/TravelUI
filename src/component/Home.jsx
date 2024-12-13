import React from 'react'
import HeroSection from './Home/HeroSection'
import { faMapMarkerAlt, faCalendar, faLocationArrow,faSearch ,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';
import Destination from './Destination';
import Blog from './Blog';
import Booking from './Booking';

const Home = () => {
  return (
    <div>
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Section 2: Find Your Best Destination */}
                    {/*Image galary */}
      <Destination></Destination>

      {/* Section 3: Best Vacation Plan */}

     
       <Booking></Booking>

      {/* Section 4: Blog */}

      <Blog></Blog>


      {/* Footer Section */}
    
     <Footer></Footer>

    </div>
    </div>
  )
}

export default Home