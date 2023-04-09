import React from 'react'
import Card from './Card'


export default function AllCards({data}) {
  return (
    <div className='flex p-2 m-2 w-screen justify-center'> 
        {data.map((car, id) =>(
            <Card key={car.id} make={car.type} col={car.col} desc={car.description} img={car.imagePath}/>                   
                )        
            )
        }  
    </div>
  )
}
