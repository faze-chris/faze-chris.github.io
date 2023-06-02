function mybut1() {

    document.location.href = 'overmezelf.html'
}

function mybut2() {

    document.location.href = 'project.html'
}

function mybut3() {

    document.location.href = 'contactgegevens.html'
}
function mybut4() {

    document.location.href = '/index.html'
}
function mybut13() {

    document.location.href = 'index.html'
}













let i = -1;
let text = "ik ben christian lemmen en ik ben een software developer! (dit is een voorbeeld..)";
let speed = 25;
function textAppear() {
    if (i < text.length) {
        document.querySelector("#hello-btn").innerHTML += text.charAt(i);
        i++;
        setTimeout(textAppear, speed);
    }
}
const testButton = document.querySelector(".hello-btn");
testButton.addEventListener("click", textAppear);