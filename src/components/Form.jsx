import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3x7far1', 'template_51canpf', form.current, 'P7XIKHm70FW4V-piM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <>
    <div className='col-span-2 row-span-2'>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <label className='text-[#F1CAA3]'>Nombre</label>
            <input className='rounded-md' type="text" name="nombre" />
            <label className='text-[#F1CAA3] mt-2'>Apellido</label>
            <input className='rounded-md' type="text" name="apellido" />
            <label className='text-[#F1CAA3] mt-2'>Teléfono</label>
            <input className='rounded-md' type="phone" name="telefono" />
            <label className='text-[#F1CAA3] mt-2'>E-mail</label>
            <input className='rounded-md' type="email" name="email" />
            <label className='text-[#F1CAA3] mt-2'>Mensaje</label>
            <textarea className='resize-none rounded-md' name="mensaje" />
            <button type="submit" value="Send" className='mt-4 text-[#F1CAA3] rounded-lg border-2 border-[#F1CAA3] hover:bg-[#16180f] hover:scale-110'>Enviar</button>
        </form>
    </div>
    </>
  )
}

export default Form