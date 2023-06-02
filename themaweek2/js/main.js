//mijn voor word.
alert("welcome bij till now and beyond.nl");
//dit is for innerhtml voor je naam in tevoeren.
const nameTexts = document.querySelector(".yourName");
let yourName = prompt("wat is je naam", `bijvoorbeeld: Marijuana Pepsi Jackson`);
nameTexts.innerHTML = yourName;
//dit is mijn cookies vraag om verder te gaan moet je ja typen anders kan je niet in de website.
const maze1 = prompt('op dit website zijn er cookies wil je verder gaan met cookies type dan ja in als u zonder cookies verder wilt type dan nee ', 'ja of nee?');
if (maze1 == 'ja') {
    alert("je woord nu door gestuurd.");
} else {
    alert("je woord nu door gestuurd.");
    document.location.href = 'cookies.html'
}
//dit roept mijn button aan om kleuren te veranderen.
const colorButton = document.querySelector(".colorbutton");
//hier zeg ik dat je als je op de button clickt dan ga je naar de function backgroudnColor.
colorButton.addEventListener("click", function(){
    backgroundColor();
})
//dit function zorg er voor dat ik mijn border , background color en mijn tekts color veranderd.
function backgroundColor() {
    //background color changer.
    document.body.style.backgroundColor = "black"; 
    //border color changer voor box1.
    const border1 = document.querySelectorAll(".box1");
        // console.log(border1)
    for (let index = 0; index < border1.length; index++) {
        const element = border1[index];
        element.style.border = "5px solid white";
    }
    //border color changer voor box.
    const border2 = document.querySelectorAll(".box");
    // console.log(border2)
for (let i = 0; i < border2.length; i++) {
    const element2 = border2[i];
    element2.style.border = "5px solid white";
}
    //text color changer.
    const tektsColer = document.querySelectorAll(".box");
    for (let home = 0; home < tektsColer.length; home++) {
        const elementbox = tektsColer[home];
        elementbox.style.color = "white"
    }
    document.querySelector(".yourName").style.color = "white";
    document.querySelector(".darkmodelife").style.color= "white";
}
