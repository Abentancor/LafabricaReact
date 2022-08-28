import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"


function Navbar() {

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 ,y:-50}}
    animate={{ opacity: 1, scale: 1 ,y:5}}
    transition={{ duration: 1}}
    className='p-2 container flex justify-between text-white shadow-md shadow-black  mb-20 '>
      <Link className='' to='/'>
        <motion.div whileHover={{ scale: 1.1, }}whileTap={{ scale: 0.8 }}  className='p-2 container flex justify-between text-sm font-bold md:text-xl md:font-bold  '>
          <img className='w-16 h-16 my-auto rounded-full' src='src/assets/90642370_509369909747469_1393391283732940476_n.jpg' alt="logo" />
          <h1 className='ml-2 my-auto'>La Fábrica
          <h4 className='mt-auto text-xs text-gray-300 md:text-sm'>muebles & deco</h4>
          </h1>
        </motion.div>
      </Link>
      <div className='my-auto '>
        <ul className=' md:p-2 container flex font-semibold text-xs lg:text-lg'>
            <NavLink to='/Productos'>
              <motion.li whileHover={{ scale: 1.2, }}whileTap={{ scale: 0.9 }} className='px-1 mr-1 md:px-2 md:mr-2 text-[#F1CAA3] hover:scale-110  '>Productos</motion.li>
            </NavLink>
            <NavLink to='/Contacto'>
              <motion.li whileHover={{ scale: 1.2, }}whileTap={{ scale: 0.9 }} className=' px-1 mr-1 md:px-2 md:mr-2 text-[#F1CAA3] hover:scale-110  '>Contacto</motion.li>
            </NavLink>
            <NavLink to='/Acercadenosotros'>
              <motion.li whileHover={{ scale: 1.2,}}whileTap={{ scale: 0.9 }} className='px-1 mr-1 md:px-2 md:mr-2  text-[#F1CAA3] hover:scale-110'>Sobre Nosotros</motion.li>
            </NavLink>
        </ul>
        </div>
    </motion.div>
  )
}

export default Navbar