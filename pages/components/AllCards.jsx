import React from 'react'
import Card from './Card'
import { cars } from '@/data/cars'

export default function AllCards() {
  return (
    <div className='flex p-2 m-2 w-screen justify-center'> 
        {cars.map((car, id) =>(
            <Card key={car.id} make={car.type} col={car.col} desc={car.description} img={car.imagePath}/>                   
                )        
            )
        }  
    </div>
  )
}
