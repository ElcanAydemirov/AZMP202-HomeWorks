import { getData,setData } from "./helpers.js"

const formRegister = document.querySelector("form")
const nameOrUsername = document.querySelector("#nameOrUsername")
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

formRegister.addEventListener("submit",(e) =>{
    e.preventDefault();

    arr.find((data) => {
        if (password === data.password && (nameOrUsername.value === data.email || nameOrUsername.value === data.name) ) {
            data.isLogged = true;
            location.replace = ("/index.html")
        }else{
            alert("your password or nameemail incorrect")
        }
    })
})