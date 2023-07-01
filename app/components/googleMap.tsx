"use client";

import { useContext, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { ThemeContext } from "./themeProvider";
import { dark, light } from "@/app/lib/mapStyles";
import { getAllPotholes } from "@/app/lib/potholesUtils";
import Pothole from "@/app/lib/interfaces/Pothole";
import MapSVG from "./svg/mapSvg";

export default function Map() {
  const [potholes, setPotholes] = useState<Pothole[]>([]);
  const [error, setError] = useState({ active: false, type: "" });
  const { theme, setTheme } = useContext(ThemeContext);

  const { isLoaded } = useJsApiLoader({
    id: "potholes-google-map",
    googleMapsApiKey: "AIzaSyARRJH9A9HwbSQ9j2jgBOB93IoWqvbKtpI",
  });

  // 🕳️ Fetch Potholes
  useEffect(() => {
    const fetchPotholes = async () => {
      const potholesRes = await getAllPotholes();
      if (!potholesRes) {
        return setError({ active: true, type: "fetchingPotholes" });
      }
      setPotholes(potholesRes);
      console.log("Potholes are:", potholesRes);
    };
    fetchPotholes();
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <>
      {isLoaded ? (
        // 🗺️ Map Loaded
        <div className="flex items-center justify-center w-full h-full bg-cyan-950">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 51.50937994, lng: -0.13048086453 }}
            zoom={10}
            options={{
              clickableIcons: false,
              fullscreenControl: false,
              disableDefaultUI: true,
              keyboardShortcuts: false,
              styles: theme == "dark" ? dark : light,
              backgroundColor: "#000",
            }}
          >
            {potholes.map((pothole, index) => (
              <Marker
                key={index}
                position={{
                  lat: Number(pothole.position.lat),
                  lng: Number(pothole.position.lng),
                }}
              />
            ))}
          </GoogleMap>

          <button
            onClick={handleChangeTheme}
            className={`absolute right-0 top-0 rounded-lg p-4 m-2 border ${
              theme == "dark"
                ? "bg-black text-white border-white"
                : "bg-white text-black border-black"
            }`}
          >
            Change
          </button>
        </div>
      ) : (
        // 🔃 Loading
        <div className="flex flex-col h-full w-full justify-center items-center">
          <MapSVG />
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}
