import { getData,setData } from "./helpers.js"

const formRegister = document.querySelector(".formRegister")
const userName = document.querySelector(".userName")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const submitBtn = document.querySelector(".submit")

let arr = [];

class users {
    constructor(name,email,password) {
        this.id = Date.now();
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLogged = false;
    }
}

formRegister.addEventListener("submit",(e) =>{
    e.preventDefault();
    if (userName.value == "" || email.value == "" || password.value == "") {
        alert("inputlar bos ola bilmez")
    }else{

    const obj = new users(userName.value,email.value,password.value)
    arr.push(obj)
    setData("users",arr)

    }
    this.reset();  
    
    
})

