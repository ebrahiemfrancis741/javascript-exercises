const removeFromArray = function(array, ...remove) {
  let newArray = [];
  let found = false;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < remove.length; j++){
      if(array[i] === remove[j]){
        found = true;
        break;
      }
    }
    if (!found){
      newArray.push(array[i]);
    }
    // reset found flag
    found = false;
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
