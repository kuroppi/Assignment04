//STEP 1 - halfNumber()

let inputNumHalf = prompt("Enter a number:");
let outputNumHalf = halfNumber(inputNumHalf);

function halfNumber(numberNumHalf) {
    let resultNumHalf = numberNumHalf / 2;
    return `Half of ${numberNumHalf} is ${resultNumHalf}.`;
}

alert(outputNumHalf);  

//STEP 2 - squareNumber()

let inputNumSquare = prompt("Enter a number:");
let outputNumSquare = squareNumber(inputNumSquare);

function squareNumber(numberNumSquare) {
    let resultNumSquare = numberNumSquare * numberNumSquare;
    return `${numberNumSquare} squared is ${resultNumSquare}.`;
}

alert(outputNumSquare);  

// //STEP 3 - percentOf()

let inputNumOne = prompt("Enter a number:");
let inputNumTwo = prompt("Enter another number:");
let outputOne = percentOf(inputNumOne, inputNumTwo);

function percentOf(numberOne, numberTwo) {
    let resultOne = (numberOne / numberTwo) * 100;
    return `${numberOne} is ${resultOne}% of ${numberTwo}.`;
}

alert(outputOne);

//STEP 4 - findModulus()

let inputNumThree = prompt("Enter a number:");
let inputNumFour = prompt("Enter another number:");
let outputTwo = findModulus(inputNumThree, inputNumFour);

function findModulus(numberThree, numberFour) {
    let resultTwo = numberFour % numberThree;
    return `${resultTwo} is the modulus of ${numberThree} and ${numberFour}.`;
}

alert(outputTwo);


  
  
  