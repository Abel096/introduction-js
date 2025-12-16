/* ========== Variables in JavaScript ========== */

// In JavaScript there is three ways to declare a variable: var, let and const, however, var is not recommended.

// 1. Usung let
// When you declare a variable it cannot start with a number and cannot start with special characters.
// JavaScript is dynamicaly typed, it means that you don't need to declare the data type of your variables.
let client = "Abel";
console.log(client);
// You can re-asign the value of a let variable, even you can asign a different data type
client = 30;
console.log(client);
// You can declare a variable without initialize it.
let price;
console.log(price); //Output: undefined
// You can initialize it later
price = 1000;
console.log(price);
