// Elementlər yaratmaq
const container = document.createElement("div");
const increaseBtn = document.createElement("button");
const decreaseBtn = document.createElement("button");
const colorInput = document.createElement("input");
const applyBtn = document.createElement("button");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");

let fontSize = 16;
text1.style.fontSize = `${fontSize}px`;
text2.style.fontSize = `${fontSize}px`;
text3.style.fontSize = `${fontSize}px`;

increaseBtn.textContent = "+";
decreaseBtn.textContent = "-";
colorInput.placeholder = "black";
applyBtn.textContent = "Apply";

text1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
text2.textContent = "Nulla quis lorem ut libero malesuada feugiat.";
text3.textContent = "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.";

container.style.display = "flex";
container.style.alignItems = "center";
container.style.gap = "10px";
container.style.marginBottom = "20px";

colorInput.style.width = "100px";

function updateFontSize() {
    text1.style.fontSize = `${fontSize}px`;
    text2.style.fontSize = `${fontSize}px`;
    text3.style.fontSize = `${fontSize}px`;
}

increaseBtn.onclick = () => {
  fontSize += 2;
  updateFontSize();
};

decreaseBtn.onclick = () => {
  fontSize -= 2;
  updateFontSize();
};

applyBtn.onclick = () => {
  const color = colorInput.value || "black";
  text1.style.color = color;
  text2.style.color = color;
  text3.style.color = color;
};

container.appendChild(increaseBtn);
container.appendChild(decreaseBtn);
container.appendChild(colorInput);
container.appendChild(applyBtn);

document.body.appendChild(container);
document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);