import React, { useEffect, useState } from "react";
import axios from "axios";

function Flag() {
  const [countryInfo, setCountryInfo] = useState([]); // Initializing state for country information.

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/BRA`) // Making an HTTP GET request to get information about Brazil.
      .then((response) => {
        setCountryInfo(response.data[0]); // Updating 'countryInfo' state with the response data for Brazil.
      })
      .catch((error) => {
        console.log(error); // Logging any errors that occur during the API request.
      });
  };

  return (
    <div className="flag-section d-flex flex-column gap-2 ">
      <h2>My Country is: {countryInfo.name?.common}</h2>{" "}
      {/* // Displaying the
      common name of the country. */}
      <h5>The Official name is: {countryInfo.name?.official}</h5>{" "}
      {/* // Displaying
      the official name of the country. */}
      <h5>The population is: {countryInfo.population} millions of people</h5>
      {/* Displaying the population of the country. */}
      <img
        className="p-2 mt-3 rounded border border-secondary"
        src={countryInfo.flags?.png}
        alt={countryInfo.flags?.alt}
      />{" "}
      {/* // Displaying the country's flag image with alt text. */}
    </div>
  );
}

export default Flag;
