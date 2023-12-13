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

    const operatorSymbols = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        equals: '='
      };

    const numBtn = document.querySelectorAll('.digits');
    const opBtn = document.querySelectorAll('.operators');
    const equalBtn = document.querySelector('#operate');
    const clearBtn = document.querySelector('#clear');
    const calcDisplay = document.querySelector('.calc-display');
    const calculation = document.querySelector('.calculation')

    let displayValue = '';
    let isNewCalculation = true;
    calcDisplay.textContent = "0"
    calculation.textContent = ""

    numBtn.forEach((digit) => digit.addEventListener('click', () => {
        if(isNewCalculation){
            displayValue = '';
            isNewCalculation = false;
        }
        displayValue += digit.textContent;
        calculation.textContent += `${digit.textContent}`;
        calcDisplay.textContent = displayValue;
    }))

    opBtn.forEach((operator) => operator.addEventListener('click', (event) => {
        operandA = +displayValue;
        operatorClicked = event.target.value
        calculation.textContent+= ` ${operatorSymbols[operatorClicked]} `
        displayValue = ""
    }))

    equalBtn.addEventListener('click',() => {
        operandB = +displayValue;
        const result = operatorFunctions[operatorClicked](operandA,operandB)
        if(operatorClicked == "divide" && operandB == 0){
            calcDisplay.textContent = "Not a number"
        } else{
        displayValue = result;
        calcDisplay.textContent = displayValue;
        calculation.textContent+= ` ${operatorSymbols['equals']}` + ` ${result}`;
        isNewCalculation = true;
    }
    })

    clearBtn.addEventListener('click', () => {
        displayValue = "0"
        calcDisplay.textContent = displayValue;
        calculation.textContent = ""
    })
