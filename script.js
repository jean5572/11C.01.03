"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  //adding eventlisteners
  //   calButton.addEventListener("click", calculating);
  document.querySelector("#calculate").addEventListener("click", calculating);
  document.querySelector("#clear").addEventListener("click", clearing);
}

function calculating() {
  console.log("calculating");
  //Read first number
  //   let firstNumber = document.querySelector("#firstnumber");
  let firstNumber = 5.2233;
  //Read second number
  //   let secondNumber = document.querySelector("#secondnumber");
  let secondNumber = 3;
  //Read operator, what is operator
  const operatorInput = document.querySelector("#operator");

  //Maybe null???
  let results = document.querySelector("#results");

  //If-statement, for add, sub, mul, div
  if (operatorInput.value === "add") {
    console.log("Operator value: " + operatorInput.value);
    results = firstNumber + secondNumber;
    console.log(results);
    checkingCheckbox();
  } else if (operatorInput.value === "sub") {
    console.log("Operator value: " + operatorInput.value);
    results = firstNumber - secondNumber;
    console.log(results);
    checkingCheckbox();
  } else if (operatorInput.value === "mul") {
    console.log("Operator value: " + operatorInput.value);
    results = firstNumber * secondNumber;
    console.log(results);
    checkingCheckbox();
  } else {
    console.log("Operator value: " + operatorInput.value);
    results = firstNumber / secondNumber;
    console.log(results);
    checkingCheckbox();
  }
}

function checkingCheckbox(results) {
  console.log("checking checkbox");
  let checkBox = document.querySelector("#doround");
  if (checkBox.checked === true) {
    checkingDecimals();
    console.log("true");
  } else {
    console.log("false");
    printResult();
  }

  function checkingDecimals() {
    console.log("checking decimals");
    //Read decimalInput
    //   let decimalInput = document.querySelector("#decimals");
    //   if (decimalInput.value === "0") {
    //     console.log("Decimal value: " + decimalInput.value);
    //
  }
}

function printResult(results) {
  console.log(results);
}

function clearing() {
  console.log("clearing..");
}
