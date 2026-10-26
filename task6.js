let answer;

do {
  const firstNumber = Number(prompt("Введіть перше число:"));
  const operator = prompt("Введіть знак (+, -, *, /):");
  const secondNumber = Number(prompt("Введіть друге число:"));
  let result;

  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  }

  console.log(result);
  answer = prompt("Бажаєте розв’язати ще один приклад? (так/ні)");
} while (answer === "так");
