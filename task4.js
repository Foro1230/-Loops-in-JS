let number = Math.abs(Number(prompt("Введіть число:")));
let digitCount = 0;

do {
  digitCount++;
  number = Math.floor(number / 10);
} while (number > 0);

console.log(digitCount);
