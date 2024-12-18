import { getData, setData } from "./helpers.js";

const users = getData("users") || [];
const loggedUser = users.find((user) => user.isLogged);
const basketTableBody = document.getElementById("basketTableBody");

if (!loggedUser) {
    alert("Zəhmət olmasa giriş edin!");
    location.replace("login.html");
} else {
    renderBasket();
}

function renderBasket() {
    basketTableBody.innerHTML = "";

    loggedUser.basket.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>
            </td>
        `;
        basketTableBody.appendChild(row);
    });

    document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", (e) => {
            const itemIndex = parseInt(e.target.dataset.index, 10);
            loggedUser.basket.splice(itemIndex, 1);
            setData("users", users);
            renderBasket();
        });
    });
}
