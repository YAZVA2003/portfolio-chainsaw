let Y = Number(prompt("Введите целое число:"));

for (let i = 1; i <= Y; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

let chemElements = ["Гелий", "Литий", "Бериллий", "Бор", "Углерод"];
const numbers = [1, 2, 3, 4, 5];
chemElements[2] = "Литий";
chemElements.unshift("Водород", chemElements.pop());
chemElements.push("Азот");
console.log(chemElements[chemElements.length - 1])
console.log(chemElements[numbers.pop()])
console.log(chemElements);