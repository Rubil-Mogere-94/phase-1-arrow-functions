// 1. Function expression: divide
const divide = function() {
    return 2000 / 100;
  };
  
  // 2. Arrow function: square
  const square = (num) => num * num;
  
  // 3. Arrow function: add
  const add = (a, b) => a + b;
  
  // Export the functions for testing
  module.exports = {
    divide,
    square,
    add
  };
  