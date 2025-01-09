function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(5, 3); // result2 will be 2

// Uncommon Error: Type 'string' is not assignable to type 'number'.
let result3 = add(5, "3"); // This line will cause an error
let result4 = subtract(5, "3"); // This will also cause an error