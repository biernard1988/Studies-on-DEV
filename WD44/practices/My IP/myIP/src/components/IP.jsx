import axios from "axios";
import React, { useEffect, useState } from "react";

function IP() {
  // Defining a functional React component named 'IP'.
  const [userIP, setUserIP] = useState("8.8.8.8"); // Initializing state variable 'userIP' with a default value of "8.8.8.8".

  const key = import.meta.env.VITE_API_KEY; // Getting an API key from environment variables.

  useEffect(() => {
    // Using the useEffect hook to handle side effects.

    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_EXr5A9VkNP1Qvj6hSItVnktJLNR7T&ipAddress=8.8.8.8"
      ) // Making an HTTP GET request to the 'geo.ipify.org' API.
      .then((response) => {
        setUserIP(response.data.ip); // Updating 'userIP' with the IP address from the API response.
      })
      .catch((error) => {
        console.log(error); // Logging any errors to the console.
      });
  });

  return (
    <div>
      <h1>My IP is: {userIP}</h1>{" "}
      {/* // Rendering the user's IP address retrieved
      from the API. */}
    </div>
  );
}

export default IP;
