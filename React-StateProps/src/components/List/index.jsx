import React from 'react';
import "./index.css";
import { FaTrash } from "react-icons/fa";

const List = ({ data, setData }) => {
  return (
    <>
      {data.map((task) => {
        return (
          <ul key={task.id} data-id={task.id}>
            <li>
              <span>{task.value}</span>
              <span>
                <FaTrash
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={(e) => {
                  setData([...data.filter((task) => task.id !== e.target.closest("ul").getAttribute("data-id"))])  
                  }}
                />
              </span>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default List;
