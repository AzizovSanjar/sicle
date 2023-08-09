// 1)
let array = [1, 2, 5, 6, 88, 5];

let result = 0;

for (let i = 0; i < array.length; i++) {
  result += array[i];
}

console.log(result);

// 2)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] ** 2);
}

// 3)

let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    alert(num[i]);
  }
}
