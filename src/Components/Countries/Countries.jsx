import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = country => {
        console.log("I want to add this visited country");
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
    const handleVisitedFlags = flag => {
       const newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        // 
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Country :{visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags ={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;