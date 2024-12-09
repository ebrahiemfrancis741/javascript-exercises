const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();
  let ages = [];
  let age;

  // calculate ages
  for(let i = 0; i < people.length; i++){
    // if true use current year
    if(people[i]["yearOfDeath"] == undefined){
      age = currentYear - people[i]["yearOfBirth"];
    }
    else{
      age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
    }
    ages.push(age);
  }

  // now find the largest
  let oldestIndex = 0;
  let oldest = ages[oldestIndex];
  for(let i = 1; i < ages.length; i++){
    if(ages[i] > oldest){
      oldest = ages[i];
      oldestIndex = i;
    }
  }

  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
