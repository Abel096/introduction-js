/* ========== Objects and Destructuring ========== */

// 1. Objects
// Objects are collections of key-value pairs that can store multiple values.
const product = {
  name: "Tablet", // key: name, value: "Tablet"
  price: 300,
  inStock: true,
};

console.log(product);
console.table(product);

// You can access object properties using dot notation or bracket notation.
console.log(product.name); // Dot notation
console.log(product["price"]); // Bracket notation

// 2. Destructuring
// Destructuring allows you to extract values from objects and assign them to variables.
const { name, price, inStock } = product;

console.log(name); // "Tablet"
console.log(price); // 300
console.log(inStock); // true

// You can also rename variables during destructuring.
const { name: productName, price: productPrice } = product;

console.log(productName); // "Tablet"
console.log(productPrice); // 300

// 3. Object Literals Enhancement
// When the variable names match the object property names, you can use shorthand syntax.
const category = "Electronics";
const newProduct = {
  name,
  price,
  category,
};

console.log(newProduct);