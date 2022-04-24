//Variables

let grid = document.querySelector('#grid');

let squareAmount = 16;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let result = '';

let result2 = '';

let i = 0;

let divArray = [];

let containerArray = [];

while (i < squareAmount) {
    generateString();
    generateString2();
    divArray.push(result);
    containerArray.push(result2);
    i++;
}

//Id value for each div container
let idNum = 0;
// variable for reference to add squares onto each container row.
let plus = 0;

divArray.forEach(function(el) {
    let squareContainer = document.createElement('div');
    
    grid.appendChild(squareContainer);
    squareContainer.setAttribute('class', 'squareContainer');
    squareContainer.setAttribute('id', idNum);
    idNum++
});

let squareContainers = document.querySelectorAll('.squareContainer');

squareContainers.forEach(function() {
    let div = document.createElement('div');
    div.setAttribute('class', 'squares');
    for (let k = 0; k < squareAmount; k++) {
        squareContainers[k].appendChild(div);
    }
    plus++;
});

/*
squareContainers.forEach(function() {
    let div = document.createElement('div');

    for (let j = 0; j < squareAmount; j++) {
        for(let x = 0; x < squareAmount; x++) {
            div.setAttribute('class', 'squares');
            squareContainers[j].appendChild(div);
        }
    }
});

*/

/*
divArray.forEach(function(el) {
    let div = document.createElement('div');
    let squareContainer = document.createElement('div');

    for (let j = 0; j < squareAmount; j++) {
            grid.appendChild(squareContainer);
            squareContainer.setAttribute('class', 'squareContainer');
            for (let x = 0; x < squareAmount; x++) {
                console.log(`Hello, I am loop #${x} of loop #${j}!`);
            }
        }
    
});
*/

// Functions

function generateString(length = 1) {
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateString2(length = 1) {
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result2;
}

function insertDiv() {
        div.setAttribute('class', 'squares');
        squareContainer.appendChild(div);
}