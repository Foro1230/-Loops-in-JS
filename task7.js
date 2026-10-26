let number = prompt("Введіть число:");
const shift = Number(prompt("На скільки цифр змістити число?"));
const digits = number.split("");
const shiftCount = ((shift % digits.length) + digits.length) % digits.length;

for (let i = 0; i < shiftCount; i++) {
  digits.push(digits.shift());
}

number = digits.join("");
console.log(number);
