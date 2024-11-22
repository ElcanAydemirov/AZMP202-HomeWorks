import { getData,setData } from "./helpers.js";

const formRegister = document.querySelector(".formRegister");
const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

let arr = getData("users") || []; 

class User {
    constructor(name, email, password) {
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.password = password; 
        this.isLogged = false;
    }
}

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!userName.value.trim() || !email.value.trim() || !password.value.trim()) {
        alert("Inputlar boş ola bilməz");
        return;
    }

    const newUser = new User(userName.value, email.value, password.value);
    arr.push(newUser);
    setData("users", arr);

    alert("Qeydiyyat uğurla tamamlandı!");
    formRegister.reset(); 
});
