import React from 'react';
import './index.css';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

const Form = ({ btnName, setData, data }) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const inputValue = e.target.firstChild.value.trim();
        if (inputValue === '') {
          Swal.fire({
            icon: "error",
            title: "Input is empty!",
            text: "Please enter a task.",
          });
          return;
        }

        const newTask = {
          id: nanoid(),
          value: inputValue,
          isCompleted: false,
        };

        setData([...data, newTask]);
        Swal.fire({
          title: "Task Added!",
          icon: "success",
        });
        e.target.reset();
      }}
    >
      <input type="text" placeholder="Enter task..." />
      <button type="submit" className="btn add">{btnName}</button>
    </form>
  );
};

export default Form;
