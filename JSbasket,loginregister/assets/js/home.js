import { getData, setData } from "./helpers.js";
import { products } from "./data.js";

// Navbar dinamikası
const users = getData("users") || [];
const loggedUser = users.find((user) => user.isLogged);

// Navbar elementləri
const userDropdown = document.getElementById("userDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const basketLink = document.getElementById("basketLink");

// Əgər istifadəçi daxil olubsa, adı və "Log Out" seçimləri göstərilsin
if (loggedUser) {
    const userName = loggedUser.name;
    userDropdown.querySelector("a").textContent = userName;  // Username göstərilsin
    dropdownMenu.innerHTML = `
        <li><a class="dropdown-item" href="#">${userName}</a></li>
        <li><a class="dropdown-item" href="#" id="logout">Log Out</a></li>
    `;

    // "Log Out" funksiyası
    document.getElementById("logout").addEventListener("click", () => {
        loggedUser.isLogged = false;
        setData("users", users);
        alert("You have logged out successfully!");
        location.reload(); // səhifəni yeniləyərək navbarı yeniləyəcək
    });

    // Basket linki görünməli olacaq
    basketLink.style.display = 'block';
} else {
    // İstifadəçi daxil olmayıbsa, "Login" və "Sign Up" göstərilsin
    dropdownMenu.innerHTML = `
        <li><a class="dropdown-item" href="login.html">Login</a></li>
        <li><a class="dropdown-item" href="register.html">Sign Up</a></li>
    `;

    // Basket linki gizlədilsin
    basketLink.style.display = 'none';
}

// Məhsulların əlavə edilməsi (Artıq data.js-dən import edilir)
const productsContainer = document.getElementById("productsContainer");
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
                <button class="btn btn-primary add-to-basket" data-id="${product.id}">Add to Basket</button>
            </div>
        </div>
    `;
    productsContainer.appendChild(productDiv);
});

// Basketə məhsul əlavə etmək funksiyası
const addToBasketButtons = document.querySelectorAll(".add-to-basket");

addToBasketButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find((prod) => prod.id === productId);

        if (!loggedUser) {
            alert("Please log in to add items to the basket.");
            location.replace("login.html");
            return;
        }

        loggedUser.basket.push(product);
        setData("users", users);

        alert(`${product.title} has been added to your basket.`);
    });
});
