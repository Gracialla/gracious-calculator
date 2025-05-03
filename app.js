// Import built-in module
const path = require('path');

// Import third-party module
const colors = require('colors');

// Import custom module
const calculator = require('./my_module/calculator');

// Show current file name using path module
console.log('Current file:'.cyan, path.basename(__filename).yellow);

// Get input from the command line
const [,, operation, num1, num2] = process.argv;
const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.log('Please provide two valid numbers.'.red);
  process.exit();
}

// Use calculator based on operation
switch(operation) {
  case 'add':
    console.log(`Result: ${calculator.add(a, b)}`.red);
    break;
  case 'subtract':
    console.log(`Result: ${calculator.subtract(a, b)}`.blue);
    break;
  case 'multiply':
    console.log(`Result: ${calculator.multiply(a, b)}`.green);
    break;
  case 'divide':
    console.log(`Result: ${calculator.divide(a, b)}`.magenta);
    break;
  default:
    console.log('Invalid operation. Use add, subtract, multiply, or divide.'.yellow);
}

