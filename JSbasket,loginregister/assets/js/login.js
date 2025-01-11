import { getData, setData } from "./helpers.js";

const form = document.querySelector("form");
const nameOrEmail = document.querySelector(".nameOrEmail");
const password = document.querySelector(".password");

let istifadeciler = getData("users") || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const istifadeci = istifadeciler.find(
        (istifadeci) =>
            (istifadeci.ad === nameOrEmail.value || istifadeci.email === nameOrEmail.value) &&
            istifadeci.parol === password.value
    );

    if (!istifadeci) {
        alert("inputlardan hansininsa deyeri sehvdi!");
        return;
    }

    istifadeci.girilib = true;
    setData("users", istifadeciler);

    alert("Sisteme ugurla daxil oldunuz");
    location.replace("index.html");
});
