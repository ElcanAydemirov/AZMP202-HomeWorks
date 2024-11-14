const container = document.createElement("div");
container.className = "container";

const mainImage = document.createElement("div");
mainImage.className = "main-image";
mainImage.textContent = "960 x 360px";

const plusIcon = document.createElement("div");
plusIcon.className = "plus-icon";
plusIcon.textContent = "+";

const smallImageContainer = document.createElement("div");
smallImageContainer.className = "small-image-container";

for (let i = 0; i < 3; i++) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("div");
  image.className = "image";
  image.textContent = "290 x 180px";

  const title = document.createElement("h5");
  title.className = "title";
  title.textContent = "Indonecetus facilis";

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";

  const readMore = document.createElement("a");
  readMore.className = "read-more";
  readMore.href = "#";
  readMore.textContent = "Read More »";

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(readMore);

  smallImageContainer.appendChild(card);
}

container.appendChild(mainImage);
container.appendChild(plusIcon);
container.appendChild(smallImageContainer);

document.body.appendChild(container);
