import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  return (
    <>
      <Form btnName={"Add"} setInput = {setInput} setData = {setData} data = {data}/>
      <List data={data} setData={setData}/>
    </>
  )
}

export default App
