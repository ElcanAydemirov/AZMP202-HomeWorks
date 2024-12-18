import React from 'react'
import './index.css'
import { nanoid } from 'nanoid'

const Form = ({cName,btnName,setInput,setData,data}) => {
  
  return (<>
    <form action="" className='form' onSubmit={
      (e) => {
        e.preventDefault()
        const obj = {
          id:nanoid(),
          value:e.target.firstChild.value
        }
        console.log(obj);      
       setData([...data,obj]);
      }
    }>
      <input type="text" placeholder='task'/>
      <button type='submit' className={cName}>{btnName}</button>
    </form>
    </>
  )
}

export default Form