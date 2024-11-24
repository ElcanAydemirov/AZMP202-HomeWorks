import { getDataFromLocalStorage,setToLocalStorage } from "./helpers.js";

const todoInput = document.querySelector(".todoinput");
const toDoForm = document.querySelector(".toDoForm");
const lists = document.querySelector(".lists");
const errorMessage = document.querySelector(".error");

let arr = [];

class Todo {
    constructor(todoText) {
        this.id = Date.now();
        this.todoText = todoText;
        this.completed = false;
    }
}

function drawTodos() {
    lists.innerHTML = "";

    if (arr.length == 0) {
        return;
    }

    arr.forEach((list) => {
        lists.innerHTML += `
            <li class="list-group-item list-group-item-success w-50 m-auto d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" class="checkbox" data-id="${list.id}" ${list.completed ? 'checked' : ''}>
                    <span class="toDoText ${list.completed ? 'text-decoration-line-through' : ''}">${list.todoText}</span>
                </div>
                <div>
                    <button class="btn btn-danger delete" data-id="${list.id}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="btn btn-success edit" data-id="${list.id}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const btnId = btn.getAttribute("data-id");
            const index = arr.findIndex((item) => item.id == btnId);

            if (index !== -1) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        arr.splice(index, 1);
                        setToLocalStorage("users", arr);
                        drawTodos();

                        Swal.fire(
                            'Deleted!',
                            'Your todo has been deleted.',
                            'success'
                        );
                    }
                });
            }
        });
    });

    document.querySelectorAll(".edit").forEach((btn) => {
        btn.addEventListener("click", () => {
            const btnId = btn.getAttribute("data-id");
            const index = arr.findIndex((item) => item.id == btnId);

            if (index !== -1) {
                Swal.fire({
                    title: "Edit your todo",
                    input: "text",
                    inputValue: arr[index].todoText,
                    inputAttributes: {
                        autocapitalize: "off"
                    },
                    showCancelButton: true,
                    confirmButtonText: "Save changes"
                }).then((result) => {
                    if (result.isConfirmed) {
                        arr[index].todoText = result.value;
                        setToLocalStorage("users", arr);
                        drawTodos();

                        Swal.fire({
                            title: "Todo successfully updated!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        });
    });

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const dataId = checkbox.getAttribute("data-id");
            const index = arr.findIndex((item) => item.id == dataId);

            if (index !== -1) {
                arr[index].completed = checkbox.checked;
                setToLocalStorage("users", arr);
                drawTodos();
            }
        });
    });
}

document.querySelector(".allTodos").addEventListener("click", () => {

});

document.querySelector(".completed").addEventListener("click", () => {
    const completedTodos = arr.filter(todo => todo.completed);
    lists.innerHTML = "";
    completedTodos.forEach((list) => {
        lists.innerHTML += `
            <li class="list-group-item list-group-item-success w-50 m-auto d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" class="checkbox" data-id="${list.id}" checked>
                    <span class="toDoText text-decoration-line-through">${list.todoText}</span>
                </div>
                <div>
                    <button class="btn btn-danger delete" data-id="${list.id}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="btn btn-success edit" data-id="${list.id}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </li>
        `;
    });
});

document.querySelector(".pending").addEventListener("click", () => {
    const pendingTodos = arr.filter(todo => !todo.completed);
    lists.innerHTML = "";
    pendingTodos.forEach((list) => {
        lists.innerHTML += `
            <li class="list-group-item list-group-item-success w-50 m-auto d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" class="checkbox" data-id="${list.id}">
                    <span class="toDoText">${list.todoText}</span>
                </div>
                <div>
                    <button class="btn btn-danger delete" data-id="${list.id}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="btn btn-success edit" data-id="${list.id}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </li>
        `;
    });
});

document.querySelector(".clearAll").addEventListener("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete all todos?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, clear all!'
    }).then((result) => {
        if (result.isConfirmed) {
            arr = [];
            setToLocalStorage("users", arr);
            drawTodos();
            Swal.fire(
                'Cleared!',
                'All todos have been cleared.',
                'success'
            );
        }
    });
});

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() === "") {
        errorMessage.classList.remove("d-none");
        errorMessage.classList.add("d-block");
    } else {
        const todoObject = new Todo(todoInput.value.trim());
        arr.push(todoObject);
        todoInput.value = "";
        drawTodos();

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo successfully added!',
            showConfirmButton: false,
            timer: 1500
        });
    }

    setToLocalStorage("users", arr);
});

window.addEventListener("load", () => {
    arr = getDataFromLocalStorage("users") || [];
    drawTodos();
});

window.addEventListener("keyup", () => {
    if (todoInput.value.trim() === "") {
        errorMessage.classList.remove("d-none");
        errorMessage.classList.add("d-block");
    } else {
        errorMessage.classList.remove("d-block");
        errorMessage.classList.add("d-none");
    }
});