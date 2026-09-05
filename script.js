'use strict';

// const { createElement } = require('react');

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

// const messages = document.createElement('div');

// messages.classList.add('cookie-message');

// messages.innerHTML =
//   'We use cookies! <button class="btn--close-cookie">Got it</button>';

// header.append(messages);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     messages.remove();
//   });

const header = document.querySelector('.header');

const message = document.createElement('div');

message.classList.add('cookie-message');

message.textContent = 'Hello Hadis!';

header.append(message);

// const message = document.querySelector('.message');

// Style
message.style.backgroundColor = '#37383d';
message.style.color = 'white';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__ link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attribute
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.add('c'); // not includes
logo.classList.add('c');

// Don't use
logo.className = 'jonas';

const message = document.querySelector('.message');

message.style.color = 'red';

// document.querySelector('.message').style.color = 'red';

// document.querySelector('.message').style.color = 'red';

// document.querySelector('.message').style.backgroundColor = 'yellow';

// document.querySelector('.message').style.height = '100px';
// document.querySelector('.message').style.width = '200px';
// document.querySelector('.message').style.fontSize = '20px';

// console.log(document.querySelector('.message').style.backgroundColor);

// const photo = document.querySelector('.photo');
// photo.setAttribute('src', 'new.jpg');

// const photo = document.querySelector('.photo');
// photo.setAttribute('src', 'new.jpg');

// const photo = document.querySelector('.photo');
// console.log(photo.getAttribute('src'));

// const link = document.querySelector('.link');
// link.href = 'https://google.com';

// const box = document.querySelector('.box');
// box.classList.add('hidden');

// const boxHidden = document.querySelector('.box');
// boxHidden.classList.remove('hidden');

// const boxHidden = document.querySelector('.box');
// console.log(boxHidden.classList.contains('hidden'));

// const boxHidden = document.querySelector('.box');
// boxHidden.classList.toggle('hidden');

// const photo = document.querySelector('.photo');
// photo.setAttribute('src', 'new.jpg');
// photo.style.width = '300px';
// photo.classList.add('rounded');
// console.log(photo.classList.contains('rounded'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const btn = document.querySelector('.btn');
const section1 = document.querySelector('#section--1');

btn.addEventListener('click', function () {
  section1.scrollIntoView();
});

const btn = document.querySelector('.btn');
const section1 = document.querySelector('#section--1');

btn.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const btnAbout = document.querySelector('.btn-about');
const about = document.querySelector('#about');

btnAbout.addEventListener('click', function () {
  about.scrollIntoView({ behavior: 'smooth' });
});

const btnAbout = document.querySelector('.btn-about');
const about = document.querySelector('#about');

btnAbout.addEventListener('click', function (e) {
  e.preventDefault();
  about.scrollIntoView({ behavior: 'smooth' });
});

const btns = document.querySelectorAll('.btn-1, .btn-2');
const section1 = document.querySelector('#section--1');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    section1.scrollIntoView({ behavior: 'smooth' });
  });
});

const btn1 = document.querySelector('.btn-home');
const section1 = document.querySelector('#home');
const btn2 = document.querySelector('.btn-about');
const section2 = document.querySelector('#about');

btn1.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

btn2.addEventListener('click', function () {
  section2.scrollIntoView({ behavior: 'smooth' });
});

const btn1 = document.querySelector('.btn-contact');
const section1 = document.querySelector('#contact');

btn1.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const section = document.querySelector('#section--1');
console.log(section.getBoundingClientRect());

const section = document.querySelector('#section--1');
console.log(section.getBoundingClientRect().top);

section.getBoundingClientRect().top;
window.scrollY;

const section = document.querySelector('#section--1');

console.log(section.getBoundingClientRect().top + window.scrollY);




const section = document.querySelector('#section--1');

window.scrollTo({
  top: section.getBoundingClientRect().top + window.scrollY,
  behavior: 'smooth'
});


const btn1 = document.querySelector('.btn-go');
const section = document.querySelector('#section--1');

btn1.addEventListener('click', function () {
  window.scrollTo({
  top: section.getBoundingClientRect().top + window.scrollY,
  behavior: 'smooth'
});
});





