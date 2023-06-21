// Start profile.js
console.log("test");

// Profile alert
const btnEdit = document.querySelector(".btnEdit");
btnEdit.addEventListener('click', showWorkInProgressAlert);

function showWorkInProgressAlert() {
  alert("Sorry, this feature is currently a work in progress. We apologize for the delay.");
}

//start subscribe alert
const alert2 = document.querySelector(".alert2");
alert2.addEventListener('click', alertTwo);

function alertTwo() {
  alert("Er is nog geen abonnement.");
}
//end subscribe alert

// End profile.js
