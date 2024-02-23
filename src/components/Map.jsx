import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants/constants";
import styles, { layout } from "../style";


const MapComponent = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div className="flex flex-row mr-100" style={{ marginTop: "50px" }}>
      <div>
        <GoogleMap
          mapContainerStyle={{
            height: "500px", width: "500px"
          }}
          center={selectedLocation}
          zoom={15}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
            mapTypeId: 'hybrid'
          }}
          onLoad={onMapLoad}
        >
          <MarkerF
            position={selectedLocation}
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          />
        </GoogleMap>
      </div>
      <div>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} max-w-[470px] mt-5 ml-64`}>
              Find a better card deal in few easy
              steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-64`}>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            
          </div>
        </section>
      </div>

    </div>

  );
};

export default MapComponent;
