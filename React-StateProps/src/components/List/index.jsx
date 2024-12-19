import React from 'react';
import "./index.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';

const List = ({ data, setData }) => {
  return (
    <>
      {data.map((task) => {
        return (
          <ul key={task.id} data-id={task.id}>
            <li>
              <span>{task.value}</span>
              <span style={{ display: "flex", gap: "0.5rem" }}>
                <FaTrash
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={(e) => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "Are you sure to delete?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes"
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setData(data.filter((t) => t.id !== task.id)); // Task silinir
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your task has been deleted.",
                          icon: "success"
                        });
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
                      inputValue: task.value, // Mövcud dəyər
                      inputAttributes: {
                        autocapitalize: "off"
                      },
                      showCancelButton: true,
                      confirmButtonText: "Save",
                      preConfirm: (editedValue) => {
                        if (!editedValue.trim()) {
                          Swal.showValidationMessage("Task cannot be empty!");
                          return false;
                        }
                        return editedValue;
                      }
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setData(
                          data.map((t) =>
                            t.id === task.id ? { ...t, value: result.value } : t
                          )
                        ); // Task yenilənir
                        Swal.fire({
                          title: "Updated!",
                          text: "Your task has been updated.",
                          icon: "success"
                        });
                      }
                    });
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
