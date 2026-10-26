let firstNumber = Math.abs(Number(prompt("Введіть перше число:")));
let secondNumber = Math.abs(Number(prompt("Введіть друге число:")));

while (secondNumber !== 0) {
  const remainder = firstNumber % secondNumber;
  firstNumber = secondNumber;
  secondNumber = remainder;
}

console.log(firstNumber);
