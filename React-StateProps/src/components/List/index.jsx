import React from 'react';
import './index.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';

const List = ({ data, setData }) => {
  return (
    <>
      {data.map((task) => (
        <ul key={task.id} data-id={task.id}>
          <li><div className="textandcheckbox">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                setData(
                  data.map((t) =>
                    t.id === task.id
                      ? { ...t, isCompleted: !t.isCompleted }
                      : t
                  )
                );
              }}
            />
            <span
              style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
              }}
            >
              {task.value}
            </span>
          </div>

            <span style={{ display: "flex", gap: "0.5rem" }}>
              <FaTrash
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "Do you want to delete this task?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setData(data.filter((t) => t.id !== task.id));
                      Swal.fire("Deleted!", "Your task has been deleted.", "success");
                    }
                  });
                }}
              />
              <FaEdit
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  Swal.fire({
                    title: "Edit Task",
                    input: "text",
                    inputValue: task.value,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    preConfirm: (newValue) => {
                      if (!newValue.trim()) {
                        Swal.showValidationMessage("Task cannot be empty!");
                        return false;
                      }
                      return newValue;
                    },
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setData(
                        data.map((t) =>
                          t.id === task.id ? { ...t, value: result.value } : t
                        )
                      );
                      Swal.fire("Updated!", "Your task has been updated.", "success");
                    }
                  });
                }}
              />
            </span>
          </li>
        </ul>
      ))}
    </>
  );
};

export default List;
