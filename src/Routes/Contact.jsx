import React from 'react'
import Form from '../components/Form'
import Ubicacion from '../components/Ubicacion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../components/Icon'

function Contact() {
  return (
    <>
    
    <div className='container grid grid-cols-3 place-items-center mt-12'>
      <Form/>

      <ul className='grid grid-cols-2 m-2 text-yellow-50'>
        <h2 className='col-span-2 text-center text-[#F1CAA3] font-bold text-xl'>Nuestras Redes:</h2>
          <li className=' p-1 m-2 mr-4 text  shadow-orange-500 shadow-md rounded-xl  hover:bg-stone-700  hover:shadow-md hover:shadow-orange-300 hover:text-orange-400 '> 
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  Instagram</a>
          </li>
          <li className='p-1 m-2 mr-4 text  shadow-blue-600 shadow-md rounded-xl  hover:bg-stone-600 hover:shadow-md hover:shadow-blue-400 hover:text-blue-500'>   
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  facebook</a>
          </li>
          <li className='p-1 m-2 mr-4 text  shadow-green-600 shadow-md rounded-xl hover:bg-stone-600 hover:shadow-md hover:shadow-green-400 hover:text-green-500'>   
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
            <a rel="noopener noreferrer" href=" https://wa.me/numerodecel" target="_blank">  WhatsApp</a>
          </li>
          
          <li className='p-1 m-2 mr-4 text  shadow-green-600 shadow-md rounded-xl  hover:bg-stone-600 hover:shadow-md hover:shadow-green-400 hover:text-green-500'>   
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
            <a rel="noopener noreferrer" href=" https://wa.me/numerodecel" target="_blank">  WhatsApp</a>
          </li>
        </ul>

      <Ubicacion/>
    </div>
    </>
  )
}

export default Contact