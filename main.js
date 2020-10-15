function add(a, b) {
  return a + b;
}

console.log(add(3, 4));

function multiply(a, b) {
  let array = [];
  let index = 0;
  let timesNumber = Number(b);
  while (index < timesNumber) {
    array.push(a);
    index++;
  }
  let sum = array.reduce(add);
  return sum;
}

console.log(multiply(5, 6));

function power(x, n) {
  let powerArray = [];
  let index = 0;
  let timesNumber = Number(n);
  while (index < timesNumber) {
    powerArray.push(x);
    index++;
  }
  let result = powerArray.reduce(multiply);
  return result;
}

console.log(power(2, 5));

function factorial(x) {
  let factArray = [];
  let index = 1;
  while (index <= x) {
    factArray.push(index);
    index++;
  }
  let factor = factArray.reduce(multiply);
  return factor;
}

console.log(factorial(6));
