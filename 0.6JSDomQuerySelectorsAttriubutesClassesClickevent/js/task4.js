// Main container
const container = document.createElement("div");
container.style.position = "relative";
container.style.height = "100vh";
document.body.appendChild(container);

// Menu Container
const menu = document.createElement("div");
menu.style.width = "200px";
menu.style.height = "100vh";
menu.style.backgroundColor = "#006d81";
menu.style.color = "white";
menu.style.position = "fixed";
menu.style.top = "0";
menu.style.left = "-200px"; // Gizli başlamaq üçün
menu.style.transition = "0.3s";
menu.style.paddingTop = "20px";
container.appendChild(menu);

// Menu items
const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];
menuItems.forEach((item) => {
  const menuItem = document.createElement("div");
  menuItem.textContent = item;
  menuItem.style.padding = "15px";
  menuItem.style.cursor = "pointer";
  menuItem.style.fontSize = "18px";
  menuItem.addEventListener("click", () => alert(`${item} clicked!`)); // Nümunə olaraq, kliklənən zaman mesaj göstərmək üçün
  menu.appendChild(menuItem);
});

// Toggle Button (Open)
const toggleButton = document.createElement("button");
toggleButton.textContent = "Open";
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.left = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.cursor = "pointer";
toggleButton.style.backgroundColor = "#006d81";
toggleButton.style.color = "white";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.fontSize = "16px";
container.appendChild(toggleButton);

// Close Button (X) in the menu
const closeButton = document.createElement("button");
closeButton.textContent = "x";
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.padding = "5px";
closeButton.style.cursor = "pointer";
closeButton.style.backgroundColor = "transparent";
closeButton.style.color = "white";
closeButton.style.border = "none";
closeButton.style.fontSize = "20px";
closeButton.style.display = "none"; // Əvvəlcə gizli
menu.appendChild(closeButton);

// Toggle function for the menu
let isOpen = false;
toggleButton.addEventListener("click", () => {
  menu.style.left = "0"; // Menyu görünür
  toggleButton.style.display = "none"; // "Open" düyməsini gizləyir
  closeButton.style.display = "block"; // "X" düyməsini göstərir
  isOpen = true;
});

// Close menu when "X" button is clicked
closeButton.addEventListener("click", () => {
  menu.style.left = "-200px"; // Menyu gizlənir
  toggleButton.style.display = "block"; // "Open" düyməsini göstərir
  closeButton.style.display = "none"; // "X" düyməsini gizləyir
  isOpen = false;
});