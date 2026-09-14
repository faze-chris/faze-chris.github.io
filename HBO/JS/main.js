// alert("testing js");
const output = document.getElementById("output");
const h1 = document.querySelector(".h1");
const p = document.querySelector(".p");
const btn1 = document.querySelector("#myButton1");
const btn2 = document.querySelector("#myButton2");

h1.textContent = "Christian Lemmen";
h1.innerHTML = "<b>Lemmen</b>";
p.innerHTML = "lol";
const newElement = document.createElement("p");
newElement.innerHTML = "Hello, World!";
output.appendChild(newElement);

const producten = [
  {
    naam: "Product 1",
    prijs: 10,
    populariteit: 12,
  },
  {
    naam: "Product 2",
    prijs: 17,
    populariteit: 9,
  },
  {
    naam: "Product 3",
    prijs: 18,
    populariteit: 11,
  },
  {
    naam: "Product 4",
    prijs: 16,
    populariteit: 10,
  },
];
    for (let i = 0; i < producten.length; i++) {
  const product = producten[i];
  const productElement = document.createElement("div");
  productElement.innerHTML =
    "<h2>" +
    product.naam +
    "</h2><p>Prijs: " +
    product.prijs +
    "</p><p>Populariteit: " +
    product.populariteit +
    "</p>";
  output.appendChild(productElement);
}
function updateOutput(producten) {
    for (let i = 0; i < producten.length; i++) {
  const product = producten[i];
  const productElement = document.createElement("div");
  productElement.innerHTML =
    "<h2>" +
    product.naam +
    "</h2><p>Prijs: " +
    product.prijs +
    "</p><p>Populariteit: " +
    product.populariteit +
    "</p>";
  output.appendChild(productElement);
}
}
function handleClick1() {
  producten.sort((a, b) => a.prijs - b.prijs);
    updateOutput(producten);
}
function handleClick2() {
  producten.sort((a, b) => b.populariteit - a.populariteit);
  updateOutput(producten);
}


btn1.addEventListener("click", handleClick1);
btn2.addEventListener("click", handleClick2);
