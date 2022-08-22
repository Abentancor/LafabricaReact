import React from 'react'

function DescriiptionCard() {
  return (
    <>
        <div className='m-4 border-2 p-2 rounded-md shadow-lg shadow-black'>
            <h2 className='font-bold text-xl text-[#F1CAA3] '>somos</h2>
            <div className='grid grid-cols-2 self-center'>
              <p className='m-auto ml-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos maiores voluptate iure, fugiat error necessitatibus laborum facilis velit eius quia eaque, impedit odit praesentium vel nisi ducimus a inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nesciunt exercitationem, provident quo voluptatem molestias quia corrupti eligendi atque libero aliquam, quisquam corporis voluptas debitis autem itaque illum nulla est.</p>
              <img className='h-48 w-48 place-self-center' src="\src\assets\90642370_509369909747469_1393391283732940476_n.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default DescriiptionCard