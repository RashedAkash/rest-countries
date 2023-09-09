import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import  './countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h2 className='title'>World Country Name</h2>
      <div className='cart-container'>
         {
        countries.map(country=> <Country country={country} />)
      }
     </div>
    </div>
  );
};

export default Countries;