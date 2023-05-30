const hoodies = document.querySelector('.hoodies');

function fetchHoodies(url) {
    fetch(url)
        .then(myHoodies => myHoodies.json())
        .then(myHoodies => showHoodies(myHoodies));
}


function showHoodies(objecten) {

    console.log(objecten);

    for (let i = 0; i < objecten.length; i++) {
        const element = objecten[i];
        const card = createCard(element);
        hoodies.innerHTML += card;
    }
}






function createCard(hoodie) {
    let card = `
    <div class="col">
    <div class="card">
    <img class="card-img-top" src="${hoodie.imageUrl}" alt="Title">
    <div class="card-body">
        <h4 class="card-title">Titel: ${hoodie.title}</h4>
        <p class="card-text">Beschrijving: ${hoodie.description}</p>
    </div>
<ul class="list-group list-group-flush">`;
for (let i = 0; i < hoodie.sizes.length; i++) {
    const element = hoodie.sizes[i];
    card += sizes(element);
}
card += `
<li class="list-group-item">Kleur: ${hoodie.colour}</li>
<li class="list-group-item">€${hoodie.price}</li>
</ul>
    </div>
    </div>
    `;
    return card;
}

function sizes(size){
    const listGroupItem = `
    <li class="list-group-item">Beschikbare Maat: ${size}</li>`
    return listGroupItem;
}