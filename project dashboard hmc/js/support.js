console.log("main.js loaded");
// Geluid 
const sentMessage = new Audio('media/sentmessage.mp3');
const receiveMessage = new Audio('media/receivemessage.mp3');
// Date
const date = new Date();
// Hours
let time = date.getHours();
//Seconds
let minutes = date.getMinutes();
// Hours with minutes
let timeSecond = time +':'+minutes;



// Classen uit de HTML
const inputMsg = document.querySelector('.input-msg');
const sendBtn = document.querySelector('.btn-size');
const showMsg = document.querySelector('.show-message');
const userName = document.querySelector('.input-name');
const writeMsg = document.querySelector('.write-msg');
const dateShow = document.querySelector('.date');


sendBtn.addEventListener('click',showMessage);
dateShow.innerHTML = date;

function showMessage() {
    // Waarde die gebruiker heeft geschreven 
    const message = inputMsg.value;
    // De waarde van de gebruiker naam. Als de gebruiker het heeft gevuld
    const nameUser = userName.value;
    // Ik heb de functie in een variabel gestopt
    const nameAndMsg = createMsgCard(nameUser, message,timeSecond);

    if (message != "" || nameUser !="") {
      // Als inputbericht en inputnaam niet leg is
      showMsg.innerHTML += nameAndMsg;
      sentMessage.play();
      const msg = `
      De chatbot is in ontwikkeling. Om u snel te kunnen helpen. U kunt contact met ons opnemen via:
      <ul class="text-light"><li><b>Tele: 06728272821</b></li><li><b>E-mail: hmc@rocmondriaan.nl</b></li></ul>
      `;
      setTimeout(function () {showMsg.innerHTML += chatbotResponse(msg,timeSecond);
        receiveMessage.play();
      }, 2000);
      // scrollToBottom(showMsg);

    }
    else{
      // Als de inputs leg is, wordt de border van inputen rod
      inputMsg.classList.add('error');
      userName.classList.add('error');
      return;
    }

}

// Maak een card met drie parameters
function createMsgCard(name, msg,date) {
    
    const card = `
  <div class="d-flex justify-content-start mt-2">
  <div class="card-width">
   <div class="card text-start">
    <img class="card-img-top img-fluid img-size" src="${"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${msg}</p>
      <p class="card-light">${date}</p>
    </div>
   </div>
  </div>
  </div>

    `

    return card;
};


// Card voor antwoord van De chat boot
function chatbotResponse(msg,date) {
  const card = `
<div class="d-flex justify-content-end m-0">
  <div class="card-width p-0 m-0">
  <div class="card text-start p-2 mt-2 bg-primary">
   <img class="card-img-top img-fluid img-size" src="${"https://cdn-icons-png.flaticon.com/512/4128/4128176.png"}" alt="Title">
   <div class="card-body">
    <h4 class="card-title text-white">${"Chatbot"}</h4>
    <p class="card-text text-light">${msg}</p>
    <p class="card-text text-light">${date}</p>
   </div>
  </div>
 </div>
</div>
  `
  return card;
}

// Auto scroll at new messages
function onAppend (elem, f) {
// veranderen in de gaten houden
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(m => {
      console.log(m);
      if (m.addedNodes.length) {
        f(m.addedNodes);
      }
    });
  });
  observer.observe(elem, {childList: true });
};

function maxScroll() {
  showMsg.scrollTop = showMsg.scrollHeight;
}

onAppend(showMsg, maxScroll);
