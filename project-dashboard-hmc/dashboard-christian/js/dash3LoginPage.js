console.log("test");
// Admin account met standaard user name en wachtwoord.
const adminAccount = {
    userName: "Admin123",
    password: "Admin123"
  };
  
  let userAccounts = [adminAccount]; // dit is een leege array om userAccounts op te slaan.
  
  // hier controleer mijn code of er userAccounts in de localStorage zijn opgeslagen.
  const userAccountString = localStorage.getItem('userAccounts');
  if (userAccountString) {
    // Als er accounts zijn, maakt het van een  JSON-string naar een array van userAccounts.
    userAccounts = JSON.parse(userAccountString);
  }
  
  testLocalStorage(); // Functie oproep om de inhoud van de localStorage te zien.
  
  function testLocalStorage() {
    console.log("Testen van lokale opslag, gebruikersaccounts zijn: ", userAccounts);
  
    // Loop door elke userAccounts en consol log de gebruikersnaam en het wachtwoord om te kijken of het werkt.
    userAccounts.forEach(account => {
      console.log(`gebruiker: ${account.userName} wachtwoord: ${account.password}`);
      console.log(`--------------------------------------------------------`);
    });
  }
  
  function saveAccount(userName, password) {
    const newAccount = {
      userName: userName,
      password: password
    };
  
    // Controleer of de gebruikersnaam al bestaat in de array van userAccounts.
    const accountExists = userAccounts.some(account => {
      return account.userName.toLowerCase() === userName.toLowerCase();
    });
  
    if (accountExists) {
      alert("Gebruikersnaam bestaat al. Kies een andere naam.");
      return;
    }
  
    // Voeg het nieuwe account toe aan de array van userAccounts.
    userAccounts.push(newAccount);
    console.log(newAccount);
  
    // de code maakt de array van userAccounts naar een JSON-string en sla het op in localStorage.
    const userAccountsJson = JSON.stringify(userAccounts);
    localStorage.setItem("userAccounts", userAccountsJson);
    // For next time, set this only if there is not an array (with an Admin account) in local storage.
  
    testLocalStorage(); // hier mee kijk ik wat er in mijn local storage zit.
  }
  
  function login(userName, password) {
    let loginSuccessful = false;
  
    // Loop door elk userAccounts en controleer de gebruikersnaam en het wachtwoord.
    userAccounts.forEach(account => {
      if (userName === account.userName && password === account.password) {
        loginSuccessful = true;
        alert("Inloggen succesvol!");
        document.location.href = "../dashboard-christian.html"; // ik stuur het door naar mijn dashboard pagina.
      }
    });
  
    // Als de inlogpoging niet goed was, toon een foutmelding.
    if (!loginSuccessful) {
      const messageElement = document.getElementById("message");
      messageElement.innerText = "Ongeldige gebruikersnaam of wachtwoord.";
      messageElement.classList.remove("d-none");
    }
  }
  
  const btnAccount = document.querySelector(".bt-acount");
  btnAccount.addEventListener('click', createUserAccount);
  
  function createUserAccount() {
    let newUsername = "";
    let newPassword = "";
  
    // Vraag de user om een nieuwe gebruikersnaam en wachtwoord totdat beide zijn ingevoerd.
    while (!newUsername || !newPassword) {
      newUsername = prompt("Voer een nieuwe gebruikersnaam in:");
      newPassword = prompt("Voer een nieuw wachtwoord in:");
    }
  
    // Sla het nieuwe account op.
    saveAccount(newUsername, newPassword);
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    // Haal de ingevoerde gebruikersnaam en wachtwoord op en probeer in te loggen.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    login(username, password);
  });
  


