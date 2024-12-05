const sumAll = function(num1, num2) {
  let start = 0;
  let end = 0;

  if(!Number.isInteger(num1) || !Number.isInteger(num2)){
    return "ERROR";
  }
  if(num1 < 0 || num2 < 0){
    return "ERROR";
  }
  if(num2 > num1){
    start = num1;
    end = num2;
  }
  else{
    start = num2;
    end = num1;
  }

  let total = 0;
  for(let i = start; i <= end; i++){
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
