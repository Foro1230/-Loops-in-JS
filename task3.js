const number = Number(prompt("Введіть число:"));

for (let divisor = 1; divisor <= number; divisor++) {
  if (number % divisor === 0) {
    console.log(divisor);
  }
}
