import React from 'react'

function SliderCard({imagen,descripcion, alt }) {
  return (
    <div className='w-11/12 mx-auto bg-black rounded-md text-[#F1CAA3] container flex justify-between shadow-md shadow-white'>
        <img className='p-2 w-1/3 my-auto' src={imagen} alt={alt} />
        <p className='w-2/3  text-[#F1CAA3] font-semibold text-xl my-auto'>{descripcion}</p>
    </div>
  )
}

export default SliderCard