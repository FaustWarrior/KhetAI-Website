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
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
         <Navbar />
       </div>
     </div>

     <div className={`bg-primary ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
         <Hero />
       </div>
     </div>
    
     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
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
