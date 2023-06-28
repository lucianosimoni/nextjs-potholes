"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { dark, light } from "@/app/lib/mapStyles";

const center = {
  lat: 51.5072,
  lng: 0.1276,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "potholes-google-map",
    googleMapsApiKey: "AIzaSyARRJH9A9HwbSQ9j2jgBOB93IoWqvbKtpI",
  });

  const [map, setMap] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const onLoad = useCallback((map: any) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex items-center justify-center w-full h-full bg-cyan-950">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          clickableIcons: false,
          fullscreenControl: false,
          disableDefaultUI: true,
          keyboardShortcuts: false,
          styles: darkMode ? dark : light,
          backgroundColor: "#000",
        }}
      >
        <Marker
          position={{
            lat: 51.5072,
            lng: 0.1276,
          }}
        />
      </GoogleMap>
      <button onClick={() => setDarkMode(!darkMode)}>Change</button>
    </div>
  ) : (
    <div>Loading 🗺️</div>
  );
}

{
  /* <div className="flex items-center justify-center w-full h-full bg-cyan-950">
Hello there 🗺️
</div> */
}
