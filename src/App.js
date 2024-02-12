import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Moreslok from './components/Moreslok'
import About from './components/About'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
   
    <BrowserRouter>

    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/moreslok' element={<Moreslok/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App