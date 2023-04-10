import React from 'react'
import Card from './Card'


export default function AllCards({data}) {
  let color;
  return (
    <div className='flex md:flex-row flex-col p-2 m-2 w-screen justify-center'> 
        {data.map((car, id) =>(
            <Card key={car.id} make={car.type}  desc={car.description} img={car.imagePath}/>                   
        )        
        )
        }  
    </div>
  )
}
