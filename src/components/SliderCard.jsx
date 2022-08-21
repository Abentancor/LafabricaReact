import React from 'react'

function SliderCard({imagen,descripcion, alt }) {
  return (
    <div className='w-11/12 mx-auto bg-black  text-[#F1CAA3] container flex justify-between h-full mt-16'>
        <img className='p-2 w-1/3 my-auto' src={imagen} alt={alt} />
        <p className='w-1/3  text-[#F1CAA3] font-semibold text-xl my-auto'>{descripcion}</p>
    </div>
  )
}

export default SliderCard