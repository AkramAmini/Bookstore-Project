"use strict";

/* let hasDriverLicense= false;
const passTest = true;

if (passTest) hasDriverLicenses = true;
if (hasDriverLicense) console.log('I can  drive');

// const interface = 'Audio';
const private = 534; 

function logger() {
  console.log('My name is Hadis');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const firstInformation = describeCountry('Finland', 6, 'Helsinki');
console.log(firstInformation);

const secondInformation = describeCountry('Iran', 92, 'Tehran');
console.log(secondInformation);

const thirdInformation = describeCountry('China', 150, 'Beijing');
console.log(thirdInformation);



const age1 = calcAge1(1991); 

  function calcAge1(birthYear) {
    return 2037 - birthYear;
  }

 const age2 = calAge2(1991);

 const calAge2 = function (birthYear) {
   return  2037 - birthYear;
 }

 console.log(age2);

  const calAge2 = function (birthYear) {
   return  2037 - birthYear;
 }

 Arrow function 
  
const calcAge3 =  birthYear => 2027 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins);

const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);






const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);

const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`Koalass win (${avgKoalas} vs ${avgDolphins})`);
  }
}
 console.log(checkWinner(avgDolphins, avgKoalas));










const calcAverage = (score1, score2, score3) =>
  (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
}

// Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphins);
console.log(avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins);
console.log(avgKoalas);

checkWinner(avgDolphins, avgKoalas);


const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steveen', 'Peter'];
console.log(friends);

const years = new Array (1990, 1984, 2008, 2027);
console.log(years);

console.log(friends[2]);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length-1 ]);


const firstName = 'Hadis';
const hadis = ['Hadis', 'Amini', 2027-1990, 'programmer', friends];
console.log(hadis);

Exercise 
const calcAge = function  (birthyear) {
  return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);



const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);


// Add elements

const friends = ['Micheal', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements 

friends.pop()
const popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} */


























