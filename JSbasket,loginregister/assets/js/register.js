import { getData, setData } from "./helpers.js";

const formRegister = document.querySelector(".formRegister");
const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");

let users = getData("users") || [];

class User {
    constructor(name, email, password) {
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLogged = false;
        this.basket = [];
    }
}

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!userName.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
        alert("All fields are required!");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }

    if (users.some((user) => user.email === email.value)) {
        alert("This email is already in use!");
        return;
    }

    const newUser = new User(userName.value, email.value, password.value);
    users.push(newUser);
    setData("users", users);

    alert("Registration successful!");
    formRegister.reset();
    location.replace("login.html");
});
