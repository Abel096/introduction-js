/* ========== Merge Two or More Objects ========== */

const product = {
  name: "Tablet",
  price: 300,
  inStock: true,
};

const client = {
  name: "Abel",
  premium: true,
};

// You can merge two or more objects using the spread operator.
const kart = {
  quantity: 3,
  ...product, // ... to spread properties of product
};

console.log(kart); // Output: { quantity: 3, name: 'Tablet', price: 300, inStock: true }

// You can also create a new object that combines multiple objects.
const newObject = {
  product,
  client,
}

console.log(newObject); // Output: { product: { name: 'Tablet', price: 300, inStock: true }, client: { name: 'Abel', premium: true } }

// Note: If there are properties with the same name, the last object's property will overwrite the previous ones.
const combined = {
  ...product,
  ...client,
};

console.log(combined); // Output: { name: 'Abel', price: 300, inStock: true, premium: true }

// Object.assign can also be used to merge objects.
const newObjectAssign = Object.assign(product, client);
console.log(newObjectAssign); // Output: { name: 'Abel', price: 300, inStock: true, premium: true }