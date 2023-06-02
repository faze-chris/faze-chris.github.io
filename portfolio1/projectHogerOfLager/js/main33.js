alert("Dit is het spel hoger lager, klik op OK voor de spelregels");

alert("Je heb 3 verschillende knoppen, je start met 0 punten daarna druk je op het knop “gooien” van de tegenstander en als de tegenstander heeft gegooid dan heb jij als speler de optie om op de knop “Hoger” of op de knop “Lager” te klikken. Als je dan goed hebt geraden dan heb je 1 punt erbij, als je fout hebt geraden dan krijg geen punten en dan start je weer vanaf 0 punten. En zo werkt het spel hoger lager.");


var voornaam;
voornaam = prompt("Wat is uw voornaam?");

var leeftijd;
leeftijd = prompt("" + voornaam + " hoeveel jaar bent u?");
if (leeftijd < 5) {
    alert("Bent u " + leeftijd + " jaar?");
    alert("U bent te jong voor deze site, u moet 18 jaar of ouder zijn om dit spel te spelen.");
} else if (leeftijd > 5 && leeftijd < 101) {
    alert("U bent oud genoeg om het spel te spelen.");
    alert("Welkom " + voornaam + " u kunt nu het spel spelen");
}

let x;
let y;

document.getElementById("rollButton").onclick = function() {

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;

    result = x + y;
    document.getElementById(result);

}


document.getElementById("hogerButton").onclick = function() {
    r = Math.floor(Math.random() * 6) + 1;
    h = Math.floor(Math.random() * 6) + 1;

    document.getElementById("rlabel").innerHTML = r;
    document.getElementById("hlabel").innerHTML = h;

    result = r + h;
    document.getElementById(result);

}


document.getElementById("lagerButton").onclick = function() {
    z = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;

    document.getElementById("zlabel").innerHTML = z;
    document.getElementById("blabel").innerHTML = b;

    result = z + b;
    document.getElementById(result);
}