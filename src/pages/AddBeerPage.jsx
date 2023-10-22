import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
  


function AddBeerPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [postId, SetPostId] = useState(null)

useEffect(() => {
 
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };
  fetch('https://ih-beers-api2.herokuapp.com/beers/new', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));


}, []);


  function createBeer(data) {
    addBeer(data)
      .then(() => {
        navigate("/beers");
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <div>
      {error && (
        <div
          className="alert alert-danger"
          onClick={() => {
            setError(false);
          }}
        >
          Error, revise los datos del formulario
        </div>
      )}
      <form onSubmit={handleSubmit(createBeer)}>
        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>

          <input className="form-control" {...register("name")} />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="tagline">Tagline</label>

          <input className="form-control" {...register("tagline")} />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="tagline">Description</label>

          <textarea className="form-control" {...register("description")} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}


export default AddBeerPage;
