import React, { useState } from "react";

import styles from "./style";
import { Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import SearchLocationInput from "./components/GooglePlacesApi";
import MapComponent from "./components/Map";
import ChatBot from "./components/ChatBot";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 18.5204,
    lng: 73.8567,
  });

  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className="w-full">
       <div className="pe-8 pr-7 ">
         <Navbar />
       </div>
     </div>

     <div className="w-full px-8">
       <div className="pe-8 pr-7 ">
         <Hero />
       </div>
     </div>
    
     <div className="w-full px-8">
       <div className="pe-8 pr-7">
        <Stats />
        <Business />
        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
        <MapComponent selectedLocation={selectedLocation} />
        <Testimonials />
        <ChatBot />
        <CardDeal />
        <Clients />
        <CTA />
        <Footer />
        
       </div>
     </div>
   </div>
  );
}


export default App;
