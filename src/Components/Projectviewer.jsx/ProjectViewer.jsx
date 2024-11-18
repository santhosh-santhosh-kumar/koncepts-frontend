import Slide  from "../../Pages/Slide";
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Project01 from "../../assets/Images/projects/01Architecture.svg";
import Project02 from "../../assets/Images/projects/02IAAS Academy01.svg";
import Project03 from "../../assets/Images/projects/03Facilitator01.svg";
import Project04 from "../../assets/Images/projects/04Real Estate01.svg";
import Project05 from "../../assets/Images/projects/05Teaching and Coaching01.svg";
import Project06 from "../../assets/Images/projects/06Sangumark Lungi01.svg";
import Project07 from "../../assets/Images/projects/07Events01.svg";
import Project08 from "../../assets/Images/projects/08IT-Industry01.svg";
import Project09 from "../../assets/Images/projects/09Logistics01.svg";
import Logo from "../../assets/Images/home/banner02.jpg";
import Brochure from "../../assets/Images/projects/01Brochure01.svg";

const MapComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [map, setMap] = useState(null);
  const [currentOverlay, setCurrentOverlay] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [websiteIndex, setWebsiteIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);
  const [brochureIndex, setBrochureIndex] = useState(0);
  const [imageType, setImageType] = useState("website");

  const websiteOverlays = [
    { src:Project01, label: 'Website'},
    { src:Project01, label: 'Architecture' },
    { src:Project02, label: 'IAAS Academy' },
    { src:Project03, label: 'Facilitator' },
    { src:Project04, label: 'Real Estate' },
    { src:Project05, label: 'Teaching and Coaching' },
    { src:Project06, label: 'Sangumark Lungi' },
    { src:Project07, label: 'Events' },
    { src:Project08, label: 'IT-Industry' },
    { src:Project09, label: 'IT-Industry' },
  ];

  const logoOverlays = [
    { src: Logo, label: 'Logo' },
  ];

  const brochureOverlays = [
    { src: Brochure, label: 'Brochure' },
  ];

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
    updateOverlay(initialMap, websiteIndex, "website");

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
      type === "logo" ? logoOverlays[index] :
      brochureOverlays[index];

    const newOverlay = L.imageOverlay(overlay.src, imageBounds).addTo(map);
    setCurrentOverlay(newOverlay);
    map.fitBounds(imageBounds);
  };

  const handleLeftArrowClick = () => {
    const overlays = imageType === "website" ? websiteOverlays : 
                     imageType === "logo" ? logoOverlays : brochureOverlays;
    const newIndex = (currentIndex - 1 + overlays.length) % overlays.length;
    setCurrentIndex(newIndex);
    updateOverlay(map, newIndex, imageType);
  };

  const handleRightArrowClick = () => {
    const overlays = imageType === "website" ? websiteOverlays : 
                     imageType === "logo" ? logoOverlays : brochureOverlays;
    const newIndex = (currentIndex + 1) % overlays.length;
    setCurrentIndex(newIndex);
    updateOverlay(map, newIndex, imageType);
  };

  const handleFullscreen = () => {
    if (map) {
      if (map._container.requestFullscreen) {
        map._container.requestFullscreen();
      } else if (map._container.mozRequestFullScreen) {
        map._container.mozRequestFullScreen();
      } else if (map._container.webkitRequestFullscreen) {
        map._container.webkitRequestFullscreen();
      } else if (map._container.msRequestFullscreen) {
        map._container.msRequestFullscreen();
      }
    }
  };

  const handleWebsiteDropdownChange = (event) => {
    const selectedIndex = websiteOverlays.findIndex(overlay => overlay.label === event.target.value);
    setWebsiteIndex(selectedIndex);
    setImageType("website");
    setCurrentIndex(selectedIndex);
    updateOverlay(map, selectedIndex, "website");
  };

  const handleLogoDropdownChange = (event) => {
    const selectedIndex = logoOverlays.findIndex(overlay => overlay.label === event.target.value);
    setLogoIndex(selectedIndex);
    setImageType("logo");
    setCurrentIndex(selectedIndex);
    updateOverlay(map, selectedIndex, "logo");
  };

  const handleBrochureDropdownChange = (event) => {
    const selectedIndex = brochureOverlays.findIndex(overlay => overlay.label === event.target.value);
    setBrochureIndex(selectedIndex);
    setImageType("brochure");
    setCurrentIndex(selectedIndex);
    updateOverlay(map, selectedIndex, "brochure");
  };

  return (
    <>
    {/* <Slide></Slide> */}
    <div className="container flex flex-col mt-20">
      
      <div className='flex items-center gap-3'>
        <p className='font-ContentText text-2xl text-darkblue capitalize'>View our latest creations</p>
        
        {/* Dropdown for Websites */}
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
          <select
            className={`block  font-bold w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none
              ${imageType === "logo" ? "bg-darkblue text-white" : "bg-myyellow text-gray-600"}`}
            onChange={handleLogoDropdownChange}
            value={logoOverlays[logoIndex]?.label}
          >
            {logoOverlays.map((overlay, index) => (
              <option key={index} value={overlay.label}>{overlay.label}</option>
            ))}
          </select>
        </div>

        {/* Dropdown for Brochures */}
        <div className="relative z-10 mb-4 mt-2">
          <select
            className={`block  font-bold w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none 
              ${imageType === "brochure" ? "bg-darkblue text-white" : "bg-myyellow text-gray-600"}`}
            onChange={handleBrochureDropdownChange}
            value={brochureOverlays[brochureIndex]?.label}
          >
            {brochureOverlays.map((overlay, index) => (
              <option key={index} value={overlay.label}>{overlay.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative w-full">
        <div id="map" className="h-screen w-full rounded-md overflow-hidden shadow-lg"></div>
        
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20"
          onClick={handleLeftArrowClick}
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20"
          onClick={handleRightArrowClick}
        >
          &#10095;
        </button>

        {/* Fullscreen Button */}
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20"
          onClick={handleFullscreen}
        >
          &#x26F6;
        </button>
      </div>
    </div>
    </>
  );
};

export default MapComponent;