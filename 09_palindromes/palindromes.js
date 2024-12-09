const palindromes = function (text) {
  const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
  text = text.toLowerCase();
  console.log(text)
  // remove punctuation
  text = text.replace(punctuationRegex, '');
  // remove spaces
  text = text.replaceAll(" ", "");
  console.log(text);

  let reversed = "";
  for(i = text.length - 1; i >= 0; i--){
    reversed += text[i];
  }
  if(text == reversed){
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
