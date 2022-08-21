import React from 'react'

function NeonButton({color, icon, text}) {
  return (
    <>
        <li className={`p-1 m-1 text  shadow-${color}-600 shadow-md rounded-xl  hover:bg-stone-600 hover:shadow-md hover:shadow-blue-400 hover:text-blue-500`}>   
            <FontAwesomeIcon icon={icon}/>
            <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  {text}</a>
        </li>
    </>
  )
}

export default NeonButton