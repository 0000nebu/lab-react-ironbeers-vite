import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

function RandomBeerPage() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random/`)
        
        .then(res => res.json()) 
        .then(data => {
            setData(data);
        
        })
    }, []);

    return <>
    <h3>RAndon</h3>
    <img src={data?.image_url} alt={data?.name} />
    <h3>beers {data?.name}</h3>
    <h3>beers {data?.tagline}</h3>
    <p>beers {data?.first_brewed}</p>
    <p>beers {data?.attenuation_level}</p>
    <p>{data?.description}</p>
    <p>{data?.contributed_by}</p>
    </>
  
}

export default RandomBeerPage