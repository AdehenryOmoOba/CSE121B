function add(number1, number2) {
  return number1 + number2;
}

/* Using a function declaration, define another function named addNumbers 
   that gets the values of two HTML form controls with IDs of add1 and add2. */
function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

/* Add a "click" event listener to the HTML button with an ID of addNumbers 
   that calls the addNumbers function. */
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

/* Using a function declaration, define another function named subtractNumbers 
   that gets the values of two HTML form controls with IDs of subtract1 and subtract2. */
function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}

/* Add a "click" event listener to the HTML button with an ID of subtractNumbers 
   that calls the subtractNumbers function. */
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Using a function declaration, define another function named multiplyNumbers 
   that gets the values of two HTML form controls with IDs of factor1 and factor2. */
function multiplyNumbers() {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
}

/* Add a "click" event listener to the HTML button with an ID of multiplyNumbers 
   that calls the multiplyNumbers function. */
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Division Feature - Using function declaration */
function divide(dividend, divisor) {
  return dividend / divisor;
}

/* Using a function declaration, define another function named divideNumbers 
   that gets the values of two HTML form controls with IDs of dividend and divisor. */
function divideNumbers() {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(dividend, divisor);
}

/* Add a "click" event listener to the HTML button with an ID of divideNumbers 
   that calls the divideNumbers function. */
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Selection Structures */
/* Add an event listener for the Get Total Due button when clicked */
document.querySelector("#getTotal").addEventListener("click", function () {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let isMember = document.querySelector("#member").checked;
  let discount = isMember ? 0.2 : 0;
  let total = subtotal - subtotal * discount;
  document.querySelector("#total").textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Declare and instantiate an array variable to hold the numbers 1 through 13 */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Assign the value of the array variable to the HTML element with an ID of array */
document.querySelector("#array").textContent = numbersArray.join(", ");

/* Use the filter() array method to find all of the odd numbers of the array variable */
let oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers.join(", ");

/* Use the filter() array method to find all of the even numbers of the array variable */
let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").textContent = evenNumbers.join(", ");

/* Use the reduce() array method to sum the array variable elements */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Use the map() array method to multiply each element in the array variable by 2 */
let multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").textContent = multipliedArray.join(", ");

/* Use the map() and reduce() array methods to sum the array elements after multiplying each element by two */
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
