// src/Map.js
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const Map = () => {
  const [estimatedTime, setEstimatedTime] = useState(null);
  useEffect(() => {
    // Create a map instance and set its initial view
    const map = L.map('map').setView([30.059082, 31.48932], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
    const marker = L.marker([30.059082, 31.48932]).addTo(map);

    map.locate({ setView: true, maxZoom: 16 });

    function onLocationFound(e) {
      const radius = e.accuracy / 2;
      L.marker(e.latlng)
        .addTo(map)
        .bindPopup('Your home location...')
        .openPopup();
      L.circle(e.latlng, radius).addTo(map);

      // Add the routing control with routeWhileDragging option
      const control = L.Routing.control({
        waypoints: [
          L.latLng(e.latlng.lat, e.latlng.lng), // Your current location
          L.latLng(30.059082, 31.48932), // Marker location
        ],
        lineOptions: {
          styles: [{ color: 'blue', opacity: 0.8, weight: 6 }],
        },
        routeWhileDragging: true,
        show: false, // Hide the route instructions panel
      }).addTo(map);

      // Listen for the route event to get the estimated time
      control.on('routesfound', function (event) {
        const route = event.routes[0];
        const estimatedTimeInSeconds = route.summary.totalTime; // Total time in seconds
        const estimatedTimeInMinutes = Math.round(estimatedTimeInSeconds / 60);
        setEstimatedTime(estimatedTimeInMinutes);
        // You can use the estimated time as needed in your application
      });
    }

    // Handle location error event
    function onLocationError(e) {
      alert(e.message);
    }
    // Set up event listeners
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    marker.bindPopup('La dolce vita pizzas!').openPopup();

    // Clean up the map instance when the component is unmounted

    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const { latitude, longitude } = position.coords;
    //       map.setView([latitude, longitude], 13);
    //       marker.setLatLng([latitude, longitude]);
    //     },
    //     (error) => {
    //       console.error('Error getting user location:', error);
    //     },
    //   );
    // } else {
    //   console.error('Geolocation is not supported by your browser');
    // }

    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="h-full">
      <div
        id="map"
        className="m-auto mt-5 h-[30rem] w-[50rem] rounded-2xl shadow-xl"
      ></div>
      <div className="m-auto mt-8 text-center font-dance text-5xl font-bold text-orange-500">
        <span className=" ">Estimated Time: {estimatedTime} minutes</span>
      </div>
    </div>
  );
};

export default Map;
