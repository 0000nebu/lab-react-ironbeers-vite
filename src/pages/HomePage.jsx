import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import beersImage from "../assets/beers.png"
import random from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

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
            <Link to={'/beers'}>
            <img src={beersImage} alt="beers_image"></img>
            <h3>Beers</h3>
            </Link>

            <Link to={'/random-beer'}>
            <img src={random} alt="beers_random"></img>
            <h3>Random Beers</h3>
            </Link>

            <Link to={'/new-beer'}>
            <img src={newBeer} alt="beers_random"></img>
            <h3>New Beer</h3>
            </Link>
        
            </div>
        
    );
}
