import React from 'react'
import { motion } from "framer-motion"

function SliderCard({imagen,descripcion, alt }) {
  return (
    <motion.div 
    initial={{ opacity: 0 , x: -50}}
    animate={{ opacity: 1 , x:0}}
    transition={{ duration: 1.5, delay: 1, ease: "anticipate", type: 'spring'}}
    className='w-full mx-auto bg-black rounded-md text-[#F1CAA3] container flex justify-between shadow-md shadow-white'>
        <motion.img 
            initial={{ opacity: 0 , scale:0.5}}
            animate={{ opacity: 1 , scale:1}}
            transition={{ duration: 2, delay:0.5}} className='p-2 w-1/3 my-auto' src={imagen} alt={alt} />
        <motion.p
            initial={{ opacity: 0 , x: 700}}
            animate={{ opacity: 1 , x:0}}
            transition={{ duration: 1.5,delay:1 }}
         className='w-2/3  text-[#F1CAA3] font-semibold text-xl my-auto'>{descripcion}</motion.p>
    </motion.div >
  )
}

export default SliderCard