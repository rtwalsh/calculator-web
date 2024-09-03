/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

let operand1;
let operand2;
let operator;

function initialize() {
    clearAll();
}

function clearAll() {
    operand1 = "";
    operand2 = "";
    operator = "";
    display("");
}

function digitPressed(digit) {
    if (operator === "") {
        operand1 = appendDigit(operand1, digit);
        display(operand1);
    } else {
        operand2 = appendDigit(operand2, digit);
        display(operand2);
    }
}

function appendDigit(operand, digit) {
    operand += digit;
    return operand;
}

function operatorPressed(operation) {
    operator = operation;
}

function performOperation() {
    let op1 = parseFloat(operand1);
    let op2 = parseFloat(operand2);
    let result = 0.0;

    if (operator === "+") {
        result = op1 + op2;
    } else if (operator === "-") {
        result = op1 - op2;
    } else if (operator === "*") {
        // Note: The "*" above could be "x" if that
        // is what was used for the button label
        result = op1 * op2;
    } else if (operation === "/") {
        result = op1 / op2;
    }

    display(result);
}

function display(text) {
    document.getElementById("display").textContent = text;
}
