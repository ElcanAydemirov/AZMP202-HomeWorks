import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/layouts/header'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/about'
import Home from '../pages/home'
import Contact from '../pages/contact'

function App() {

  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
