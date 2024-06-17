import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchPage from './stores/pages/WatchPage'
import Furniturepage from './stores/pages/FurniturePage'
import MobileSingle from './singles/MobileSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/abc'element={<Kitchen/>}/>
        <Route path='/mobiles'element={<MobilePage/>}/>
        <Route path='/Computers'element={<ComputersPage/>}/>
        <Route path='/Watches'element={<WatchPage/>}/>
        <Route path='/Furniture'element={<Furniturepage/>}/>
        <Route path= '/mobiles/:id'element={<MobileSingle/>}/>
       
      
      </Routes>
     
    </div>
  )
}

export default App
