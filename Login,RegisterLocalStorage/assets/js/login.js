import { getData, setData } from "./helpers.js";

const form = document.querySelector("form");
const nameOrEmail = document.querySelector(".nameOrEmail");
const password = document.querySelector(".password");

let arr = getData("users") || []; 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameOrEmail.value.trim() || !password.value.trim()) {
        alert("Inputlar boş ola bilməz");
        return;
    }

    const user = arr.find(
        (data) =>
            (nameOrEmail.value === data.email || nameOrEmail.value === data.name) &&
            password.value === data.password
    );

    if (user) {
        user.isLogged = true;
        setData("users", arr); 
        alert("Uğurla daxil oldunuz!");
        location.replace("/Login,RegisterLocalStorage/index.html"); 
    } else {
        alert("Email/ad və ya şifrə səhvdir");
    }
});
