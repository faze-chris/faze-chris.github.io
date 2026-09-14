// alert("testing js");
const output = document.getElementById("output");
const h1 = document.querySelector(".h1");
const p = document.querySelector(".p");

h1.textContent = "Christian Lemmen";
h1.innerHTML = "<b>Lemmen</b>";
p.innerHTML = "lol";
const newElement = document.createElement("p");
newElement.innerHTML = "Hello, World!";
output.appendChild(newElement);
