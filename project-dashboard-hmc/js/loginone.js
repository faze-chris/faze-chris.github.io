//Hier haal ik de classen uit HTML

const inputName = document.querySelector('.input-name');
const inputPassword = document.querySelector('.input-password');
const loginBtn = document.querySelector('.login-btn');
const newPas = document.querySelector('.new-password');
const changePas =document.querySelector('.change-password');

// Als je op de button drukt, wordt de loginData functie geroepen
loginBtn.addEventListener('click', function () {
    loginData();
});

// Als je op de enter drukt in de input password, wordt de loginData functie geroepen
inputPassword.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        loginData();
    }
  });
  // Als je op de enter drukt in de input name, wordt de loginData functie geroepen

  inputName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        loginData();
    }
  });



// Deze functie geeft je toestemming om naar ander pagina te gaan. Als je de juist inloggegevens hebt
  function loginData() {

// De naam en wachtwoord waarde die je hebt ingevuld in input
  const userName = inputName.value;
  const password = inputPassword.value;
// Ik heb de inloggegevens in localstorage opgeslaan
  // localStorage.setItem('user',userName);
  // localStorage.setItem('password', password);

  const adminName = localStorage.getItem('user');
  const pas = localStorage.getItem('password');

// Als je gegevens kloppen, wordt je naar een andere pagina geleid
  if (userName == adminName  && password == pas) {
      location.replace('dashboard1.html');
      inputName.classList.remove('error');
      inputPassword.classList.remove('error');
  }
// Als je gegevens niet kloppen, worden beide inputs rood
  if (userName != adminName && password!= pas) {
      inputName.classList.add('error');
      inputPassword.classList.add('error');
  }

// Als je naam niet klopt en je wachtwoord klopt, wordt de inputnaam rood en inputwachtwoord niet 
  if (userName != adminName && password === pas) {
      inputName.classList.add('error');
      inputPassword.classList.remove('error');
  }
// Als je wachtwoord niet klopt en je naam klopt, wordt de inputwachtwoord rood en inputnaam niet 

  if (userName === adminName && password != pas) {
      inputName.classList.remove('error');
      inputPassword.classList.add('error');
  }
// Als je naam klopt, verwijdert de rode border van de inputnaam
  if (userName === adminName) {
      inputName.classList.remove('error');
  }
// Als je naam niet klopt, blijft de rode border van de inputnaam
  else{
      inputName.classList.add('error');

  }
// Als je wachtwoord klopt, verwijdert de rode border van de inputwachtwoord
  if (password === pas) {
      inputPassword.classList.remove('error');
  }
// Als je wachtwoord niet klopt, blijft de rode border van de inputwachtwoord
  else{
      inputPassword.classList.add('error');

  }
  };

  function changePassword() {
    
    const newPassword = newPas.value;
    localStorage.setItem('password', newPassword);


  }


  changePas.addEventListener('click',changePassword);