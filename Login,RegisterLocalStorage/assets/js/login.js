import { getData, setData } from "./helpers.js";

const form = document.querySelector("form");
const nameOrEmail = document.querySelector(".nameOrEmail");
const password = document.querySelector(".password");

let arr = getData("users") || []; 

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (nameOrEmail.value.trim() === "" || password.value.trim() === "") {
        alert("inputlar bos ola bilmez");
        return;
    }

    const user = arr.find((data) => {
        return data;
        
        password.value === data.password &&
        (nameOrEmail.value === data.email || nameOrEmail.value === data.name)
    }
    );

    if (user) {
        user.isLogged = true; 
        setData("users", arr); 
        location.replace("/index.html"); 
    } else {
        alert("Your password or name/email is incorrect");
    }
});





