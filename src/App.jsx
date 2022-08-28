import Navbar from "./components/Navbar"
import { Outlet } from 'react-router'
import FooterDos from "./components/FooterDos"

function App() {
 
  return (
  <>
    <div className="min-h-screen bg-gradient-to-b from-[#3d422a] to-[#0f0f09]  ">
      <Navbar/>
      <div className="">
        <Outlet className=""/>
      </div>
      <FooterDos/>
    </div>
  </>
  )
}

export default App
