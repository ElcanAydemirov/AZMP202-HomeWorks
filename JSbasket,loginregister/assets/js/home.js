import { getData, setData } from "./helpers.js";
import { products } from "./data.js";

const users = getData("users") || [];
const loggedInUser = users.find((user) => user.girilib);
const productsContainer = document.getElementById("productsContainer");
const userDropdown = document.getElementById("dropdownMenu");
const basketCountElement = document.getElementById("basketItemCount");

function updateUserNavbar() {
    const userLink = document.getElementById("userDropdown");

    if (loggedInUser) {
        userLink.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${loggedInUser.ad}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                <li><a class="dropdown-item" href="#" id="logout">Logout</a></li>
            </ul>
        `;

        document.getElementById("logout").addEventListener("click", () => {
            loggedInUser.girilib = false;
            setData("users", users);
            alert("Ugurla cixis etdiniz.");
            location.replace("login.html"); 
        });

    } else {
        userLink.innerHTML = `
            <a class="nav-link" href="login.html">User</a>
        `;
    }
}

products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-md-4");
    productDiv.innerHTML = `
        <div class="card mb-4">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p><strong>$${product.price.toFixed(2)}</strong></p>
                <button class="btn btn-primary add-to-basket" data-id="${product.id}">Sebete Əlavə Et</button>
            </div>
        </div>
    `;
    productsContainer.appendChild(productDiv);
});

const addToBasketButtons = document.querySelectorAll(".add-to-basket");

addToBasketButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find((prod) => prod.id === productId);

        if (!loggedInUser) {
            alert("Sebete əlavə etmək üçün daxil olun.");
            location.replace("login.html");
            return;
        }
        addToBasket(product);
        alert(`${product.title} - elave olundu`);
        updateNavbarItemCount();
    });
});

function addToBasket(product) {
    let existingProductIndex = loggedInUser.sebet.findIndex(
        (p) => p.id === product.id
    );

    if (existingProductIndex > -1) {
        loggedInUser.sebet[existingProductIndex].quantity += 1;
    } else {
        loggedInUser.sebet.push({ ...product, quantity: 1 });
    }

    setData("users", users);
}

function updateNavbarItemCount() {
    let totalItems = 0;
    if (loggedInUser && loggedInUser.sebet) {
        loggedInUser.sebet.forEach(product => {
            totalItems += product.quantity;
        });
    }
    if (basketCountElement) {
        basketCountElement.textContent = totalItems;
    }
}

updateUserNavbar();
updateNavbarItemCount();
