///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
/*


///////////////////////////////////////
// Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


///////////////////////////////////////
// The Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


///////////////////////////////////////
// CommonJS Modules
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

///////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

// // Chapter 17 - Lesson 6
// // Top-Level Await (ES2022)

// const getData = function () {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve('Data loaded!');
//     }, 2000);
//   });
// };

// const data = await getData();

// console.log(data);

// const user = (function () {
//   const name = 'Hadis';

//   return {
//     getName: function () {
//       return name;
//     },
//   };
// })();

// console.log(user.getName());

// const account = (function () {
//   const balance = 1000;

//   return {
//     getBalance: function () {
//       return balance;
//     },
//   };
// })();

// console.log(account.getBalance());

// const counter = (function () {
//   const counter = 0;

//   return {
//     getCounter: function () {
//       return counter;
//     },
//      increment: function () {
//       return counter++;
//     },
//   };
// })();

// counter.increment();
// counter.increment();

// console.log(counter.getCounter());

// const shoppingCart = (function () {
// let total = 0;

//   return {
//     addPrice: function (price) {
//       return total += price;
//     },
//      getTotal: function () {
//       return total;
//     },
//   };
// })();

// shoppingCart.addPrice(100);
// shoppingCart.addPrice(50);

// console.log(shoppingCart.getTotal());

// const userAccount = (function () {
// let username = 'Hadis';

//   return {
//     changeName: function (newName) {
//       username = newName;
//     },
//      getName: function () {
//       return username;
//     },
//   };
// })();

// userAccount.changeName('Sara');

// console.log(userAccount.getName());

// const bankAccount = (function () {
//   let balance = 500;

//   return {
//     deposit: function (amount) {
//       return balance += amount;;
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// })();
// bankAccount.deposit(200);
// bankAccount.deposit(100);

// console.log(bankAccount.getBalance());

// const temperature = (function () {
//   let celsius = 20;

//   return {
//     increase: function () {
//       return (celsius += 5);
//     },
//     getTemperature: function () {
//       return celsius;
//     },
//   };
// })();
// temperature.increase();
// temperature.increase();

// console.log(temperature.getTemperature());

// const counterModule = (function () {
//   let count = 0;

//   return {
//     increase: function () {
//       return (count += 2);
//     },
//     decrease: function () {
//       return (count -= 1);
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();
// counterModule.increase();
// counterModule.increase();
// counterModule.decrease();

// console.log(counterModule.getCount());

// const scoreModule = (function () {
//   let score = 0;

//   return {
//     add: function (points) {
//       return (score += points);
//     },
//     reset: function () {
//       return (score = 0);
//     },
//     getScore: function () {
//       return score;
//     },
//   };
// })();
// scoreModule.add(10);
// scoreModule.add(20);
// scoreModule.reset();

// console.log(scoreModule.getScore());

// const bank = (function () {
//   let balance = 1000;

//   return {
//     deposit: function (amount) {
//       return (balance += amount);
//     },
//     withdraw: function (amount) {
//       return (balance -= amount);
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// })();
// bank.deposit(500);
// bank.withdraw(200);
// bank.deposit(100);

// console.log(bank.getBalance());
