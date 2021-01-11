import React from "react";

const CountryDInformation = (props) => {
  console.log(props);
  const { name, population, nativeName, region, timezones } = props.country;
  return (
    <div>
      <h3>Country name: {name}</h3>
      <p>Population: {population}</p>
      <p>NativeName: {nativeName}</p>
      <p>Region: {region}</p>
      <p>Timezones: {timezones}</p>
    </div>
  );
};

export default CountryDInformation;
