
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


function BeerDetailsPage() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        
        .then(res => res.json()) 
        .then(data => {
            setData(data);
        
        })
    }, []);

    if (data === null) {
        return <div>Loading...</div>
    }

    return <>
    <img src={data?.image_url} alt={data?.name} />
    <h3>beers {data?.name}</h3>
    <h3>beers {data?.tagline}</h3>
    <p>beers {data?.first_brewed}</p>
    <p>beers {data?.attenuation_level}</p>
    <p>{data?.description}</p>
    <p>{data?.contributed_by}</p>
    </>
}

export default BeerDetailsPage;
