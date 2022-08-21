import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon'

function FooterDos() {
  return (
    <>
        <footer className='container grid grid-cols-4 place-items-center footer absolute bottom-0 text-[#F1CAA3] border-t-2 border-black'>
            <div className='p-2 ml-2'>
                <h4  className=' font-bold'>Dirección:</h4>
                <h6  className='text-xs'>Urquiza 2233</h6>
            </div>
            <div className='p-2 ml-2'>
                <h4  className=' font-bold'>Correo:</h4>
                <a  className='text-xs' href="mailto:elcorreoquequieres@correo.com">lafabrica@ejemplo.com</a>
            </div>
            <div className='p-2 ml-2'>
                <h4  className=' font-bold'>Teléfono:</h4>
                <a  className='text-xs' href="tel:123-456-7890p123">tel: 123-456-7890p123</a> <br/>
                <a  className='text-xs' href="tel:123-456-7890p123">tel: 123-456-7890p123</a>
            </div>
            <div className='p-2 ml-2'>
                <h4  className=' font-bold'>Nuestras redes:</h4>
                <ul>
                    <li><FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <a  className='text-xs' rel="noopener noreferrer" href="https://www.instagram.com/la_fabrica68/" target="_blank">  @la_fabrica68</a>
                    </li>
                    <li><FontAwesomeIcon icon="fa-brands fa-facebook" />
                        <a className='text-xs' rel="noopener noreferrer" href="https://www.facebook.com/lafabrica68" target="_blank">  lafabrica68</a>
                    </li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default FooterDos