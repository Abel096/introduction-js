/* ========== Destructuring of Two or More Objects ========== */

// You can destructure properties from multiple objects in a single statement.

const product = {
  name: "Tablet",
  price: 300,
  inStock: true,
};

const client = {
  name: "Abel",
  premium: true,
  address: {
    street: "4 Main St",
  },
};

// Destructuring properties from both objects
const { name } = product;
const {
  name: clientName,
  address: { street }, // Nested destructuring
} = client;

console.log(name); // "Tablet"
console.log(clientName); // "Abel"
console.log(street); // "4 Main St"