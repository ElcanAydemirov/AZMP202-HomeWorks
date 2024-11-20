import { getData,setData } from "./helpers.js"

const form = document.querySelector("form")
const name = document.querySelector("#name")
const email = document.querySelector("#name")
const password = document.querySelector(".password")
const submitBtn = document.querySelector(".submit")

class users {
    constructor(name,email,password) {
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLogged = false;
    }
}

let arr = getData("users") || []

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const userObj = new users(name.value,email.value,password.value)
    arr.push(userObj);

    form.reset();
})



