const start = Number(prompt("Введіть початок діапазону:"));
const end = Number(prompt("Введіть кінець діапазону:"));
let sum = 0;

for (let number = start; number <= end; number++) {
  sum += number;
}

console.log(sum);
