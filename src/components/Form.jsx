import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3x7far1', 'template_51canpf', form.current, 'P7XIKHm70FW4V-piM')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              title: 'Exito!!',
              text:'El formulario fue enviado',
              icon:'success',
              color: '#F1CAA3',
              confirmButtonColor:'#17180F',
              iconColor: '#F1CAA3',
              background: '#3d422a',
            })
        }, (error) => {
            console.log(error.text);
        });

    };
  return (
    <>
    <div className='col-span-2 row-span-2'>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <label className='text-[#F1CAA3]'>Nombre</label>
            <input className='rounded-md px-2' type="text" name="nombre"placeholder='Juan' required />
            <label className='text-[#F1CAA3] mt-2'>Apellido</label>
            <input className='rounded-md px-2' type="text" name="apellido"placeholder='Perez' required />
            <label className='text-[#F1CAA3] mt-2'>Teléfono</label>
            <input className='rounded-md px-2' type="phone" name="direccion"placeholder='3446123123'required pattern="/^\\(?(\d{3,5})?\\)?\s?(15)?[\s|-]?(4)\d{2,3}[\s|-]?\d{4}$/" />
            <label className='text-[#F1CAA3] mt-2'>Dirección</label>
            <input className='rounded-md px-2' type="text" name="telefono"placeholder='Urquiza 2233'required/>
            <label className='text-[#F1CAA3] mt-2 px-2'>E-mail</label>
            <input className='rounded-md px-2' type="email" name="email" placeholder='Ejemplo@ejemplo.com' />
            <label className='text-[#F1CAA3] mt-2'>Mensaje</label>
            <textarea className='resize-none rounded-md px-3' name="mensaje" placeholder='Su mensaje ...'/>
            <button type="submit" value="Send" className='mt-4 text-[#F1CAA3] rounded-lg border-2 border-[#F1CAA3] hover:bg-[#16180f] hover:scale-110'>Enviar</button>
        </form>
    </div>
    </>
  )
}

export default Form