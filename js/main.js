console.log("main.js loaded");


  // This function will be executed when the page finishes loading
  window.onload = function () {
    // Find the element with the ID "myText" and set its innerHTML to the desired text
    var test = document.querySelector(".myText");
    test.innerHTML = "My name is Christian Lemmen, and this is my portfolio.";
    // Apply the "fade-in" class to trigger the transition effect
    test.classList.add("fade-in");
};