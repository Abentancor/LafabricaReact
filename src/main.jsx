import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import About from './Routes/About'
import Contact from './Routes/Contact'
import Index from './Routes/Index'
import Products from './Routes/Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route index element={<Index/>}/>
          <Route path='/Acercadenosotros'element={<About/>}></Route>
          <Route path='/Contacto'element={<Contact/>}></Route>
          <Route path='/Productos'element={<Products/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
