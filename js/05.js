/* ========== Objects Manipulation ========== */

const product = {
  name: "Tablet",
  price: 300,
  inStock: true,
};

// 1. Updating Object Properties
// You can update the properties of an object using dot notation or bracket notation.
product.price = 280; // Using dot notation
product["name"] = "Updated Tablet"; // Using bracket notation

console.table(product);

// 2. Adding New Properties
// You can add new properties to an object dynamically. If the property does not exist, it will be created.
product.category = "Electronics"; // Using dot notation
product["brand"] = "TechBrand"; // Using bracket notation

console.table(product);

// 3. Deleting Properties
// You can delete properties from an object using the delete operator.
delete product.inStock; // Using dot notation
delete product["brand"]; // Using bracket notation

console.table(product);

// 5. Freezing Objects
// You can freeze an object to prevent any modifications to its properties.
Object.freeze(product);

// Attempting to modify a frozen object will have no effect.
product.price = 250; // This will not change the price
product.newProperty = "New Value"; // This will not add a new property

console.table(product);

// 6. Sealing Objects
// You can seal an object to prevent adding or deleting properties, but you can still modify existing properties.
const sealedProduct = {
  name: "Sealed Tablet",
  price: 400,
};

Object.seal(sealedProduct);

// Modifying existing property
sealedProduct.price = 350; // This will change the price

// Attempting to add a new property will have no effect
sealedProduct.newProperty = "New Value"; // This will not add a new property

// Attempting to delete a property will have no effect
delete sealedProduct.name; // This will not delete the name property

console.table(sealedProduct);