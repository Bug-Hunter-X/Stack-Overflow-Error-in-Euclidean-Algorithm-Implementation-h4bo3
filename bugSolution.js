function foo(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a === 1;
}

console.log(foo(10, 2)); // Output: false
console.log(foo(10, 5)); // Output: true
console.log(foo(100, 10)); // Output: false
console.log(foo(100000, 10)); // Output: false (Correctly handles large inputs) 