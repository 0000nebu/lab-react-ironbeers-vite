import React from "react";
import {useForm} from 'react-hook-form';
import Imput from 'https://ih-beers-api2.herokuapp.com/beers/new'

 /*interface IFormInput {
    name: string
    tagline: string
    description: string
    first_brewed:string
    brewers_tips: string
    attenuation_level: number
    contributed_by: string
    
  }*/
  

function AddBeerPage({onCreate}) {
    
    const onSubmit = (beer) => {
        console.log(beer);
        onCreate(beer);
        reset();
    }
    

    const {register, handleSubmit, reset, formState: { errors, isValid }} = useForm({
        mode: 'all',
        defaultValues: {
            name: ''
        }
    })

    
  
    return (
/*<form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ beers}) => <Input {...field} />}
      />
      <Controller
        name="beers"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "name", label: "name" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form> */

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="string" placeholder="name "{...register("name", { required: true, message: 'name is required' })} />
        <input type="string" placeholder="tagline"{...register("tagline")} />
        <input type="string" placeholder="description"{...register("description")} />
        <input type="string" placeholder="first brewed"{...register("first_brewed")} />
        <input type="string" placeholder="brewers tips"{...register("brewers_tips")} />
        <input type="number" placeholder=" attenuation_level"{...register(" attenuation_level")} />
        <input type="string" placeholder="contributed_by"{...register("contributed_by")} />

        <input type="submit" disabled={!isValid} />
        {errors.name && (<div className='invalid-feedback' >{errors.title.message}</div>)}
      </form>
    )
}

export default AddBeerPage;
