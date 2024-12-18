import { getData, setData } from "./helpers.js";

const form = document.querySelector("form");
const nameOrEmail = document.querySelector(".nameOrEmail");
const password = document.querySelector(".password");

let users = getData("users") || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Inputların boş olub-olmadığını yoxlayırıq
  if (!nameOrEmail.value.trim() || !password.value.trim()) {
    alert("Fields cannot be empty!");
    return;
  }

  // İstifadəçinin mövcud olub-olmadığını yoxlayırıq
  const user = users.find(
    (u) =>
      (nameOrEmail.value === u.email || nameOrEmail.value === u.name) &&
      password.value === u.password
  );

  if (user) {
    user.isLogged = true; // İstifadəçini logged olaraq işarələyirik
    setData("users", users); // Dəyişikliyi localStorage-də saxlayırıq
    alert(`Welcome back, ${user.name}!`);
    location.replace("index.html"); // Ana səhifəyə yönləndiririk
  } else {
    alert("Incorrect username/email or password.");
  }
});
