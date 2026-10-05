// contacht form
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

// opdracht 2 json array
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