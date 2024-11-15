const productList = document.getElementById('product-list');
const addButton = document.getElementById('addButton');
const modal = document.getElementById('productModal');
const closeModalButton = document.getElementById('closeModalButton');

// Əvvəlcədən müəyyən edilmiş məhsul məlumatları
let products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  }
];

renderProducts();

addButton.addEventListener('click', addProduct);

closeModalButton.addEventListener('click', closeModal);

function addProduct() {
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  if (!title || !price || !description || !image) {
    alert('Zehmet Olmasa Butun Saheleri Doldurun.');
    return;
  }

  const product = {
    id: products.length + 1,
    title,
    price: parseFloat(price),
    description,
    image
  };
  
  products.push(product);
  renderProducts();

  document.getElementById('title').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';
  document.getElementById('image').value = '';
}

function renderProducts() {
  productList.innerHTML = '';
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price} AZN</p>
      <p>${product.description.slice(0, 50)}...</p>
      <button class="details-button" data-index="${index}">Details</button>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
    productList.appendChild(productCard);
  });

  // Təfərrüatlar və Sil düymələri üçün hadisə dinləyiciləri əlavə edin
  document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', showDetails);
  });
  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', deleteProduct);
  });
}

function deleteProduct(event) {
  const index = event.target.getAttribute('data-index');
  products.splice(index, 1);
  renderProducts();
}

function showDetails(event) {
  const index = event.target.getAttribute('data-index');
  const product = products[index];
  document.getElementById('modalTitle').innerText = product.title;
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalDescription').innerText = product.description;
  document.getElementById('modalPrice').innerText = `Qiymət: ${product.price} AZN`;
  
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
