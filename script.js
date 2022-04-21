//Variables

let grid = document.querySelector('#grid');

let squareAmount = 16;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let result = '';

let i = 0;

let divArray = [];

while (i < squareAmount * squareAmount) {
    generateString();
    divArray.push(result);
    i++;
}

divArray.forEach(function(el) {
    let div = document.createElement('div');
    div.setAttribute('class', 'squares');
    grid.appendChild(div);
});


/*
let docFrag = document.createDocumentFragment();
for (let j = 0; j < divArray.length; j++) {
    docFrag.appendChild(divArray[j]);
}

document.body.appendChild(docFrag);
*/

// Functions

function generateString(length = 1) {
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}