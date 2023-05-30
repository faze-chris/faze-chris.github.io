console.log('Main JS loaded');
// html class op te halen
const resultElement = document.querySelector(".result");
// fetch data van de url van de andere java script bestanden binnen halen voor een function
function fetchData(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
}
// dit is een loop dat cards maakt voor elke shirt en dan in de html zet
function showData(myJsonData) {
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        resultElement.innerHTML += card;
    }
}
// content invullen voor de cards in html 
function createCard(element) {
    const card =
    `
    <div class="col result ">
        <div class="card card-bg">
            <img class="card-img-top" src="${element.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
        
            </div>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item card-bg"> $ ${element.price}</li>
                <li class="list-group-item card-bg"> kleur: ${element.colour}</li>
                <li class="list-group-item card-bg"> size: ${element.sizes}</li>
            </ul>
        </div>
    </div>
    `;
    return card
}