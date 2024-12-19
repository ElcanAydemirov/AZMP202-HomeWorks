import React from 'react'
import './index.css'
import { nanoid } from 'nanoid'
import Swal from 'sweetalert2';


const Form = ({cName,btnName,setInput,setData,data}) => {
  
  return (<>
    <form action="" className='form' onSubmit={
      (e) => {
        e.preventDefault()
        const inputValue = e.target.firstChild.value.trim();
        if (inputValue == "") {
          Swal.fire({
            icon: "error",
            title: "Inputlari doldurun",
            text: "Inputlari doldurun",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          return
        }
        const obj = {
          id:nanoid(),
          value: inputValue
        }
        console.log(obj);      
       setData([...data,obj]);

       Swal.fire({
        title: "Added Succesfully",
        icon: "success",
        draggable: true
      });
       e.target.reset()
      }
    }>
      <input type="text" placeholder='task'/>
      <button type='submit' className={cName}>{btnName}</button>
    </form>
    </>
  )
}

export default Form