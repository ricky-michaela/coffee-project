"use strict"

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += `<td>${coffee.name}</td>`;
    html += `<td>${coffee.roast}</td>`;
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++)  {
        html += renderCoffee(coffees[i]);
    } // Made to ascending ID order
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    coffees.forEach( coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// Javascript we added
// const userInput = document.getElementById("coffeeName").value.toLowerCase();
// const selectOption = document.querySelector("#roast-selection");
// selectOption.addEventListener("change", function(e) {
//     e.preventDefault()
//     let selectOptions = e.target.value
//     if (selectOptions === "All") {
//         return renderCoffee(coffees);
//         // alert("All select works");
//     } else if (selectOptions === "Light") {
//         let lightCoffees = [];
//
//         for (let i =0; i < coffees.length; i++){
//             if (coffees[i].roast === "Light") {
//                 lightCoffees.push(coffees[i]);
//             }
//         }
//         renderCoffee(lightCoffees);
//     }
// });
let selectOption = document.getElementById('selectOption');
if (selectOption) {
    selectOption.addEventListener('change', function(e) {
        e.preventDefault();
        let selectedOption = e.target.value;
        if (selectedOption === 'All') {
            renderCoffee(coffees);
        } else if (selectedOption === 'Light') {
            let lightCoffees = [];
            // iterate over the coffees array
            for (let i=0; i < coffees.length; i++) {
                // check if the roast of the coffee is light
                if (coffees[i].roast === 'light') {
                    // if roast is light, push it to the lightCoffees array
                    lightCoffees.push(coffees[i]);
                }
            }
            renderCoffee(lightCoffees);
        }
    });
    selectOption.setAttribute('aria-label', 'Coffee Type Select'); // Descriptive label
}
