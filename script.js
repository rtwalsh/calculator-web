/*
 *  Web-Based Calculator
 *  
 *  Author: Robert Walsh
 *  Date:   August 27, 2024
 */

const MAX_DIGITS = 15;
const MAX_DECIMALS = 10;

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
    if ((operand === "") && (digit === ".")) {
        operand = "0";
    }  
    
    if (operand === "0") {
        if (digit === "0") {
            digit = "";
        } else if (digit !== ".") {
            operand = "";
        }
    }

    if ((digit === ".") && operand.includes(".")) {
        digit = "";
    }

    operand += digit;
    return operand;
}

function operatorPressed(operation) {
    operator = operation;
}

function performOperation() {
    let op1 = 0.0;
    if (operand1 !== "") {
        op1 = parseFloat(operand1);
    }

    let op2 = 0.0;
    if (operand2 !== "") {
        op2 = parseFloat(operand2);
    }

    let result = 0.0;
    let error = "";

    if (operator === "+") {
        result = op1 + op2;
    } else if (operator === "-") {
        result = op1 - op2;
    } else if (operator === "*") {
        // Note: The "*" above could be "x" if that
        // is what was used for the button label
        result = op1 * op2;
    } else if (operator === "/") {
        if (op2 == 0) {
            error = "ERR: DIV BY 0";
        } else {
            result = op1 / op2;
        }
    } else if (operator === "") {
        result = op1;
    }

    if (error === "") {
        let resultStr = result.toString();
        if (resultStr.length > MAX_DIGITS) {
            if (resultStr.includes(".")) {
                let decimalPoint = resultStr.indexOf(".");
                if (decimalPoint > MAX_DIGITS - 1) {
                    result = result.toExponential(MAX_DECIMALS);
                } else {
                    result = result.toFixed(MAX_DIGITS - decimalPoint - 1);
                }
            } else {
                result = result.toExponential();
            }
        }
        display(result);
    } else {
        display(error);
    }
}

function display(text) {
    document.getElementById("display").textContent = text;
}
