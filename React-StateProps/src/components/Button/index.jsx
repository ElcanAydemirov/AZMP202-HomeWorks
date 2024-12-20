import React from 'react';
import './index.css';
import Swal from 'sweetalert2';

const Button = ({ cName, btnText, data, setData, setFilteredData }) => {
    return (
        <button
            className={cName}
            onClick={() => {
                if (btnText === "allTodos") {
                    setFilteredData([...data]);
                } else if (btnText === "allPendingTodos") {
                    const pendingTodos = data.filter((todo) => !todo.isCompleted);
                    setFilteredData(pendingTodos);
                } else if (btnText === "allCompletedTodos") {
                    const completedTodos = data.filter((todo) => todo.isCompleted);
                    setFilteredData(completedTodos);
                } else if (btnText === "clearAll") {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setData([]);
                            setFilteredData([]);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                }
            }}
        >
            {btnText}
        </button>
    );
};

export default Button;
