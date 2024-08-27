/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

let operand;

function initialize() {
    operand = "";
    document.getElementById("display").textContent = "";
}

function digitPressed(digit) {
    operand = operand + digit; // could be operand += digit;
    document.getElementById("display").textContent = operand;
}
