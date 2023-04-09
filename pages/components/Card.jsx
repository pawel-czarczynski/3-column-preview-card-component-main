import React from 'react'

export default function Card({make, col, desc, img}) {
  col="bg-red-500"
  return (
    <div className={`${col} bg-blue-600 w-[250px] h-[400px] p-5 m-1 rounded place-items-center `} >
        <img src={img}></img>   
        <div className='flex text-4xl p-3 justify-center cursor-pointer'>{make}</div>
        <div className='flex  justify-center h-48 m-2' >{desc}</div>
        <div className='flex hover:shadow-lg border-solid border border-black border- rounded-2xl p-2 my-1 justify-center  '> Learn More</div>
    </div>

  )
}


