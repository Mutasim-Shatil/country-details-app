import React from 'react'
import { Link } from 'react-router-dom'
import "./Country.css"

const Country = (props) => {
    // console.log(props);
    const {name,flag,capital} = props.country
    return (
      <div className="country">
        <div>
          <img src={flag} alt="" />
        </div>
        <div className="country-details">
          <h4>Country Name: {name}</h4>
          <p>Capital: {capital}</p>
          <Link to={`/name/${name}`}>country details</Link>
        </div>
      </div>
    );
}

export default Country
