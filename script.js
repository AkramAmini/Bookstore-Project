'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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













