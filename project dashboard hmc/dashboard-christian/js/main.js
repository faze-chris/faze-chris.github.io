console.log("main.js geladen");
// christian js begin.
// alles binnen halen 
// chart1 
const chChart1 = document.querySelector(".chart-1-ch");
const chartDataJs1 = 'https://mbo-sd.nl/apiv2/school-courses';
// chart2 
const chChart5 = document.querySelector(".chart-5-ch");
const covidData = 'https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=c5253711fcba56f78731e79503c573a8';
//chart3
const chChart2 = document.querySelector(".chart-2-ch");
const chartDataJs2 = 'https://mbo-sd.nl/apiv2/student-grades';

// chart1

//ik fetch hier de api link
fetch(chartDataJs1)
  .then(myData1 => myData1.json())
  .then(jsonData1 => chartData(jsonData1));

function chartData(jsonData1) {
  console.log(jsonData1);
  // dit zijn lege arrays zonder inhoud
  const idElement = [];
  const nameElement = [];
  console.log(idElement);
  console.log(nameElement);
  // de json-data wordt door deze for-lus doorlopen
  for (let i = 0; i < jsonData1.length; i++) {
    const element = jsonData1[i];
    // hier wordt de data naar de arrays gepusht en vervolgens in de grafiek geplaatst
    idElement.push(element.id);
    const elementName = element.name;
    nameElement.push(elementName);
    console.log(element.id);
    console.log(elementName);
  }
  // dit is de grafiek zelf
  new Chart(chChart1, {
    type: 'bar',
    data: {
      labels: nameElement,
      datasets: [{
        label: 'Aantal studenten',
        data: idElement,
        borderWidth: 1,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'rgb(210, 105, 30)',
          'rgb(255, 0, 0)',
          'rgb(76, 153, 0)',
        ]
      }]
    },
    options: {
      responsive: true,

      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//chart2

//ik fetch hier de api link
fetch(covidData)
  .then(myData => myData.json())
  .then(jsonData => chartData5(jsonData));

function chartData5(jsonData) {
  console.log(jsonData);
  // hier worden alle waarden in arrays geplaatst
  const name = [jsonData.name];
  const speed = [jsonData.wind.speed];
  const temp = [jsonData.main.temp];
  const pressure = [jsonData.main.pressure];
  const humidity = [jsonData.main.humidity];
  // ik log hier alles om te controleren of alles werkt
  console.log("name " + name);
  console.log("wind speed is " + speed);
  console.log("temperatuur is " + temp);
  console.log("pressure is " + pressure);
  console.log("humidity is " + humidity);

  // dit is de grafiek zelf
  new Chart(chChart5, {
    type: 'doughnut',
    data: {
      labels: [
        speed,
        temp,
        pressure,
        humidity
      ],
      datasets: [
        // 1
        {
          label: name + ' windsnelheid',
          data: speed,
          backgroundColor: "blue",
          borderWidth: 1,

        },
        // 2
        {
          label: name + ' temperatuur',
          data: temp,
          backgroundColor: "red",
          borderWidth: 1,
        },
        //  3
        {
          label: name + ' luchtdruk',
          data: pressure,
          backgroundColor: "yellow",
          borderWidth: 1,
        },
        // 4
        {
          label: name + ' luchtvochtigheid',
          data: humidity,
          backgroundColor: "green",
          borderWidth: 1,
        },

      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//chart3'

//ik fetch hier de api link
fetch(chartDataJs2)
  .then(myData2 => myData2.json())
  .then(jsonData2 => chartData2(jsonData2));

function chartData2(jsonData2) {
  const students2 = jsonData2.students;
  console.log(students2);
  // dit zijn lege arrays
  const studentNames = [];
  const studentId = [];
  // dit is een for-lus om de data in de arrays te plaatsen en vervolgens in de grafiek te zetten
  for (let i = 0; i < students2.length; i++) {
    const student = students2[i];
    studentNames.push(student.name);
    studentId.push(student.id);
    if (i == 5) {
      break;
    }
    // de log is om te controleren of het werkt
    console.log("student is: " + student.name);
    console.log("student is: " + student.id);

  }
  // dit is de grafiek zelf
  new Chart(chChart2, {
    type: 'polarArea',
    data: {
      labels: studentNames,
      // 1
      datasets: [
        {
          label: 'id',
          data: studentId,
          borderWidth: 1,
          //dit is om andere kleuren in de grafiek te gebruiken
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(210, 105, 30)',
            'rgb(255, 0, 0)',
            'rgb(76, 153, 0)',
          ]
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//start subscribe alert
const alert2 = document.querySelector(".alert2");
alert2.addEventListener('click', alertTwo);

function alertTwo() {
  alert("Er is nog geen abonnement.");
}
//end subscribe alert

// christian js eind.
