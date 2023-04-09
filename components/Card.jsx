import React from 'react'


export default function Card({make, col, desc, img}) {
  return (
    <div className={`bg-${col} w-[250px] h-[400px] p-5 rounded place-items-center text-base[15px]`} >
        <img src={img}></img>   
        <div className='flex text-[#FFFFFFBF] text-4xl p-3 justify-center'>{make}</div>
        <div className='flex  text-[#FFFFFFBF]justify-center h-48 m-2' >{desc}</div>
        <div className={`flex border text-${col} bg-[#FFFFFFBF] rounded-3xl self-center h-9 mx-6 py-1 px-9 cursor-pointer hover:bg-transparent hover:text-[#FFFFFFBF] hover:border-[#FFFFFF]`}> Learn More</div>
    </div>

  )
}


