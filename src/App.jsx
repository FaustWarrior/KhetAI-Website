import React, { useState } from "react";

import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import SearchLocationInput from "./components/GooglePlacesApi";
import MapComponent from "./components/Map";
import { InputWSearch } from "./components/InputWSearch";


function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
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
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
        <InputWSearch />
        <MapComponent selectedLocation={selectedLocation} />
       </div>
     </div>
   </div>
  );
}


export default App;
