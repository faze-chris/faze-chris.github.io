function myFunction() {
  alert("welcome")

  const playername = prompt('Wat is je naam', 'player name ');
  alert(`Jouw naam is ${playername}`);
  alert("kobe is uit zijn graf gekomen en hij wilt jou doden dus  dus rent weg.");
  alert("je komt uit eindelijk in een dolhof")
  const maze1 = prompt('je zit nu in het dolhoof je kan niet meer recht door. Ga je naar links of rechts', 'links of rechts?');

  if (maze1 == 'rechts') {
    alert("je gaat verderlopen ")

    const maze2 = prompt('je zit nu in het dolhoof je kan niet meer recht door. Ga je naar links of rechtdoor', 'links of rechtdoor?');
    if (maze2 == 'rechtdoor') {
      alert("je gaat verderlopen ");

      const home = prompt('je ziet een huis will je naar binnen', 'Ja&nee?');
      if (home == 'ja') {
        alert("je loopt naar binnen en realiseerde dat dit kobe's huis opeens hoor je dat de deur met een klap dicht is gegooid je loopt naar de door en ziet dat hij opslot zit je zit gevangen ");
        document.location.href = 'mainkamer.html'
      } else {
        alert("je probeert te vluchten maar je struikelt over een basket bal en voor dat je kan opstaan heeft kobe all je brein opgegeten");
        document.location.href = 'doodweb.html'
      }
    } else {
      alert('Je bent dood');
      document.location.href = 'doodweb.html';
    }
  } else {
    alert("kobe heeft trap daar gezet en je zit vast na een tijdtje heeft kobe je gepakt je bent dood");
    document.location.href = 'doodweb.html'
  }
}

function mybut1() {
  alert("je gaat nu naar kamer 1")
  document.location.href = 'kamer1.html'

}
function mybut2() {

  const code = prompt('wat is de cijfer code?', "cijfers")

  if (code == 11226) {
    alert("de kamer is open ")
    alert("je gaat nu naar kamer 2");

    document.location.href = "kamer2.html";

  } else {

    alert('dat was niet de correcte keuze ')

  }


}
function mybut3() {
  const code = prompt('wat is de cijfer code?', "numbers")

  if (code == 343432) {
    alert("de kamer is open ")
    alert("je gaat nu naar kamer 3");

    document.location.href = "kamer3.html";

  } else {

    alert('dat was niet de correcte keuze ')

  }
}
function mybut6() {
  alert("je gaat nu naar mainkamer")
  document.location.href = 'mainkamer.html'
}
function mybut8() {

  document.location.href = 'escapeKamerHome.html';
}
function mybut7() {
  alert("je hebt gewonnen maar.....")
  const chrash=prompt('will je revenge')

  if (chrash=='ja') {
  
      document.location.href = "wraak.html";
  }
  else {
    
    document.location.href = 'gewonnen.html'
  }
}

function mybut11() {

  document.location.href = 'puzzellast.html';
}
function mybut12() {

  document.location.href = 'prisonkamer(dood).html';
}
function mybut13() {

  document.location.href = 'doodweb.html'
}

