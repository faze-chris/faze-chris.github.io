const schoenen = document.querySelector('.schoenen');

function fetchHoodies(url) {
    fetch(url)
        .then(myschoenen => myschoenen.json())
        .then(myschoenen => showHoodies(myschoenen));
}

function showHoodies(objecten) {
    console.log(objecten);
    for (let i = 0; i < objecten.length; i++) {
        const element = objecten[i];
        const card = createCard(element);
        schoenen.innerHTML += card;
    }
}



function createCard(schoen) {
    let card = `
        <div class="col">
            <div class="card">
                <img class="card-img-top" src="${schoen.imageUrl}" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">Titel: ${schoen.title}</h4>
                    <p class="card-text">Beschrijving: ${schoen.description}</p>
                </div>
                <ul class="list-group list-group-flush">`;
    for (let i = 0; i < schoen.sizes.length; i++) {
        const element = schoen.sizes[i];
        card += sizes(element);
    }
    card += `<li class="list-group-item">Kleur: ${schoen.colour}</li>
            <li class="list-group-item">€${schoen.price}</li></ul>
            </div>
        </div>
    `;
    return card;
}

function sizes(size){
    const listGroupItem = `  
      <li class="list-group-item">Beschikbare Maat: ${size}</li>
      `    
    return listGroupItem;}
