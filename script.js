/*
=========
Variables
=========
*/
let grid = document.querySelector('.grid');

let squareAmount = 16;

let i = 0;

let squares = document.createElement('div');

while (i < squareAmount) {
    let newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'squares');
    grid.appendChild(newSquare);
    i++
}

/*
=========
Functions
=========
*/