/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

function initialize() {
    document.getElementById("display").textContent = "";
}

function digitPressed(digit) {
    document.getElementById("display").textContent = digit;
}
