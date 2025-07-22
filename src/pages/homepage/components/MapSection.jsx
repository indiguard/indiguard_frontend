import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Make sure to import the CSS

// Set your Mapbox access token. 
// It's best practice to store this in an environment variable.
mapboxgl.accessToken = 'pk.eyJ1Ijoic3JpZGhhcjA4IiwiYSI6ImNtN284Z212bzA5cmIybW9wcXc1enlpM20ifQ.BEcIZJ9lF9IPy_hSmcH-vQ';

// Array of locations with their names and coordinates
const locations = [
  { name: 'Cardiff', coordinates: [-3.1791, 51.4816] },
  { name: 'Midlands', coordinates: [-1.9381, 52.4797] }, // Approx. Birmingham
  { name: 'London', coordinates: [-0.1276, 51.5074] },
  { name: 'Newport', coordinates: [-2.9984, 51.5842] },
  { name: 'Bristol', coordinates: [-2.5879, 51.4545] },
  { name: 'Swansea', coordinates: [-3.9396, 51.6214] },
];

const MapSection = () => {
  // Ref for the map container DOM element
  const mapContainerRef = useRef(null);
  // Ref to store the map instance
  const mapRef = useRef(null);

  useEffect(() => {
    // Prevents the map from re-initializing on every render
    if (mapRef.current) return;

    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12', // Using a modern street style
      center: [-2.5, 51.7], // A central point to show all locations
      zoom: 6.5,
    });

    mapRef.current = map;

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker for each location
    locations.forEach((location) => {
      // Create a default Marker
      const marker = new mapboxgl.Marker({
        color: "#6347F9", // You can customize the pin color
      })
      .setLngLat(location.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // Add popups
      .setHTML(`<h3>${location.name}</h3>`))
      .addTo(map);
    });

    // Clean up on component unmount
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className=" text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Our Locations
        </h2>
        <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border-2 border-vlack">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
