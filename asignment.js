// Assignments JS

// Values and Variables
// Data Types

/*let country = "Iran";
console.log(typeof country);

let continent = "Asia";
console.log(continent);

let population = 92;
console.log(typeof population);

let isIsland = true;
console.log(typeof isIsland); */

// let, const and var

// language = 'persian';
// const country = 'Iran';
// const continent = 'Asia';
// const isIsland = true;
// isIsland = true;

// LECTURE: Basic Operators

// let iranPopulation = 92;
// console.log(iranPopulation / 2);
// iranPopulation++;
// let finlandPopulation = 6;
// console.log(iranPopulation > finlandPopulation);
// let averageCountry = 33;
// console.log(iranPopulation<averageCountryCountry);

// LECTURE: Strings and Template Literals

// const country = "Iran";
// const continent = "Asia";
// const population = 92;
// const language = "persian";

// const description = `${country}  is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// LECTURE: Taking Decisions: if / else Statements

// const population = 92;
// const averagePopulation = 33;
// country = "Iran";

// if(population>33) {
//   console.log(`${country}'s population is above average`);
// } else{
// const populationBelow = averagePopulation - population;
// console.log(`${country}' population is ${populationBelow} million below average`)
// };

// LECTURE: Type Conversion and Coercion

// '9' - '5'; // 4
// '19' - '13' + '17'; // 6 + '17' = 617
// '19' - '13' + 17; // 6 + 17 = 23
// '123' < 57;  // false
// 5 + 6 + '4' + 9 - 4 - 2; // 11 + '4' = '114' + 9 = 1149 - 4 - 2 = 1143

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if(numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
// console.log('No borders');
// };

// LECTURE: Logical Operators

// const language = 'persian';
// const population = 92;
// const isIsland = false;

// if (language === 'english' && population < 50 && !isIsland) {
// console.log('You should live in Iran :)');
// } else{
// console.log('Iran does not meet your criteria :(');
// };

// LECTURE: The switch Statement

// const language = "chinese";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too");
// }

// LECTURE: The Conditional (Ternary) Operator

// const tip = 15/100; // 0.15
// const tip = 20/100; // 0.2
// console.log(tip);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// LECTURE: Taking Decisions: if / else Statements

// const population = 92;
// const description =
//   population > 33
//     ? `Iran's population is above average.`
//     : `Iran's population is below average.`;
// console.log(description);

// LECTURE: Functions

// function percentageOfWorld1(country, population) {
// return `${country} has ${population} million people, so it's about ${(population / 7900) * 100} of the world population`;
// }

// const china = percentageOfWorld1 ('China', 1441);
// console.log(china);

// const iran = percentageOfWorld1 ('Iran', 92);
// console.log(iran);

// const japan = percentageOfWorld1 ('Japan', 123);
// console.log(japan);

// const percentageOfWorld2 = function (country, population) {
// return `${country} has ${population} million people, so it's about ${(population / 7900) * 100} of the world population`;
// }

// LECTURE: Function Declarations vs. Expressions

// const china = percentageOfWorld2('China', 1441);
// console.log(china);

// const iran = percentageOfWorld2('Iran', 92);
// console.log(iran);

// const japan = percentageOfWorld2('Japan', 123);
// console.log(japan);

// LECTURE: Arrow Functions

// const percentageOfWorld3 = (country, population) => {
//   const percentage = (population / 7900) * 100;

//   return `${country} has ${population} million people, so it's about ${percentageا} of the world population`;
// };

// console.log(percentageOfWorld3("China", 1441));

// LECTURE: Functions Calling Other Functions

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// function describePopulation(country, population) {
// const percentage = percentageOfWorld1(population);

//   return `${country} has ${population} million people, which is about ${percentage} of the world.`
// }
//  const describePopulation1 = describePopulation('Iran', 92);
//  console.log(describePopulation1);

//  const describePopulation2 = describePopulation('Japan', 123);
//  console.log(describePopulation2);

//  const describePopulation3 = describePopulation('China', 1441);
//  console.log(describePopulation3);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million
// people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };
// describePopulation("Portugal", 10);
// describePopulation("China", 1441);
// describePopulation("USA", 332);

// LECTURE: Introduction to Arrays

// const populations = [92, 123, 52, 62];

// console.log(populations);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populations = [92, 123, 52, 62];
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

//           مرور روز 6

// // JavaScript

// به جای اینکه فقط دفترت را بخوانی، این کار را بکن:

// اول بدون نگاه کردن به دفتر، سعی کن بنویسی:
// Arrow Function ***
// Function Declaration ***
// Function Expression  ***
// if / else if / else ***
// switch ***
// Array ****
// ⏳ Ternary Operator (? :) ***
// ⏳ Function Calling Other Functions ****
// ⏳ percentageOfWorld1 و describePopulation
// ⏳ مرور Challengeها (لازم نیست همه را کامل بنویسی؛ یکی دو تا کافی است.)
// اگر جایی یادت نبود، فقط همان قسمت را از روی دفتر مرور کن.
// یکی دو تمرین قدیمی را دوباره حل کن.

// این روش خیلی مؤثرتر از فقط خواندن یادداشت‌هاست.

// Arrow Function

// const retirement = (birthyear) => {      ارو فانکشن مساوی کوچکتر داره
// return 2027 - birthyear ;
// };

// const age1 = retirement(1990);
// console.log(age1);

// Function Declaration

// function age (birthYear) {
//   return 2027 - birthYear;
// }

// const hadis = age (1990);
// console.log(hadis);

// // Arrow Function

// const age = (birthYear) => {
//   return 2027 - birthYear;
// };

// const hadis = age(1990);
// console.log(hadis);

// Function Expression

// const age = function (birthYear) {
//   return 2027 - birthYear;
// };

// const hadis = age(1990);
// console.log(hadis);

// function age(birthYear) {
//   return 2027 - birthYear;
// }

// const hadis = age(1990);
// console.log(hadis);

// const age = function (birthYear) {
//   return 2027 - birthYear;
// };

// const hadis = age(1990);
// console.log(hadis);

// const age = (birthYear) => {
//   return 2027 - birthYear;
// };

// const hadis = age(1990);
// console.log(hadis);

// if / else if / else

// const aveScore = (
//   score1,
//   score2,
//   score3, //مساوی علامت نذاشتی
// ) => (score1 + score2 + score3) / 3;

// const checkWinner = (aveScoreDolphins, aveScoreSagha) => {
//   //مساوی علامت نذاشتی
//   if (aveScoreDolphins >= 2 * aveScoreSagha) {
//     //      در جاوااسکریپت شرط باید داخل پرانتز باشد:
//     console.log(
//       `dolphins win the game (${aveScoreDolphins} vs. ${aveScoreSagha})`,
//     );
//   } else if (aveScoreSagha >= 2 * aveScoreDolphins) {
//     // else if
//     console.log(
//       `Sagha win the game (${aveScoreSagha} vs. ${aveScoreDolphins})`,
//     ); // در جواب شرط باید داخل کانسول لاگ باشه
//   } else {
//     console.log("no one win the game!");
//   }
// };

// const aveScoreDolphins = aveScore(20, 10, 40); /// تابع صدا نزدی اواسکور
// console.log(aveScoreDolphins);

// const aveScoreSagha = aveScore(30, 80, 40);
// console.log(aveScoreSagha);

// checkWinner(aveScoreDolphins, aveScoreSagha);

// -----------------------------

// const aveScoreDolphis = (10, 15, 20);
// console.log(aveScore);

// switch

// const day = "friday"
// switch (day) {
//   case "friday":
//     console.log("rest day");
//     break;

//   case "saturday":
//     console.log("workday");
//     break;

//   case "sunday":
//     console.log("eat day");
//     break;

//   default:
//   console.log("Invalid day");
// }

// // Array

// const friends = ['Jack', 'Joy', 'lucy'];
// console.log(friends[friends. length - 1]);

// const age = 20;
// const result = age >= 18 ? "Adult" : "Child";

// console.log(result);

// const age = 10;
// const result = age >= 18 ? "you can dirnk wine" : " you can drink water";

// console.log(result);

// age = 85
// const result = age >= 55 ? "sex" : "Jagh";
// console.log(result);

// function percentageOfWorld (population) {
//   return (population / 7900) * 100;
// }

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld (population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation("iran", 92);
// describePopulation("Japan", 132);

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const neighbours = ['Iraq', 'Turkey', 'Pakistan','Afghanistan'];
// console.log(neighbours);

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
// };

// neighbours[neighbours.indexOf('Turkey')] = 'Republic of Turkey';
// console.log(neighbours);

// const tip = 15/100;
// // const tip = 20/100;
// console.log(tip);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// function calcTip (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44]
// console.log(bills);

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2]),
// ];

// console.log(tips);

// const total = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
// ];

// console.log(total);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   age: 'teacehr',
//   friends: ['Micheal', 'peter', 'Steven']
// };

// const myCountry = {
//   country: 'Iran',
//   capital: 'Tehran',
//   language: 'Persian',
//   population: 92,
//   neighbours: ['Turkey', 'Iraq', 'Afghanistan']
// };

// console.log(myCountry);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   age: 2037 - 1991,
//   job: 'teacehr',
//   friends: ['Micheal', 'peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const  interestedIn = prompt('what do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName , lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemdtman';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends. and his best friend is called Micheal"

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   age: 2037 - 1991,
//   job: 'teacehr',
//   friends: ['Micheal', 'peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish-speaking',
//   population: 6,
//   neighbours: ['Turkey', 'Iraq', 'Afghanistan']
// };

// console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry ['population'] -= 2;
// console.log(myCountry.population);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtman',
//   birthYear: 1991,
//   job: 'teacehr',
//   friends: ['Micheal', 'peter', 'Steven'],
//   hasDriverLicense: true,

//   calAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   }
// };

// console.log(jonas.calAge());

// // console.log(jonas.calAge());
// console.log(jonas.age);

// const jonas = {
//   firstName: 'Jonas',
//   birthYear: 1991,
//   job: 'teacehr',
//   hasDriverLicense: true,

//      calAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//      },

//   getSummary: function () {
//        return `${this.firstName} is a ${this.calAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
//         }
//   };

//  console.log(jonas.calAge());
//  console.log(jonas.age);

// console.log(jonas.getSummary());

// const myCountry = {
//   country: "Finland",
//   capital: "Helsinki",
//   language: "finnish-speaking",
//   population: 6,
//   neighbours: ["Turkey", "Iraq", "Afghanistan"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language} people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };

// console.log(myCountry.describe());

// myCountry.checkIsland();

// console.log(myCountry.isIsland);


// for (let vot = 1; vot <= 50; vot++) {
//   console.log(`Voter number ${vot} is currently voting `);
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [92, 123, 52, 62];

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// const percentages2 = [];

// for (let per = 0; per < populations.length; per++) {
//   percentages2.push(percentageOfWorld1(populations[per]));
// }

// console.log(percentages);
// console.log(percentages2);



