// Create functions for each operator

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b){
    return a / b;
}

let operandA;
let operatorClicked;
let operandB;


const operatorFunctions = {
    add,
    subtract,
    multiply,
    divide
}

const numBtn = document.querySelectorAll('.digits');
const opBtn = document.querySelectorAll('.operators');
const equalBtn = document.querySelector('#operate');
const clearBtn = document.querySelectorAll('#clear');
const calcDisplay = document.querySelector('.calc-display');

let displayValue = '';
let isNewCalculation = true;

numBtn.forEach((digit) => digit.addEventListener('click', () => {
    if(isNewCalculation){
        displayValue = ''
        isNewCalculation = false;
    }
    displayValue += digit.textContent
    calcDisplay.textContent = displayValue
}))

opBtn.forEach((operator) => operator.addEventListener('click', (event) => {
    operandA = +displayValue;
    operatorClicked = event.target.value
    displayValue = ""
}))

equalBtn.addEventListener('click',() => {
    operandB = +displayValue;
    const result = operatorFunctions[operatorClicked](operandA,operandB)
    displayValue = result;
    calcDisplay.textContent = displayValue;
    isNewCalculation = true;
})
