function add(price1, price2) {
 const total = price1 + price2;
 return total;
}

const bill = add(50, 64);
console.log(bill);


function add2(price1, price2) {
 return price1 + price2;
}

const bill2 = add2(50, 64);
console.log(bill);


function doMath(num1, num2) {
 const sum = num1 + num2;
 const diff = num1 - num2;
 const multiply = sum * diff;
 const result = multiply / 2;
 return result;
}

const result = doMath(10, 5);
console.log(result);


function isEven(num) {
 if (num === 0) {
  console.log(num)
  return true
 } else {
  return false
 }
}

console.log(isEven(5));


function isOdd(num) {
 if (num % 2 !== 0) {
  return true;
 } else {
  return false;
 }
}

console.log(isOdd(5));
console.log(isOdd(25));
console.log(isOdd(16));