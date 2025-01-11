import { getData, setData } from "./helpers.js";

const formRegister = document.querySelector(".formRegister");
const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");

let istifadeciler = getData("users") || [];

class Istifadeci {
    constructor(ad, email, parol) {
        this.id = Date.now();
        this.ad = ad;
        this.email = email;
        this.parol = parol;
        this.girilib = false;
        this.sebet = [];
    }
}

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!userName.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
        alert("Bütün inputlar doldurulmalidir!");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Parollar eyni deyil!");
        return;
    }

    if (istifadeciler.some((istifadeci) => istifadeci.email === email.value)) {
        alert("Bu e-poçt artiq istifadə edilir!");
        return;
    }

    const yeniIstifadeci = new Istifadeci(userName.value, email.value, password.value);
    istifadeciler.push(yeniIstifadeci);
    setData("users", istifadeciler);

    alert("Qeydiyyat olundun!");
    formRegister.reset();
    location.replace("login.html");
});
