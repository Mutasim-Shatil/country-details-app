import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDInformation from "../../CountryDInformation/CountryDInformation";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [newCountry, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      {newCountry.map((country) => (
        <CountryDInformation country={country}></CountryDInformation>
      ))}
      {/* <h1>country details: {countryName}</h1>
      <p>capital: {newCountry.length.capital}</p> */}
    </div>
  );
};

export default CountryDetails;
