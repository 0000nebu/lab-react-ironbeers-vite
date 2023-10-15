import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => res.json()) 
        .then(data => {
            setBeers(data.beers);
        })
    }, []);

  

    return (
        <div className="container">
            <h1>Beers</h1>
            <Link to={'/beers'}>Beers</Link>
            <Link to={'/random-beer'}>Random Beer</Link>
            <Link to={'/new-beer'}>New Beer</Link>
        
            </div>
        
    );
}
