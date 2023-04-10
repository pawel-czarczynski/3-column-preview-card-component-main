import React from 'react'

export default function Card({make, desc, img}) {
  return (
    <div className={
      make == 'SEDANS' 
      ? 'bg-[#e38826] w-[250px] h-[400px] p-5 rounded place-items-center text-base[15px]'
      : make == 'SUVs' 
      ? 'bg-[#006970] w-[250px] h-[400px] p-5 rounded place-items-center text-base[15px]'
      : 'bg-[#004241] w-[250px] h-[400px] p-5 rounded place-items-center text-base[15px]'

    }>
      
      {/* // `bg-${col} w-[250px] h-[400px] p-5 rounded place-items-center text-base[15px]`} > */}
        <img src={img}></img>   
        <div className='flex text-[#FFFFFFBF] text-4xl p-3 justify-center'>{make}</div>
        <div className='flex text-[#FFFFFFBF] justify-center h-48 m-2' >{desc}</div>
        <div className={make=='SEDANS'
                        ? 'text-[#e38826] hover:text-[#FFFFFFBF] flex border bg-[#FFFFFFBF] rounded-3xl self-center h-9 mx-6 py-1 px-9 cursor-pointer hover:bg-transparent  hover:border-[#FFFFFF]'
                        : make== 'SUVs'
                        ? 'text-[#006970] hover:text-[#FFFFFFBF] flex border bg-[#FFFFFFBF] rounded-3xl self-center h-9 mx-6 py-1 px-9 cursor-pointer hover:bg-transparent  hover:border-[#FFFFFF]' 
                        : 'text-[#004241] hover:text-[#FFFFFFBF] flex border bg-[#FFFFFFBF] rounded-3xl self-center h-9 mx-6 py-1 px-9 cursor-pointer hover:bg-transparent  hover:border-[#FFFFFF]'}>
                          Learn More
          </div>
    </div>

  )
}


