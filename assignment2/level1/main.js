const sum = require("./sum");

const result = sum(1, 3);
console.log("sum result: ", result);

const calculator = require("./calculator");

const calculatorAdd = calculator.add(1, 3);
const calculatorSubtract = calculator.subtract(1, 3);
const calculatorMultiply = calculator.multiply(1, 3);
const calculatorDivide = calculator.divide(1, 3);

console.log(
  calculatorAdd,
  calculatorSubtract,
  calculatorMultiply,
  calculatorDivide
);
