'use strict';
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

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let li = 0; li < listOfNeighbours.length; li++) {
//   for (let j = 0; j < listOfNeighbours[li].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[li][j]}`);
//   }
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [10, 1441, 332, 83];
// const percentages3 = [];

// let i = 0;

// while (i < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[i]));
//   i++;
// }

// console.log(percentages3);

// // function calcTip(bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }

// // console.log(calcTip(100));

// // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // const tips = [];
// // const totals = [];

// // for (let b = 0; b < bills.length; b++) {
// //   tips.push(calcTip(bills[b]));
// //   totals.push(bills[b] + calcTip(bills[b]));
// // }

// // console.log(tips);
// // console.log(totals);

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let b = 0; b < bills.length; b++) {
//   tips.push(calcTip(bills[b]));
//   totals.push(bills[b] + calcTip(bills[b]));
// }

// console.log(tips);
// console.log(totals);

// // Bonus
// function calcAverage(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//  return sum / arr.length;
// }

// console.log(calcAverage(totals));

//////////////////////////////// Problem 1 ////////////////////////////////

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // //////////////////////////////// Problem 2 ////////////////////////////////

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// // Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const ar = arr[i];
//     console.log(`... ${ar}°C in ${i + 1} days ...`);
//   }
// };

// printForecast([17, 21, 23]);

// printForecast([12, 5, -5, 0, 4]);

// const ali = {
//   Name: 'Ali',
//   Age: 28,
//   City: 'Shiraz'
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switchin variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // سوال اول :1. یک آرایه به نام
// // events
// //  بسازید که شامل رویدادهای مختلفی باشد که در بازی اتفاق افتاده‌اند (بدون موارد تکراری).ا
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // سوال دوم: بعد از تمام شدن بازی مشخص شد که کارت زرد دقیقه‌ی ۶۴ اشتباه بوده است. بنابراین این رویداد را از لیست ثبت وقایع بازی حذف کنید.

// gameEvents.delete(64);
// console.log(gameEvents);

// // سوال سوم: عبارت زیر را محاسبه کرده و در کنسول نمایش دهید:

// // "An event happened, on average, every 9 minutes"

// // (در نظر داشته باشید که یک بازی فوتبال ۹۰ دقیقه است.)

// // یعنی حساب کنید به طور میانگین هر چند دقیقه یک اتفاق در بازی افتاده است

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`,
// );

// // یا این

// const average = 90 / gameEvents.size;

// console.log(`An event happened, on average, every ${average} minutes`);

// // سوال 4 :
// // روی
// // gameEvents
// //  حلقه بزنید و هر رویداد را در کنسول چاپ کنید و مشخص کنید که در نیمه اول بوده یا نیمه دوم (بعد از دقیقه ۴۵)، به این شکل:
// // [FIRST HALF] 17: ⚽ GOAL
// //یعنی:

// // اگر دقیقه ≤ ۴۵ بود → نیمه اول (FIRST HALF)
// // اگر دقیقه > ۴۵ بود → نیمه دوم (SECOND HALF)

// for (const [minute, event] of gameEvents) {
//   if (minute <= 45) {
//     console.log(`[FIRST HALF] ${minute}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${minute}: ${event}`);
//   }
// }

// // یا
// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${minute}: ${event}`);
// }

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// A Closer Look at Functions
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// // GOOD LUCK 😀

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: [
//     '0: JavaScript',
//     '1: Python',
//     '2: Rust',
//     '3: C++',
//   ],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     if (Number.isInteger(answer) && answer >= 0 && answer <= 3) {
//       this.answers[answer] += 1;
//     }

//     this.displayResults();
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     }

//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // وقتی روی دکمه Answer poll کلیک شود
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // BONUS

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// // نمایش به صورت Array
// poll.displayResults.call({ answers: data1 });
// poll.displayResults.call({ answers: data2 });

// // نمایش به صورت String
// poll.displayResults.call({ answers: data1 }, 'string');
// poll.displayResults.call({ answers: data2 }, 'string');

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

// (function () {
//   const header = document.querySelector('h1');

//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

// const temperature = 30;
// if (temperature > 25) {
//console.log(`It's hot!`);
// } else {
//   console.log(`It's not hot.`);
// }

// const numbers = [2, 4, 6, 8, 10];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const numbers = [3, 8, 12, 5, 20, 7];
// for (let i = 0; i < numbers.length; i++)
//     if (numbers[i] > 10) {
//   console.log(numbers[i]);
// };

// function sum(a, b) {
// return a + b
// }

//  console.log(sum(5, 3));

// function checkAge(age) {
//   if (age >= 18) {
//     return 'Adult';
//   } else {
//     return 'Minor';
//   }
// };

// console.log(checkAge(25));
// console.log(checkAge(15));

// const numbers = [10, 20, 30, 40, 50];

// function calcAverage(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }

//   return sum / numbers.length;
// }

// console.log(calcAverage(numbers));

// const numbers = [5, 10, 15, 20, 25];

// function calcAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum / numbers.length;
// }

// console.log(calcAverage(numbers));

// const numbers = [12, 45, 7, 89, 34, 21];

// function findMax(numbers) {
//   let maxNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i];
//     }
//   }
//   return maxNumber;
// }

// console.log(findMax(numbers));

// const numbers = [8, 12, 16, 20, 24];

// function calcAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum / numbers.length
// }

// console.log(calcAverage(numbers));

// const numbers = [34, 12, 67, 5, 89, 41];

// function findMax(numbers) {
//   let maxNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (maxNumber < numbers[i]) maxNumber = numbers[i];
//   }
//   return maxNumber;
// }

// console.log(findMax(numbers));

// const numbers = [56, 23, 91, 14, 72, 38];

// function findMax(numbers) {
//   let maxNumber = numbers [0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (maxNumber < numbers[i])  maxNumber = numbers[i];
//   }
//   return maxNumber;
// }

// console.log(findMax(numbers));

// const numbers = [17, 42, 8, 63, 29, 51];
// function findHighest(numbers) {
//   let maxNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//   if(maxNumber < numbers[i]) maxNumber = numbers[i]
//   }
//   return maxNumber
// }

// console.log(findHighest(numbers));

// const numbers = [45, 12, 78, 3, 29, 56];

// function findMin(numbers) {
//   let minNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (minNumber > numbers[i]) minNumber = numbers[i];
//   }
//   return minNumber;
// }

// console.log(findMin(numbers));

// const numbers = [4, 15, 8, 22, 7, 31, 10, 18];

// function countAboveTen(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) count++
//   }
//   return count;
// }

// console.log(countAboveTen(numbers));

// const numbers = [3, 8, 11, 14, 17, 20, 25, 30];

// function countEven(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) count++;
//   }
//   return count;
// }

// console.log(countEven(numbers));

// const numbers = [4, 7, 10, 13, 16, 21, 24];

// function sumEven(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) sum = sum + numbers[i];
//   }
//   return sum;
// }

// console.log(sumEven(numbers));

// const numbers = [4, 7, 10, 13, 16, 21, 24];

// function sumEven(numbers) {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) sum = sum + numbers[i];
//   }
//   return sum;
// }

// const numbers = [5, 12, 8, 21, 16, 3, 30];

// function sumOdd(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) sum = sum + numbers[i];
//   }
//   return sum;
// }

// console.log(sumOdd(numbers));

// const scores = [12, 18, 7, 20, 15];

// function getTotal(scores) {
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum = sum + scores[i];
//   }
//   return sum;
// }

// console.log(getTotal(scores));

// const prices = [100, 250, 80, 300, 150];

// function countExpensive(prices) {
//   let count = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices [i] > 150)  count++;
//   }
//   return count;
// }

// console.log(countExpensive(prices));

// const temperatures = [18, 25, 31, 14, 28, 35, 22];

// function getAverageAbove20(temperatures) {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 20) {
//       count++;
//       sum = sum + temperatures[i];
//     }
//   }

//   return sum / count;
// }

// console.log(getAverageAbove20(temperatures));

// const scores = [10, 18, 25, 14, 30, 7, 22];

// function getAverageAbove15(scores) {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 15) {
//       count++;
//       sum = sum + scores[i];
//     }
//   }
//   return sum / count;
// }

// console.log(getAverageAbove15(scores));

// const numbers = [-8, -3, -10, 7, 12, 4];

// function findFirstPositive(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//   return numbers[i];
// }
//   }
// }

// console.log(findFirstPositive(numbers));

// const numbers = [5, 8, 12, -4, 20, -7];
// function findFirstNegative(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]< 0){
//       return numbers[i]
//     }
//   }
// }

// console.log(findFirstNegative(numbers));

// const prices = [100, 200, 300, 400, 500];

// function increasePrices(prices) {
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 250) {
//       prices[i] = prices[i] * 1.2;
//     }
//   }
//   return prices;
// }

// console.log(increasePrices(prices));

// const salaries = [1000, 1500, 2000, 2500, 3000];

// function increaseSalaries(salaries) {
//   for (let i = 0; i < salaries.length; i++) {
//     if (salaries[i]> 1800) salaries[i] = salaries[i] * 1.3 ;
//   }
//   return salaries
// }

// console.log(increaseSalaries(salaries));

// const numbers = [5, 18, 7, 25, 12, 30, 9];

// function findSecondAbove10(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       count++;
//       if (count === 2) {
//     return numbers[i];
//   }
// }
//   }
// }

// console.log(findSecondAbove10(numbers));

// const numbers = [4, 15, 8, 22, 17, 30, 11];

// function findThirdAbove10(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       count++;
//       if (count === 3) {
//         return numbers[i];
//       }
//     }
//   }
// }

// console.log(findThirdAbove10(numbers));

// const numbers = [5, 12, 8, 21, 30, 7, 18];

// function getAbove10(numbers) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       result.push(numbers[i]);
//     }
//   }
//     return result;
// }

// console.log(getAbove10(numbers));

// const numbers = [7, 16, 4, 25, 11, 32, 9, 20];

// function getEvenNumbers(numbers) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] %2 === 0) {
//       result.push(numbers[i])
//   }
// }
// return result
// }

// console.log(getEvenNumbers(numbers));

// const numbers = [5, 12, 8, 21, 30, 7, 18];

// function sumAbove10(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       sum = sum + numbers[i];
//     }
//   }
//   return sum;
// }

// console.log(sumAbove10(numbers));

// const numbers = [4, 15, 8, 22, 17, 30, 9, 12, 7];

// function sumEvenAbove10(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0 && numbers[i] > 10) {
//       sum = sum + numbers[i];
//     }
//   }
//   return sum;
// }

// console.log(sumEvenAbove10(numbers));

// const person = {
//   name: 'Ali',
//   age: 25,
//   city: 'Tehran',
// };

// function getName(person) {
//   return person.name;
// }

// console.log(getName(person));

// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2020
// };

// function getModel(car) {
//   return car.model;
// }

// console.log(getModel(car));

// const student = {
//   name: 'Sara',
//   age: 20,
//   score: 18,
// };

// function checkScore(student) {
//   if (student.score >= 10) {
//     return 'Passed';
//   } else {
//     return 'Failed';
//   }
// }

// console.log(checkScore(student));

// const user = {
//   name: 'Mina',
//   age: 28,
//   city: 'Shiraz',
// };

// function increaseAge(user) {
//   user.age = user.age + 1;
//   return user;
// }

// console.log(increaseAge(user));

// const product = {
//   name: 'Laptop',
//   price: 800,
//   quantity: 3,
// };

// function getTotalPrice(product) {
//   const totalPrice = product.price * product.quantity;
//   return totalPrice;
// }

// console.log(getTotalPrice(product));

// const product = {
//   name: 'Phone',
//   price: 500,
//   quantity: 4,
// };

// function getDiscountedPrice(product) {
//   let totalPrice = product.price * product.quantity;
//   if (totalPrice > 1500) {
//     totalPrice = totalPrice * 0.9;
//   }
//     return totalPrice;
//   }

// console.log(getDiscountedPrice(product));

// const user = {
//   firstName: 'Sara',
//   lastName: 'Ahmadi',
//   age: 25,
// };

// function getFullName(user) {
//   const fullName = user.firstName + ' ' + user.lastName;
//   return fullName;
// }

// console.log(getFullName(user));

// const user = {
//   name: 'javascript',
//   age: 25,
// };

// function formatName(user) {
//   const name =user.name[0].toUpperCase() +
//   user.name.slice(1).toLowerCase()
//   return name
// }

// console.log(formatName(user));

// const user = {
//   name: 'aHMADI',
//   age: 30,
// };

// function formatLastName(user) {
//   const name = user.name[0].toUpperCase() + user.name.slice(1).toLowerCase();
//   return name;
// }

// console.log(formatLastName(user));

// const user = {
//   name: 'Ali',
//   username: 'Ali123',
//   age: 25
// };

// function checkUsername(user) {
//   if(user.username.length > 5) {
//     return 'Valid'
//   }else{
//     return 'Too Short'
//   }
// }

// console.log(checkUsername(user));

// const user = {
//   name: 'JavaScript',
//   age: 25,
// };

// function countA(user) {
//   let count = 0;
//   for (let i = 0; i < user.name.length; i++) {
//     if (user.name[i].toLowerCase() === 'a')
//      count++
//   }
//   return count;
// }

// console.log(countA(user));

//
// const product = {
//   name: 'JavaScript',
//   price: 120,
//   quantity: 3,
// };

// function getProductInfo(product) {
//   let totalPrice = product.price * product.quantity;
//   if (totalPrice > 300) {
//     return 'JavaScript - Expensive';
//   } else {
//     return 'JavaScript - Affordable';
//   }
// }

// console.log(getProductInfo(product));

// const student = {
//   name: 'Sara',
//   scores: [12, 18, 15, 20, 14],
// };

// function getTotalScore(student) {
//   let sum = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }
//   return sum;
// }

// console.log(getTotalScore(student));

// const student = {
//   name: 'Sara',
//   scores: [8, 15, 12, 19, 6, 17],
// };

// function countPassed(student) {
//   let count = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] >= 10) count++;
//   }
//   return count;
// }

// console.log(countPassed(student));

// const student = {
//   name: 'Ali',
//   scores: [12, 18, 15, 20, 10],
// };

// function getAverageScore(student) {
//   let sum = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }
//   return sum / student.scores.length;
// }

// console.log(getAverageScore(student));

// const student = {
//   name: 'Ali',
//   scores: [12, 18, 15, 20, 10],
// };

// function getHighestScore(student) {
//   let highestScore = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] > highestScore) highestScore = student.scores[i];
//   }
//   return highestScore;
// }

// console.log(getHighestScore(student));

// const student = {
//   name: 'Sara',
//   scores: [14, 8, 19, 11, 6, 17],
// };

// function getLowestScore(student) {
//   let lowestScore = student.scores[0];
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] < lowestScore) lowestScore = student.scores[i];
//   }
//   return lowestScore;
// }

// console.log(getLowestScore(student));

// const student = {
//   name: 'Ali',
//   scores: [12, 18, 15, 20, 10],
// };

// function countAboveAverage(student) {
//   let sum = 0;
//   let average = 0;
//   let count = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }

//   average = sum / student.scores.length;

//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] > average) count++;
//   }
//   return count;
// }

// console.log(countAboveAverage(student));

// const student = {
//   name: 'Sara',
//   scores: [10, 16, 14, 19, 8, 17],
// };

// function countBelowAverage(student) {
//   let sum = 0;
//   let count = 0;
//   let average = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }
//   average = sum / student.scores.length;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] < average) count++;
//   }

//   return count;
// }

// console.log(countBelowAverage(student));

// const student = {
//   name: 'Reza',
//   scores: [11, 15, 18, 9, 20, 13, 16],
// };

// function countGoodScores(student) {
//   let count = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] >= 15) count++;
//   }
//   return count;
// }

// console.log(countGoodScores(student));

// const student = {
//   name: 'Mina',
//   scores: [7, 14, 18, 9, 12, 20, 6],
// };

// function sumPassedScores(student) {
//   let sum = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] >= 10) sum = sum + student.scores[i];
//   }
//   return sum;
// }

// console.log(sumPassedScores(student));

// const student = {
//   name: 'Nima',

//   scores: [12, 16, 18, 15, 20, 14],
// };

// function hasPerfectScore(student) {
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] === 20) return true;
//   }
//   return false;
// }

// console.log(hasPerfectScore(student));

// const student = {
//   name: 'Sara',
//   scores: [7, 8, 12, 18, 9, 20],
// };

// function getFirstPassedScore(student) {
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] >= 10) return student.scores[i];
//   }
// }

// console.log(getFirstPassedScore(student));

// const student = {
//   name: 'Reza',
//   scores: [12, 8, 15, 6, 18, 9, 14],
// };

// function getLastPassedScore(student) {
//   let lastPassedScore = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] >= 10) lastPassedScore = student.scores[i];
//   }
//    return lastPassedScore;
// }

// console.log(getLastPassedScore(student));

// const student = {
//   name: 'Mina',
//   scores: [10, 18, 14, 20, 8, 16],
// };

// function getAboveAverageResult(student) {
//   let count = 0;
//   let sum = 0;
//   let average = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }
//   average = sum / student.scores.length;
//   for (let i = 0; i < student.scores.length; i++) {
//     if (student.scores[i] > average) count++;
//   }
//   return `${student.name} has ${count} scores above average.`;
// }

// console.log(getAboveAverageResult(student));
