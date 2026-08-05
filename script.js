'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct 🍕'],
//   [false, 'Try again!'],
// ]);
















// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // خلاصه ترجمه هر ۴ سؤال:

// // ۱) روی آرایه
// // game.scored
// // حلقه بزن و نام هر گل‌زن را همراه با شماره گل چاپ کن.

// // ۲) با استفاده از یک حلقه، میانگین ضرایب
// // (odds)
// // بازی را حساب کن و چاپ کن.

// // ۳) سه ضریب بازی را با فرمت مشخص چاپ کن و اسم تیم‌ها را از خود آبجکت game
// // بگیر، نه دستی بنویس.

// // ۴) یک آبجکت
// // scorers
// //  بساز که تعداد گل‌های هر بازیکن را حساب کند.
// // سوال 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }
// // سوال 2
// const odds = Object.values(game.odds);

// let sum = 0;

// for (const odd of odds) {
//   sum += odd;
// }

// console.log(sum / odds.length);
// //  سوال 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// //  سوال 4
// const scorers = {};

// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player]++;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);








