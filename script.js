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
        operand1 = operand1 + digit; // could be operand += digit;
        display(operand1);
    } else {
        operand2 = operand2 + digit;
        display(operand2);
    }
}

function operatorPressed(operation) {
    operator = operation;
}

function display(text) {
    document.getElementById("display").textContent = text;
}
