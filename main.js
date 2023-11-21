"use strict";

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += `<td>${coffee.name}</td>`;
    html += `<td>${coffee.roast}</td>`;
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    coffees.forEach(coffee => {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Function below is for the search of coffee names
function searchCoffees(e) {
    e.preventDefault();
    const userInput = e.target.value.toLowerCase(); // get user input from the input field
    let searchedCoffees = coffees.filter(coffee => {
        return coffee.name.toLowerCase().includes(userInput);
    });
    let inputResult = ''; // Resets the search
    if (searchedCoffees.length > 0) {
        for (let i = 0; i < searchedCoffees.length; i++) {
            inputResult += `${searchedCoffees[i].name} <br>`;
        }
    }
    tbody.innerHTML = inputResult;
}

function addCoffee(){

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

//shows coffees in correct order
coffees.reverse();

//variables for the search coffee form
const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const searchCoffee = document.querySelector('#searchCoffeeName');

//variables for the add coffee form
const addCoffeeBtn =

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);

searchCoffee.addEventListener('input', searchCoffees);
