import React from 'react'
import Card from './Card'


export default function AllCards({data}) {
  let color;
  return (
    <div className='flex md:flex-row flex-col p-2 m-2 w-screen justify-center'> 
        {data.map((car, id) =>(
            car.type == "SEDANS"? color="[#e38826]": car.type == "SUVs"? color="[#006970]": color="[#004241]", //assigning colour of card based on car type
            <Card key={car.id} make={car.type} col={color} desc={car.description} img={car.imagePath}/>                   
        )        
        )
        }  
    </div>
  )
}
