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
  let firstNumber = parseFloat(document.querySelector("#firstnumber").value);
  //   let firstNumber = 5.22336666666;
  console.log(firstNumber);
  //Read second number
  let secondNumber = parseFloat(document.querySelector("#secondnumber").value);
  //   let secondNumber = 3;
  //Read operator, what is operator
  const operatorInput = document.querySelector("#operator");

  //Maybe null???
  let results = document.querySelector("#results");

  //If-statement, for add, sub, mul, div
  if (operatorInput.value === "add") {
    // console.log("Operator value: " + operatorInput.value);
    results = firstNumber + secondNumber;
    // console.log(results);
    checkingCheckbox();
  } else if (operatorInput.value === "sub") {
    // console.log("Operator value: " + operatorInput.value);
    results = firstNumber - secondNumber;
    // console.log(results);
    checkingCheckbox();
  } else if (operatorInput.value === "mul") {
    // console.log("Operator value: " + operatorInput.value);
    results = firstNumber * secondNumber;
    // console.log(results);
    checkingCheckbox();
  } else {
    // console.log("Operator value: " + operatorInput.value);
    results = firstNumber / secondNumber;
    // console.log(results);
    checkingCheckbox();
  }

  function checkingCheckbox() {
    console.log("checking checkbox");
    let checkBox = document.querySelector("#doround");
    if (checkBox.checked === true) {
      console.log("true");
      checkingDecimals();
    } else {
      console.log("false");
      printResult();
    }
  }

  function checkingDecimals() {
    console.log("checking decimals");
    //Read decimalInput
    let decimalInput = document.querySelector("#decimals");
    // let stringToNumber = parseInt(results);
    if (decimalInput.value === "0") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(0);
      printResult();
    } else if (decimalInput.value === "1") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(1);
      printResult();
    } else if (decimalInput.value === "2") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(2);
      printResult();
    } else if (decimalInput.value === "4") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(4);
      printResult();
    } else if (decimalInput.value === "5") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(5);
      printResult();
    } else if (decimalInput.value === "6") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(6);
      printResult();
    } else if (decimalInput.value === "7") {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(7);
      printResult();
    } else {
      console.log("Decimal value: " + decimalInput.value);
      results = results.toFixed(8);
      printResult();
    }
  }

  function printResult() {
    console.log("printing results");
    let listElement = document.createElement("li");
    let createListString = document.createTextNode(results.toString());
    listElement.appendChild(createListString);
    document.getElementById("results").appendChild(listElement);
    document.querySelector("#results").scrollTo(0, 10000);
    document.querySelector("#firstnumber").value = results.toString();
  }
}

function clearing() {
  console.log("clearing..");
  // Why doesn't .reset() work?
  // document.getElementById("interface").reset();
  location.reload();
}
