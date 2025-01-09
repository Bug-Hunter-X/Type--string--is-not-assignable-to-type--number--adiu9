# Type 'string' is not assignable to type 'number' in TypeScript
This example demonstrates a common TypeScript error: attempting to perform arithmetic operations with a string where a number is expected. TypeScript's type system helps catch these errors at compile time, preventing unexpected runtime behavior.

## Bug
The `bug.ts` file contains a simple addition and subtraction functions.  The error occurs when trying to pass a string to these functions, which expect number arguments. 

## Solution
The solution, in `bugSolution.ts`, shows how to correct this by using type assertion or type conversion to ensure the inputs are numbers before performing the operation.  This avoids the type error and ensures correct behavior.