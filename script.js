/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

let operand;
let operator;

function initialize() {
    clearAll();
}

function clearAll() {
    operand = "";
    operator = "";
    display("");
}

function digitPressed(digit) {
    operand = operand + digit; // could be operand += digit;
    display(operand);
}

function operatorPressed(operation) {
    operator = operation;
}

function display(text) {
    document.getElementById("display").textContent = text;
}
