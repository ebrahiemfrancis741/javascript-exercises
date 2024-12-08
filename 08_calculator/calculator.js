const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let sum = 0;
  for(let i = 0; i < a.length; i++){
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let result = 1;
  for(let i = 0; i < a.length; i++){
    result *= a[i];
  }
  return result;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let result = 1;
  if(a == 0 || a == 1){
    return result;
  }
  else{
    for(let i = a; i >= 1; i--){
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
