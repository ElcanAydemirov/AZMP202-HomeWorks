import { getData, getDataById, deleteData, putData, postData } from "./constants.js";
const cards = document.querySelector(".cards");

let array = null;

async function getProducts() {
    const { data } = await getData("products");
    array = data;
    console.log(data);

    drawCards(array);
}

getProducts();

const search = document.querySelector("#search");

function drawCards(arr) {
    cards.innerHTML = "";
    arr.forEach(element => {
        cards.innerHTML += `
        <div class="card">
            <img class = "imgindex" src=${element.image} alt="">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <div class="price d-flex">
                <p>price:</p>
                <p>${element.price}</p>
            </div>
        </div>
        `;
    });
}

search.addEventListener("keyup", () => {
    const filtered = array.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
    );
    drawCards(filtered);
});

