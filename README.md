# Stack Overflow in Euclidean Algorithm

This repository demonstrates a common error in recursive algorithms: stack overflow. The `bug.js` file contains a JavaScript implementation of the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers.  While functionally correct for many inputs, it fails for relatively large inputs due to excessive recursion depth.

The `bugSolution.js` file provides a corrected version using iteration to avoid stack overflow issues.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using Node.js. Note the incorrect output and potential stack overflow for large inputs such as `foo(100000,10)`.
3. Run `bugSolution.js` to see the corrected iterative implementation.

## Lesson Learned

This example highlights the importance of considering potential stack overflow errors when using recursion, especially with inputs of unbounded size.  Iterative solutions often offer a more robust alternative for such scenarios.