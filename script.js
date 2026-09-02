'use strict';

const { createElement } = require('react');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ///////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //delet elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// const body = document.querySelector('body');
// console.log(body);

// const header = document.querySelector('.header');
// console.log(header);

// const sections = document.querySelectorAll('.section');
// console.log(sections);

// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// const section1 = document.getElementById('section--1');
// console.log(section1);

// const message = document.createElement('div');
// console.log(message);
// message.classList.add('test-message');
// message.textContent = 'Hello Hadis!';
// header.append(message);
// header.prepend(message);

// const paragraph = document.createElement('p');
// console.log(paragraph);
// header.before(paragraph);

// const messages = document.createElement('div');
// console.log(messages);
// header.after(messages);
// messages.remove();

const messages = document.createElement('div');

messages.classList.add('cookie-message');

messages.innerHTML =
  'We use cookies! <button class="btn--close-cookie">Got it</button>';

header.append(messages);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    messages.remove();
  });
