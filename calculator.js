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