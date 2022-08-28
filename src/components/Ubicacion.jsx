import React from 'react'
import { motion } from "framer-motion"

function Ubicacion() {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 , scale:0, rotate:0,}}
        animate={{ opacity: 1 , scale:1,}}
        transition={{ duration: 2, delay:1 }} 
    className=''>
      <h2 className='text-[#F1CAA3] font-bold text-xl text-center'>Estamos en:</h2>
      <iframe className='w-full rounded-xl mt-4 shadow-[0_0px_10px_5px_rgba(0,0,0,0.3)] shadow-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.0413501627443!2d-58.54405403065773!3d-33.01029268767794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007f9fdf2220f%3A0x57268e548292cbfe!2sUrquiza%202233%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1661035635572!5m2!1ses!2sar" width="300" height="200"></iframe>
    </motion.div>
    </>
  )
}

export default Ubicacion