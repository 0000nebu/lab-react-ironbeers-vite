import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section>
      <h1>Beers List</h1>
      <section className="row">
        {data.map((beer) => (
          <div className="col-3 p-5" key={beer._id}>
            <h3>
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            </h3>
            
          </div>
        ))}
      </section>
    </section>
  );
}

export default AllBeersPage;