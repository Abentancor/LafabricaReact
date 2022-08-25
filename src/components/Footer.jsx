import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon'


const Footer = () => {

  return (
    <>
        <footer className='container flex flex-row justify-start footer absolute bottom-0'>
            <ul className='flex self-center m-2 text-yellow-50'>
                <li className=' p-1 m-1 text  shadow-orange-500 shadow-md rounded-xl  hover:bg-stone-700  hover:shadow-md hover:shadow-orange-300 hover:text-orange-400 '> 
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  Instagram</a>
                </li>
                <li className='p-1 m-1 text  shadow-green-600 shadow-md rounded-xl  hover:bg-stone-600 hover:shadow-md hover:shadow-green-400 hover:text-green-500'>   
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    <a rel="noopener noreferrer" href=" https://wa.me/numerodecel" target="_blank">  WhatsApp</a>
                </li>
                <li className='p-1 m-1 text  shadow-blue-600 shadow-md rounded-xl  hover:bg-stone-600 hover:shadow-md hover:shadow-blue-400 hover:text-blue-500'>   
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  facebook</a>
                </li>

            </ul>
        </footer>
    </>
  )
}

export default Footer