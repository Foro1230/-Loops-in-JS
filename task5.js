let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  const number = Number(prompt("Введіть число:"));

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Додатних чисел:", positiveCount);
console.log("Від’ємних чисел:", negativeCount);
console.log("Нулів:", zeroCount);
console.log("Парних чисел:", evenCount);
console.log("Непарних чисел:", oddCount);
