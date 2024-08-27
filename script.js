/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

let operand;

function initialize() {
    clearAll();
}

function clearAll() {
    operand = "";
    display("");
}

function digitPressed(digit) {
    operand = operand + digit; // could be operand += digit;
    display(operand);
}

function display(text) {
    document.getElementById("display").textContent = text;
}
