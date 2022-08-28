import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'


function Products() {
  return (
    <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-2'>
        <ProductCard
          title='producto'
          img={'https://loremflickr.com/g/320/240/furniture'}
          alt='muebles'
          text='Diseñamos y fabricamos todo tipo de muebles y objetos.
          Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
          path='/Contacto'/>
                  <ProductCard
          title='producto'
          img={'https://loremflickr.com/g/320/240/furniture'}
          alt='muebles'
          text='Diseñamos y fabricamos todo tipo de muebles y objetos.
          Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
          path='/Contacto'/>
                  <ProductCard
          title='producto'
          img={'https://loremflickr.com/g/320/240/furniture'}
          alt='muebles'
          text='Diseñamos y fabricamos todo tipo de muebles y objetos.
          Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
          path='/Contacto'/>
                  <ProductCard
          title='producto'
          img={'https://loremflickr.com/g/320/240/furniture'}
          alt='muebles'
          text='Diseñamos y fabricamos todo tipo de muebles y objetos.
          Cocinas, Baños, placares, vestidores, locales comerciales y mucho mas!!'
          path='/Contacto'/>
          
    </motion.div>
  )
}

export default Products