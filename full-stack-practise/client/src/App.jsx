import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useNavigate } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  const getdata = async() => {
    const data = await axios("http://localhost:3000/api/products")
    console.log(data.data);
    
  }
  const nav = useNavigate()

  useEffect(() => {
    
    getdata()
  }, [])
  return (
    <>

    </>
  )
}

export default App
