import React from 'react'
import Image from 'next/image'

export default function Card({make, col, desc, img}) {
  return (
    <div className={`${col} w-1/6 h-96 p-5 m-1 rounded place-items-center `} >
        <img src={img}></img>   
        <div className='flex text-4xl p-3 justify-center'>{make}</div>
        <div className='flex  justify-center p-3 m-3' >{desc}</div>
        <div className='flex hover:shadow-lg border-solid border border-black border- rounded-2xl p-2 my-9 justify-center  '> Learn More</div>
    </div>

  )
}

