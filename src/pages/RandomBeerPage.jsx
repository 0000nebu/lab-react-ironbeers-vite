import React, { useEffect, useState } from 'react';


function RandomBeerPage() {
    const [beer, setBeer ]= useState(null);
    

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random/`)
        
        .then(res => res.json()) 
        .then(data => {
            setBeer(data);
        
        })
    }, []);

    if(!beer) {
        <div>Loading...</div>
    }

    return (<>
    <h3>RAndon</h3>
    <img src={beer.image_url} alt={data?.name} />
    <h3>beers {beer.name}</h3>
    <h3>beers {beer.tagline}</h3>
    <p>beers {beer.first_brewed}</p>
    <p>beers {beer.attenuation_level}</p>
    <p>{beer.description}</p>
    <p>{beer.contributed_by}</p>
    </>
    )
}

export default RandomBeerPage