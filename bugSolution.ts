function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(5, 3); // result2 will be 2

// Solution: Type Assertion or conversion
let result3 = add(5, parseInt("3") ); // Type Assertion or conversion to number using parseInt
let result4 = subtract(5, Number("3")); // Type Assertion or conversion to number using Number

console.log(result3); // Output: 8
console.log(result4); // Output: 2