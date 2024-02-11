//import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Ps1 from "./Components/ps1"
function App() {
  return (
    <>
    <BrowserRouter>
    { <Navbar />}
    <Routes>
    
      <Route path = "/" element = {<Home />} />
        <Route path = "/ps1" element = {<Ps1 /> }/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
