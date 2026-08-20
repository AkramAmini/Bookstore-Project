'use strict';

// const { createElement } = require('react');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//   <div class="movements__row">
//     <div class="movements__type movements__type--${type}">
//       ${i + 1} ${type}
//     </div>
//     <div class="movements__value">${mov}</div>
//   </div>
// `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const friends = ['Ali', 'Sara', 'Reza'];
// friends.push('Mina');
// console.log(friends);

// friends.unshift('Nima');
// console.log(friends);

// ??

// console.log(friends.includes('Sara'));

// console.log(friends.indexOf('Mina'));

// const numbers = [10, 20, 30, 40];

// numbers.push(50);
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// console.log(numbers.includes(30));
// console.log(numbers.indexOf(40));

// const cities = ['Tehran', 'Shiraz', 'Tabriz'];

// cities.unshift('Mashhad');
// console.log(cities);

// cities.pop();
// console.log(cities);

// const passengers = ['Sara', 'Ali', 'Reza', 'Mina'];

// passengers.push('Nima')
// console.log(passengers);

// passengers.shift();
// console.log(passengers);

// passengers.unshift('Maryam');
// console.log(passengers);

// passengers.pop();
// console.log(passengers);

// console.log(passengers.includes('Reza'));
// console.log(passengers.indexOf('Mina'));

// const colors = ['red', 'blue', 'green', 'yellow', 'black'];

// console.log(colors.slice(1, 4));

// const numbers = [10, 20, 30, 40, 50, 60];

// console.log(numbers.slice(1, 4));

// const names = ['Ali', 'Sara', 'Reza', 'Mina', 'Nima'];

// console.log(names.slice(2, 4));

// const numbers = [10, 20, 30, 40, 50, 60];

// console.log(numbers.slice(-3));

// const numbers = [10, 20, 30, 40, 50];

// console.log(numbers.splice(2, 1));

// console.log(numbers);

// const names = ['Ali', 'Sara', 'Reza', 'Mina', 'Nima'];

// console.log(names.splice(-2));
// console.log(names);

// const friends = ['Ali', 'Sara', 'Reza'];

// friends.forEach(function (friend) {
//   console.log(friend);
// });

// const numbers = [10, 20, 30, 40];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const numbers = [10, 20, 30, 40];

// numbers.forEach(function (number) {
//   number = number * 2;
//   console.log(number);
// });

// const names = ['Ali', 'Sara', 'Reza'];

// names.forEach(function (name) {
//   name = 'Hello' + ' ' + name;
//   console.log(name);
// });

// const numbers = [5, 10, 15, 20];

// numbers.forEach(function (number) {
//   number = number + ' is a number';
//   console.log(number);
// });

// const prices = [100, 200, 300, 400];

// prices.forEach(function (price) {
//   price = price + price * 0.1;

//   console.log(price);
// });

// const scores = [8, 15, 12, 19, 6, 17];

// scores.forEach(function (score) {
//   if (score >= 10) console.log(score);
// });

// const numbers = new Set([10, 20, 30]);

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling']
// ]);

// currencies.forEach(function (value, key) {
//   console.log(key, value);
// });

// const numbers = new Set([10, 20, 30, 40]);

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const numbers = new Set([5, 10, 15, 20]);

// numbers.forEach(function (number) {
//   if (number > 10) console.log(number);
// });

// const countries = new Map([
//   ['IR', 'Iran'],
//   ['TR', 'Turkey'],
//   ['DE', 'Germany'],
// ]);

// countries.forEach(function (value, key) {
//   console.log(key,value);
// });

// const scores = new Map([
//   ['Ali', 8],
//   ['Sara', 15],
//   ['Reza', 12],
//   ['Mina', 6],
// ]);

// scores.forEach(function (value, key) {
//   if (value >= 10) console.log(key);
// });

// const ul = document.createElement('ul');

// const li1 = document.createElement('li');
// li1.textContent = 'HTML';

// const li2 = document.createElement('li');
// li2.textContent = 'CSS';

// const li3 = document.createElement('li');
// li3.textContent = 'JavaScript';

// ul.append(li1, li2, li3);
// document.body.append(ul);

// const div = document.createElement('div');

// const h2 = document.createElement('h2');
// h2.textContent = 'My Journey';
// h2.classList.add('title');

// const p = document.createElement('p');
// p.textContent = 'I am learning Javascript';
// p.classList.add('text');

// div.append(h2, p);
// document.body.append(div);

// const div = document.createElement('div');

// const h2 = document.createElement('h2');
// h2.textContent = 'My Skills';

// const ul = document.createElement('ul');

// const li1 = document.createElement('li');
// li1.textContent = 'HTML';
// const li2 = document.createElement('li');
// li2.textContent = 'CSS';
// const li3 = document.createElement('li');
// li3.textContent = 'JavaScript';

// document.body.append(div);
// div.append(h2, ul);
// ul.append(li1, li2, li3);

// const myButton = document.createElement('button');
// myButton.textContent = 'Start Learning';
// document.body.append(myButton);

// const link = document.createElement('a');
// link.textContent = 'Visit Google';
// link.href = 'https://www.google.com';
// link.classList.add('link');
// document.body.append(link);

// const img = document.createElement('img');
// img.src = 'https://via.placeholder.com/200';
// img.alt = 'Profile Image';
// img.classList.add('profile-image');
// document.body.append(img);

// const img = document.createElement('img');

// img.src = 'https://via.placeholder.com/200';
// img.alt = 'Profile Image';
// img.classList.add('profile-image');

// document.body.append(img);

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// function checkDogs(dogsJulia, dogsKate) {
//   const copy = [...dogsJulia];
//   copy.shift();
//   copy.pop();
//   copy.pop();

//   console.log(copy);

//   const dogs = copy.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (age, i) {
//   if (age >= 3) {
//     console.log(`Dog number ${i + 1} is an adult, and is ${age} years old `);
//   } else {
//     console.log(`Dog number ${i +1} is still a puppy 🐶`);
//   }
// });
// }

// checkDogs(dogsJulia, dogsKate);


