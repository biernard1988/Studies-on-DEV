import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

function Map() {
  const [userCountry, setUserCountry] = useState(""); // Initializing state for the user's country.

  const [countryCoordinates, setCountryCoordinates] = useState([
    -3.1197873, -60.0238478,
  ]); // Initializing state for country coordinates.
  const key = import.meta.env.VITE_API_KEY; // Getting an API key from environment variables.

  useEffect(() => {
    // Using the useEffect hook for side effects (API request).

    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}`)
      .then((response) => {
        const country = response.data.location.country; // Extracting the user's country from the API response.
        setUserCountry(country); // Updating the 'userCountry' state with the user's country.

        setCountryCoordinates([
          // Updating the country coordinates based on the API response.
          response.data.location.lat,
          response.data.location.lng,
        ]);
      })
      .catch((error) => {
        console.log("Error requesting: ", error); // Logging any errors that occur during the API request.
      });
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>My City is: {userCountry}</h1>{" "}
      {/* // Displaying the user's country
      retrieved from the API. */}
      <MapContainer
        id="map"
        center={countryCoordinates}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={countryCoordinates}>
          <Popup>'Aqui é minha cidade natal!'</Popup> // Pop-up message on the
          marker.
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
