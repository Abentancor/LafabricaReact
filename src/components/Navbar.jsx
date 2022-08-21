import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <div className='p-2 container flex justify-between text-white shadow-md shadow-black  '>
      <Link className='' to='/'>
        <div className='p-2 text-xl font-bold  container flex justify-between hover:scale-110'>
          <img className='w-12 rounded-full' src='\src\assets\90642370_509369909747469_1393391283732940476_n.jpg' alt="logo" />
          <h1 className='ml-2 mt-auto'>La Fábrica
          <h4 className='mt-auto text-sm text-gray-300'>muebles & deco</h4>
          </h1>
        </div>
      </Link>
      <div className='my-auto'>
        <ul className='p-2 container flex '>
            <NavLink to='/Acercadenosotros'>
              <li className='px-2 mr-2  text-[#F1CAA3] hover:scale-110'>Sobre Nosotros</li>
            </NavLink>
            <NavLink to='/Contacto'>
              <li className='px-2 text-[#F1CAA3] hover:scale-110  '>Contacto</li>
            </NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Navbar