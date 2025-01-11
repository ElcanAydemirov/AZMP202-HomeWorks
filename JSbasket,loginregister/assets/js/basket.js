document.addEventListener("DOMContentLoaded", () => {
    function getData(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    function setData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    const basketTableBody = document.getElementById("basketTableBody");
    const totalPriceElement = document.getElementById("totalPrice");
    const basketItemCountElement = document.getElementById("basketItemCount");

    const users = getData("users");
    const loggedInUser = users.find((user) => user.girilib);

    if (!loggedInUser.sebet) {
        loggedInUser.sebet = [];
    }

    loggedInUser.sebet.forEach(product => {
        if (!product.quantity) {
            product.quantity = 1; 
        }
    });

    function updateBasket() {
        basketTableBody.innerHTML = "";
        let total = 0;
        let itemCount = 0;

        if (!loggedInUser || !loggedInUser.sebet || loggedInUser.sebet.length === 0) {
            basketTableBody.innerHTML = "<tr><td colspan='5' class='text-center'>Your basket is empty.</td></tr>";
            if (totalPriceElement) totalPriceElement.textContent = "0.00";
            if (basketItemCountElement) basketItemCountElement.textContent = "0";
            return;
        }

        loggedInUser.sebet.forEach((product, index) => {
            const productName = product.title || 'Unknown Product';
            const productPrice = product.price || 0;
            const productQuantity = product.quantity || 1;
            const productImage = product.image || ''; 

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${productImage}" alt="${productName}" style="width: 50px; height: auto;"> ${productName}</td>
                <td>${(productPrice * productQuantity).toFixed(2)}</td>
                <td>
                    <button class="btn btn-outline-secondary btn-sm" data-index="${index}" data-action="decrement">-</button>
                    <span class="mx-2">${productQuantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" data-index="${index}" data-action="increment">+</button>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}" data-action="remove">Remove</button>
                </td>
            `;
            
            basketTableBody.appendChild(row);
            total += productPrice * productQuantity;
            itemCount += productQuantity;
        });

        if (totalPriceElement) totalPriceElement.textContent = total.toFixed(2);
        if (basketItemCountElement) basketItemCountElement.textContent = itemCount;
    }

    basketTableBody.addEventListener("click", (event) => {
        const { action, index } = event.target.dataset;

        if (action) {
            const productIndex = parseInt(index);
            const product = loggedInUser.sebet[productIndex];

            if (action === "increment") {
                product.quantity += 1;
            } else if (action === "decrement" && product.quantity > 1) {
                product.quantity -= 1;
            } else if (action === "remove") {
                loggedInUser.sebet.splice(productIndex, 1);
            }

            setData("users", users); 
            updateBasket(); 
            updateNavbarItemCount(); 
        }
    });

    updateBasket();
    updateNavbarItemCount();
});
