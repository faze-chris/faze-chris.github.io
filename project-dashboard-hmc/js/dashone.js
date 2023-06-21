console.log("main.js loaded");
//Hier haal ik de classen uit HTML
const titleOne = document.querySelector('.title-one');
const titleTwo= document.querySelector('.title-two');
const titleThree = document.querySelector('.title-three');
const chartLine = document.querySelector('.chart-line');
const chartFruit = document.querySelector('.chart-fruit');
const chartZuivel = document.querySelector('.chart-zuivel');
const chartVlesswaren = document.querySelector('.chart-vleeswaren');
const productsNav = document.querySelector('.products-nav');
const fruitNav = document.querySelector('.fruit-nav');
const zuivelNav = document.querySelector('.zuivel-nav');
const vleesNav = document.querySelector('.vlees-nav');
const fruitClass = document.querySelector('.fruit-class');
const zuivelClass = document.querySelector('.zuivel-class');
const vleesClass = document.querySelector('.vlees-class');
const productsClass = document.querySelector('.products-class');
const dashboard = document.querySelector('.dashboard');
const fruitTotal = document.querySelector('.fruit-total');
const zuivelTotal = document.querySelector('.zuivel-total');
const vleeswarenTotal = document.querySelector('.vleeswaren-total');
const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');
const loginName = document.querySelector('.login-name');


// Ik heb hier de data uit localstorage halen
const userName = localStorage.getItem('user');
// Ik toon de gebruikernaam in de dashboardpagina
loginName.innerHTML =userName;


// De fetch haalt de data uit de server
fetch('https://mbo-sd.nl/apiv2/basic-cash-register')
.then(response => response.json())
.then(jsonData => createChart(jsonData))


// Deze functie maakt een grafiek 
function createChart(data) {
    console.log(data);
// Hier komt de data die ik van data array gepusht 
    const idArray = [];
    const nameArray =[];
    const fruitArray = [];
    const fruitArrayTwo = [];
    const zuivelArray = [];
    const zuivelArrayTwo = [];
    const vleeswarenArray = [];
    const vleeswarenArrayTwo = [];
// De waarde van de totaal variabelen
    let totalFruit = 0;
    let totalZuivel = 0;
    let totalVleeswaren = 0;

    data.products.forEach(element => {

// Ik stuur de delen van data array naar ander leg array buiten de foreach
        idArray.push(element.id);
        nameArray.push(element.name);

        if (element.category_id === 1) {
            fruitArray.push(element.name);
            fruitArrayTwo.push(element.name.length);
// Titel gaat naar de naam van het prodcut veranderen 
            titleOne.innerHTML = data.categories[1];
// Hier wordt een totale berekening gemaakt
            totalFruit += element.name.length;
        }
        if (element.category_id == 2) {
            console.log(element);
            zuivelArray.push(element.name);
            zuivelArrayTwo.push(element.name.length);
            titleTwo.innerHTML = data.categories[2];
            totalZuivel += element.name.length;


        }
        if (element.category_id == 3) {
            console.log(element);
            vleeswarenArray.push(element.name);
            vleeswarenArrayTwo.push(element.name.length);
            titleThree.innerHTML = data.categories[3];
            totalVleeswaren += element.name.length;
        }
    });

// Deze regel geeft de totaal products weer
    fruitTotal.innerHTML +="Totaal fruit is: " +  totalFruit;
    zuivelTotal.innerHTML +="Totaal zuivel is: " +  totalZuivel;
    vleeswarenTotal.innerHTML +="Totaal vleeswaren is: " +  totalVleeswaren;
// Deze functie maakt een doughnut grafiek 
    new Chart(chartFruit, {
        type: 'line',
        data: {
            labels: fruitArray,
            datasets: [{
                label: '#Fruit',
                backgroundColor: 'red',
                data: fruitArrayTwo,
                borderWidth: 1
            }]
        },


    });
// Deze functie maakt een polarArea grafiek 

    new Chart(chartZuivel, {
        type: 'line',
        data: {
            labels: zuivelArray,
            datasets: [{
                label: '#Zuivel',
                data: zuivelArrayTwo,
                backgroundColor: 'green',
                borderWidth: 1
            }]
        },


    });

// Deze functie maakt een doughnut grafiek 
    new Chart(chartVlesswaren, {
        type: 'line',
        data: {
            labels: vleeswarenArray,
            datasets: [{
                label: '#Vleeswaren',
                backgroundColor: 'orange',

                data: vleeswarenArrayTwo,
                borderWidth: 1
            }]
        },


    });
    
// Deze functie maakt een bar grafiek 
    new Chart(chartLine, {
        type: 'bar',
        data: {
            labels: nameArray,
            datasets: [{
                label: '#Products',
                data: idArray,
                borderWidth: 1
            }]
        },
    });


};

// Deze functie voegt toe en verwijdert active- en desactive class
function addRemove(one,two,three,four){
    console.log('Add and remove');
    one.classList.remove('desactive');
    one.classList.add('active');
    two.classList.add('desactive');
    three.classList.add('desactive');
    four.classList.add('desactive');
};


fruitNav.addEventListener('click', function () {
    addRemove(fruitClass,zuivelClass,vleesClass,productsClass);
});

zuivelNav.addEventListener('click', function () {
    addRemove(zuivelClass,fruitClass,vleesClass,productsClass);
});

vleesNav.addEventListener('click', function () {
    addRemove(vleesClass,fruitClass,zuivelClass,productsClass);
});

productsNav.addEventListener('click', function () {
    addRemove(productsClass,vleesClass,fruitClass,zuivelClass);
});

dashboard.addEventListener('click', function () {
    vleesClass.classList.remove('desactive','active');
    fruitClass.classList.remove('desactive','active');
    zuivelClass.classList.remove('desactive','active');
    productsClass.classList.remove('desactive','active');


});

btnSearch.addEventListener('click' , function () {
    const search = inputSearch.value;

    if (search === 'Fruit' ||search === 'fruit' ||search === 'فاكهة' ) {
        addRemove(fruitClass,zuivelClass,vleesClass,productsClass);
    } else if (search === 'Zuivel' || search === 'zuivel') {
        addRemove(zuivelClass,fruitClass,vleesClass,productsClass);
    } else if (search === 'Vleeswaren' || search === 'vleeswaren') {
        addRemove(vleesClass,fruitClass,zuivelClass,productsClass);
    } else if (search === 'Producten' || search === 'producten') {
        addRemove(productsClass,vleesClass,fruitClass,zuivelClass);
    }
});