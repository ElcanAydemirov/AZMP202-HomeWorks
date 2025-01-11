import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext/ThemeContext'
import Main from './layouts'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
    <div style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      <Routes>
        <Route path="/" element={<Main/> }>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
