import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Project01 from "../../assets/Images/projects/01Architecture.svg";
import Project02 from "../../assets/Images/projects/02IAAS Academy01.svg";
import Logo from "../../assets/Images/home/banner02.jpg";
import Brochure from "../../assets/Images/projects/01Brochure01.svg";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [currentOverlay, setCurrentOverlay] = useState(null);
  const [websiteIndex, setWebsiteIndex] = useState(0);
  const [imageType, setImageType] = useState("website");

  const websiteOverlays = [
    { src: Project01, label: 'Architecture' },
    { src: Project02, label: 'IAAS Academy' },
  ];

  const logoOverlay = { src: Logo, label: 'Logo' };
  const brochureOverlay = { src: Brochure, label: 'Brochure' };

  const imageBounds = [
    [0, 0],
    [-2400, 4500]
  ];

  useEffect(() => {
    const initialMap = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
      scrollWheelZoom: false,
    });

    const mapWidth = 4500;
    const mapHeight = 2400;

    const centerCoordinates = [-mapHeight / 2, mapWidth / 2];
    initialMap.setView(centerCoordinates, 1);

    setMap(initialMap);
    updateOverlay(initialMap, 0, "website");

    return () => {
      initialMap.remove();
    };
  }, []);

  const updateOverlay = (map, index, type) => {
    if (currentOverlay) {
      map.removeLayer(currentOverlay);
    }

    const overlay =
      type === "website" ? websiteOverlays[index] :
      type === "logo" ? logoOverlay :
      brochureOverlay;

    const newOverlay = L.imageOverlay(overlay.src, imageBounds).addTo(map);
    setCurrentOverlay(newOverlay);
    map.fitBounds(imageBounds);
  };

  const handleWebsiteChange = (event) => {
    const selectedIndex = websiteOverlays.findIndex(overlay => overlay.label === event.target.value);
    setWebsiteIndex(selectedIndex);
    setImageType("website");
    updateOverlay(map, selectedIndex, "website");
  };

  const handleLogoClick = () => {
    setImageType("logo");
    updateOverlay(map, 0, "logo");
  };

  const handleBrochureClick = () => {
    setImageType("brochure");
    updateOverlay(map, 0, "brochure");
  };

  return (
    <div className="container flex flex-col mt-20">
      <div className="flex items-center gap-3">
        <p className="font-ContentText text-2xl text-darkblue capitalize">View our latest creations</p>
        
        {/* Dropdown for Websites */}
<<<<<<< HEAD
        <div className="relative z-0 mb-4 mt-2">
          <select
            className={`block  font-bold w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none 
              ${imageType === "website" ? "bg-darkblue text-white" : "bg-myyellow text-gray-600"} `}
            onChange={handleWebsiteDropdownChange}
            value={websiteOverlays[websiteIndex]?.label}
          >
             
            {websiteOverlays.map((overlay, index) => (
              <option key={index} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${isHovered ? 'text-2xl' : 'text-lg'}`} value={overlay.label}>{overlay.label}</option>
            ))}
          </select>
        </div>
        
        {/* Dropdown for Logos */}
        <div className="relative z-10 mb-4 mt-2">
          <button
            className={`block  font-bold w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none
              ${imageType === "logo" ? "bg-darkblue text-white" : "bg-myyellow text-gray-600"}`}
            onChange={handleLogoDropdownChange}
            // value={logoOverlays[logoIndex]?.label}
            value={logoOverlays.label}
          >
            {/* {logoOverlays.map((overlay, index) => (
              <button key={index} value={overlay.label}>{overlay.label}</button>
            ))} */}
            Logo
          </button>
        </div>
=======
        <select
          className={`px-4 py-2 rounded shadow ${
            imageType === "website" ? "bg-darkblue text-white" : "bg-myyellow text-darkblue"
          }`}
          onChange={handleWebsiteChange}
          value={websiteOverlays[websiteIndex]?.label}
        >
          {websiteOverlays.map((overlay, index) => (
            <option key={index} value={overlay.label}>
              {overlay.label}
            </option>
          ))}
        </select>
>>>>>>> refs/remotes/origin/main

        {/* Button for Logo */}
        <button
          className={`px-4 py-2 rounded shadow ${
            imageType === "logo" ? "bg-darkblue text-white" : "bg-myyellow text-darkblue"
          }`}
          onClick={handleLogoClick}
        >
          View Logo
        </button>

        {/* Button for Brochure */}
        <button
          className={`px-4 py-2 rounded shadow ${
            imageType === "brochure" ? "bg-darkblue text-white" : "bg-myyellow text-darkblue"
          }`}
          onClick={handleBrochureClick}
        >
          View Brochure
        </button>
      </div>

      <div className="relative w-full">
        <div id="map" className="h-screen w-full rounded-md overflow-hidden shadow-lg"></div>
      </div>
    </div>
  );
};

export default MapComponent;
