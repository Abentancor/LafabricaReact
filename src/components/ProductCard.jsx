import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

function ProductCard({title, img, alt, text,path}) {
  return (
    <motion.div            
        initial={{ opacity: 0 , scale:0,}}
        animate={{ opacity: 1 , scale:1,}}
        transition={{ duration: 1, delay:1 }} 
        className="flex flex-col place-items-center bg-white border-none rounded-md mx-auto">
        <motion.img            
        className="w-full" src={img} alt={alt} />
        <motion.h3 
                initial={{ opacity: 0 , x:-100,}}
                animate={{ opacity: 1 , x:0,}}
                transition={{ duration: 1, delay:2 }} 
                className="text-xl font-bold ">{title}</motion.h3>
        <motion.p 
                        initial={{ opacity: 0 , x:100,}}
                        animate={{ opacity: 1 , x:0,}}
                        transition={{ duration: 1, delay:2 }} className="px-2 text-center">{text}</motion.p>
        <NavLink to={path}>
            <motion.button
                            initial={{ opacity: 0 , y:100,}}
                            animate={{ opacity: 1 , y:0,}}
                            transition={{ duration: 1, delay:2 }}  whileHover={{ scale: 1.1,}}whileTap={{ scale: 0.5 }}
                className='my-4 px-4 text-[#F1CAA3] rounded-lg border-2 border-[#F1CAA3] bg-[#16180f]'>Ver
            </motion.button>
        </NavLink>
    </motion.div>
  )
}

export default ProductCard