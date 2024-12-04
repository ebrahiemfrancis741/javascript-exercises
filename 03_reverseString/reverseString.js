const reverseString = function(text) {
  let reversed = "";
  for(let i = text.length - 1; i >= 0; i--){
    reversed += text[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
