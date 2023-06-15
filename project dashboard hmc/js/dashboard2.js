console.log("main.js loaded");





/* Hussam dashboard2 section */


    const email_el = document.getElementById("form1Example13");
    const password_el = document.getElementById("form1Example23");
    const signInBtn_el = document.getElementById("signInBtn");


    // Login code om in te loggen voor de dashboard2 pagina.

if (signInBtn_el) {
    signInBtn_el.addEventListener("click", function() {
        

        if (email_el.value === "admin" && password_el.value === "123") {
            alert("good");
            window.location.replace("dashboard2.html")
        }else if (email_el.value != "admin" && password_el.value === "123") {
            email_el.classList.add("dashboard-2-red");
            alert("wrong email");
        }else if (password_el.value != "123" && email_el.value === "admin") {
            password_el.classList.add("dashboard-2-red");
            alert("wrong password");
        }else if (email_el.value != "admin" && password_el.value != "123") {
            email_el.classList.add("dashboard-2-red");
            password_el.classList.add("dashboard-2-red");
            alert("both, email and password are incorrect. Pls try again.");

            alert("tip: You can find your email and password below the input fields");
        }else {
            alert("something went wrong...");
        }


    });
}

    // chart 1

    const chartOne = document.querySelector('.chart-1');




        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(myData => myData.json())
        .then(data => showData(data));
        


    function showData(data) {
        // console.log(data);

        let array1 = [data.bpi.EUR.rate_float, data.bpi.USD.rate_float, data.bpi.GBP.rate_float];
        let array2 = [data.bpi.EUR.code, data.bpi.USD.code, data.bpi.GBP.code];

        // console.log(array1);
        // console.log(array2);
        
        for (let i = 0; i < data.bpi.EUR.length; i++) {
            const element = data.bpi[i];

            // console.log(element);

        
            

    

         array1.push(element.rate);
            array2.push(element);


            
        }

        

        new Chart(chartOne, {
            type: 'bar',
            data: {
                labels: array2,
                datasets: [{
                    // backgroundColor: backgroundColours,
                    label: 'bitcoin: value',
                    data: array1,
                    borderWidth: 1
                }]
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


 

// chart 2

const chartTwo = document.querySelector(".chart-2");

const avg_pop_US = document.querySelector(".chart2-calc");
const grow_rate_US = document.querySelector(".chart2-calc2");



fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(myData => myData.json())
        .then(data => showOnPage2(data));


        function showOnPage2(data) {
            // console.log(data);
    
            let array1 = [];
            let array2 = [];

            

            
            // vars for calculation of average population
            let totalUSPop = 0;
            let averageUSPop = 0;
            
            
            // for loop to put the data in arrays
            for (let i = 0; i < data.data.length; i++) {
                const element = data.data[i];

                // calculating total population
                totalUSPop = totalUSPop + element.Population;
                
                 

                
             array1.push(element.Population);
                array2.push(element.Year);
                
                
            }

            // reversing the array so it will go up in years and population
            array1.reverse();
            array2.reverse();
    
            // console.log(array1);
            // console.log(array2);


            let arrayTest = [];
            // console.log(arrayTest);

            for (let a = 0; a < data.data.length; a++) {
                const element2 = data.data[a];

                
            arrayTest.push(element2);
            }
            
            

            // console.log(totalUSPop);

            // calculating average population
            averageUSPop = totalUSPop / data.data.length;

            avg_pop_US.innerHTML = averageUSPop;

            // console.log(averageUSPop);
    
            // creating chart two
            new Chart(chartTwo, {
                type: 'line',
                data: {
                    labels: array2,
                    datasets: [{
                        // backgroundColor: backgroundColours,
                        label: 'Population: US',
                        data: array1,
                        borderWidth: 1
                    }]
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
    
            // calculate average US pop:
            
    
    
            
        }
        
// chart 3

const chartThree = document.querySelector('.chart-3');
const top_globalTrader = document.querySelector('.chart3-global-trade');


        fetch("https://www.econdb.com/api/maritime/ports/?token=ef0173229b562e84c6ddb216de9b102abacc517a&page=1&format=json")
        .then(myData => myData.json())
        .then(data => showData3(data));
        


    function showData3(data) {
        // console.log(data);

        let array1 = [];
        let array2 = [];

        // console.log(array1);
        // console.log(array2);
        
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            

    

         array1.push(element.global_trade);
            array2.push(element.name + " "+ "Rank:" + " " + element.rank);

            // top global trader display.
            if (element.rank == 1) {
                // console.log(element.name);
                top_globalTrader.innerHTML = element.name + ":" + " " + element.global_trade.toFixed(2);
            }


            
        }

        

        new Chart(chartThree, {
            type: 'bar',
            data: {
                labels: array2,
                datasets: [{
                    // backgroundColor: backgroundColours,
                    label: 'global trade: value',
                    data: array1,
                    borderWidth: 1
                }]
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


    // chart 4

    const chart4 = document.querySelector(".chart-4");
    const top_crypto_currency = document.querySelector(".chart4-crypto");

    


    fetch("https://api.coincap.io/v2/assets")
    .then(myData => myData.json())
    .then(data => showData4(data));

    function showData4(data) {

        console.log(data);
        
        let array1 = [];
        let array2 = [];

        // console.log(array1);
        // console.log(array2);
        
        for (let i = 0; i < 10; i++) {
            const element = data.data[i];
            

            

         array1.push(element.priceUsd);
            array2.push(element.name + " " + element.rank);

            if (element.rank == 1) {
                
                top_crypto_currency.innerHTML = element.name;
                

            }
            
        }

        
        

        

        new Chart(chart4, {
            type: 'pie',
            data: {
                labels: array2,
                datasets: [{
                    // backgroundColor: backgroundColours,
                    label: 'price in dollars:',
                    data: array1,
                    borderWidth: 1
                }]
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


    };






        




        




/* End Hussam dashboard2 section */