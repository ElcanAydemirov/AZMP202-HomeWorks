const container = document.createElement("div");
container.style.width = "300px";
container.style.padding = "20px";
container.style.backgroundColor = "#f9c99a";
container.style.borderRadius = "10px";
container.style.fontFamily = "Arial, sans-serif";
container.style.textAlign = "center";

const title = document.createElement("h2");
title.textContent = "Simple Calculator";
container.appendChild(title);

const display = document.createElement("div");
display.style.width = "100%";
display.style.height = "40px";
display.style.backgroundColor = "black";
display.style.color = "white";
display.style.fontSize = "24px";
display.style.display = "flex";
display.style.alignItems = "center";
display.style.justifyContent = "center";
display.textContent = "0";
container.appendChild(display);

const value1 = document.createElement("input");
const value2 = document.createElement("input");
[value1, value2].forEach((input) => {
  input.type = "number";
  input.placeholder = "Value";
  input.style.width = "45%";
  input.style.margin = "5px";
  input.style.fontSize = "18px";
});
container.appendChild(value1);
container.appendChild(value2);

function updateDisplay(result) {
  display.textContent = result;
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.width = "100%";
  button.style.margin = "5px 0";
  button.style.padding = "10px";
  button.style.fontSize = "18px";
  button.style.cursor = "pointer";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.backgroundColor = "#e0e0e0";
  button.addEventListener("click", onClick);
  return button;
}

function add() {
  const result = parseFloat(value1.value) + parseFloat(value2.value);
  updateDisplay(isNaN(result) ? "Error" : result);
}

function subtract() {
  const result = parseFloat(value1.value) - parseFloat(value2.value);
  updateDisplay(isNaN(result) ? "Error" : result);
}

function multiply() {
  const result = parseFloat(value1.value) * parseFloat(value2.value);
  updateDisplay(isNaN(result) ? "Error" : result);
}

function divide() {
  const result = parseFloat(value1.value) / parseFloat(value2.value);
  updateDisplay(isNaN(result) ? "Error" : result);
}

container.appendChild(createButton("Addition", add));
container.appendChild(createButton("Subtract", subtract));
container.appendChild(createButton("Multiply", multiply));
container.appendChild(createButton("Division", divide));

const resetButton = createButton("Reset", () => {
  value1.value = "";
  value2.value = "";
  updateDisplay(0);
});
resetButton.style.backgroundColor = "#f05d2d";
resetButton.style.color = "white";
container.appendChild(resetButton);

document.body.appendChild(container);
