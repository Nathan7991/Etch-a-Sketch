//Variables

let grid = document.querySelector('#grid');

let squareAmount = 16;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let result = '';

let result2 = '';

let i = 0;

let divArray = [];

let containerArray = [];

while (i < squareAmount * squareAmount) {
    generateString();
    generateString2();
    divArray.push(result);
    containerArray.push(result2);
    i++;
}

/*
containerArray.forEach(function(el) {
    let squareContainer = document.createElement('div');
    squareContainer.setAttribute('class', 'squareContainer');
    grid.appendChild(squareContainer);
});
*/

divArray.forEach(function(el) {
    let div = document.createElement('div');
    let squareContainer = document.createElement('div');

    for (let j = 0; j < divArray.length; j++) {
        if (j % squareAmount === 0) {
            grid.appendChild(squareContainer);
            squareContainer.setAttribute('class', 'squareContainer');
            for (let x = 0; x < divArray.length; x++) {
                div.setAttribute('class', 'squares');
                squareContainer.appendChild(div);
            }
        }
    }
    
    /*
    let div = document.createElement('div');
    div.setAttribute('class', 'squares');
    grid.appendChild(div);
    */
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

function generateString2(length = 1) {
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result2;
}