import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3JpZGhhcjA4IiwiYSI6ImNtN284Z212bzA5cmIybW9wcXc1enlpM20ifQ.BEcIZJ9lF9IPy_hSmcH-vQ';

const locations = [
  { name: 'Cardiff', coordinates: [-3.1791, 51.4816] },
  { name: 'Midlands', coordinates: [-1.9381, 52.4797] }, // Birmingham approx
  { name: 'London', coordinates: [-0.1276, 51.5074] },
  { name: 'Newport', coordinates: [-2.9984, 51.5842] },
  { name: 'Bristol', coordinates: [-2.5879, 51.4545] },
  { name: 'Swansea', coordinates: [-3.9396, 51.6214] },
];

const MapSection = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-2.5, 51.5], // Central point among all cities
      zoom: 6.5,
    });

    // Add zoom and rotation controls to the map
    map.addControl(new mapboxgl.NavigationControl());

    // Add markers
    locations.forEach((location) => {
      new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup().setText(location.name)) // Optional popup
        .addTo(map);
    });

    return () => map.remove(); // Clean up on unmount
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6 text-center">
          Our Location
        </h2>
        <div
          ref={mapContainerRef}
          className="w-full h-96 rounded-xl overflow-hidden shadow-md border border-border"
        />
      </div>
    </section>
  );
};

export default MapSection;
