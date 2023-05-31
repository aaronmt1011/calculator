let a;
let b;
let operator = "=";

// operate() 
function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}



// add() receives 2 numbers and returns sum of the numbers
function add(a, b) {
    let sum = a + b;
    return sum;
}

// subtract() receives 2 numbers and subtracts the 2nd number from the 1st number
// and then returns the amount left
function subtract(a, b) {
    let min = a - b;
    return min;
}

// multiply() receives 2 numbers and returns product of the numbers
function multiply(a, b) {
    let mul = a * b;
    return mul;
}

// divide() receives 2 numbers and uses 2nd number to divide from the 1st number
// and finally returns total left
function divide(a, b) {
    let div = a / b;
    return div;
}




