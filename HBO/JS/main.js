// alert("testing js");

// assignment 1, 2 & 3 lesson 1,2 & 3
const output = document.getElementById("output");

if (output) {
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
    output.innerHTML = ""; // Extra toevoeging om dubbele lijsten bij sorteren te voorkomen
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
}

// postman assignment
const form = document.querySelector("#contact-form");

if (form) {
  const velden = [
    { id: "naam", boodschap: "fill 2 charackters in." },
    { id: "email", boodschap: "fill a valid e-mail in." },
    { id: "bericht", boodschap: "write a message please." },
  ];

  function valideerVeld(veld) {
    const input = document.querySelector(`#${veld.id}`);
    const foutmelding = document.querySelector(`#${veld.id}-error`);

    const geldig = input.checkValidity();

    input.setAttribute("aria-invalid", String(!geldig));

    foutmelding.textContent = geldig ? "" : veld.boodschap;

    return geldig;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const alleGeldig = velden.map(valideerVeld).every(Boolean);
    const status = document.querySelector("#form-status");

    if (!alleGeldig) {
      status.textContent = "wrong forms";
      status.style.color = "red";
      return;
    }

    status.textContent = "message sent thank you!";
    status.style.color = "green";

    form.reset();
  });
}

// opdracht 2
const projectContainer = document.querySelector("#projecten-container");

if (projectContainer) {
  const myProjects = [
    {
      title: "Noughts and Crosses",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam",
      image: "../media/home_page/boter kaas en eireren.png",
      link: "../boterkaas&eiren/mianindex.html",
      category: "game",
    },
    {
      title: "Weather app",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Donec euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.",
      image: "../media/home_page/weather app.png",
      link: "../weather-app/index.html",
      category: "app",
    },
  ];

  function projects(displayProjects) {
    projectContainer.innerHTML = "";

    displayProjects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML =
        '<img src="' +
        project.image +
        '" alt="Project: ' +
        project.title +
        '">' +
        '<div class="card-content">' +
        "<h2>" +
        project.title +
        "</h2>" +
        "<p>" +
        project.description +
        "</p>" +
        '<a href="' +
        project.link +
        '" class="btn">View Project</a>' +
        "</div>";
      projectContainer.appendChild(card);
    });
  }

  projects(myProjects);

  const btnAll = document.querySelector("#btn-all");
  const btnGame = document.querySelector("#btn-game");
  const btnApp = document.querySelector("#btn-app");

  if (btnAll) btnAll.addEventListener("click", () => projects(myProjects));
  if (btnGame)
    btnGame.addEventListener("click", () =>
      projects(myProjects.filter((p) => p.category === "game")),
    );
  if (btnApp)
    btnApp.addEventListener("click", () =>
      projects(myProjects.filter((p) => p.category === "app")),
    );
}
// API fetch
const fetchBtn = document.querySelector("#fetch-data-btn");

if (fetchBtn) {
  const statusText = document.querySelector("#fetch-status");
  const resultText = document.querySelector("#fetch-result");

  const url = "https://jsonplaceholder.typicode.com/users/1";

  fetchBtn.addEventListener("click", async () => {
    statusText.textContent = "Fetching API";
    statusText.style.color = "blue";
    resultText.textContent = "";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("error");
      }

      const data = await response.json();

      statusText.textContent = "Data fetched";
      statusText.style.color = "green";

      resultText.textContent = "User found: " + data.name + " " + data.email;
    } catch (error) {
      console.error(error);
      statusText.textContent = "no api";
      statusText.style.color = "red";
    }
  });
}
