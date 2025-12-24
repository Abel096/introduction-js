/* ========== Template Strings and Concatenation ========== */

const product = "iPhone 17 Pro Max";
const price = 1999;
const brand = "Apple";

// Using concatenation
console.log("The prduct is: " + product);
console.log(product + "$ " + price + "USD. Brand: " + brand);

// Using template strings (Template Literals)
console.log(`The product is: ${product}`);
console.log(`${product} $${price} USD. Brand: ${brand}`);