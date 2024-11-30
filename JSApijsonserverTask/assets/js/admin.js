import { getData, putData, postData, deleteData } from "./constants.js";

const name = document.querySelector(".name");
const price = document.querySelector(".price");
const description = document.querySelector(".description");
const stock = document.querySelector(".stock");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const image = document.querySelector(".image");
const tBody = document.querySelector("tbody");

let array = null;
let editingProductId = null;

async function getProducts() {
    const { data } = await getData("products");
    array = data;
    console.log(data);
    drawTable(array);
}

getProducts();

function drawTable(arr) {
    tBody.innerHTML = "";
    arr.forEach(element => {
        tBody.innerHTML += `
            <tr>
                <td><img class="img" src="${element.image}"/></td>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>${element.description}</td>
                <td>${element.stock}</td>
                <td>
                    <button class="btn btn-warning edit" data-id="${element.id}">edit</button>
                    <button class="btn btn-danger delete" data-id="${element.id}">delete</button>
                </td>
            </tr>
        `;
    });

    const deleteBnts = document.querySelectorAll(".delete");
    deleteBnts.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const id = e.target.getAttribute("data-id");
            await deleteData("products", id);
            getProducts();
        });
    });

    const editBtns = document.querySelectorAll(".edit");
    editBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute("data-id");
            const productToEdit = array.find(product => product.id == id);
            name.value = productToEdit.name;
            price.value = productToEdit.price;
            description.value = productToEdit.description;
            stock.value = productToEdit.stock;
            image.value = productToEdit.image;
            editingProductId = productToEdit.id;
        });
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const obj = {
        image: image.value,
        name: name.value,
        price: price.value,
        description: description.value,
        stock: stock.value
    };

    if (editingProductId) {

        await putData(`products/${editingProductId}`, obj);
        editingProductId = null;
    } else {
        await postData("products", obj);
    }

    form.reset();
    getProducts();
});
