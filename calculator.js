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
let operator;
let operandB;

function operate(operandA,operator,operandB){
   return operator(operandA,operandB)
}

const numBtn = document.querySelectorAll('.digits');
const opBtn = document.querySelectorAll('.operators');
const equalBtn = document.querySelectorAll('.equals');
const clearBtn = document.querySelectorAll('#clear');
const calcDisplay = document.querySelector('.calc-display');

let displayValue = '';
numBtn.forEach((digit) => digit.addEventListener('click', () => {
    displayValue += digit.textContent
    calcDisplay.textContent = displayValue
}))


