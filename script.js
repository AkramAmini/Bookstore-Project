'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////
// Welcome to Callback Hell

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('australia');
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');


///////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));


///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));


///////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    
    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');
    
    // FIX:
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }


///////////////////////////////////////
// Returning Values from Async Functions
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();


///////////////////////////////////////
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');


///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
*/

// const request = new XMLHttpRequest();
// request.open('GET', 'https://example.com');
// request.send();
// request.addEventListener('load', function () {
//   console.log(this.responseText);
// });

// const request = new XMLHttpRequest();

// request.open('GET', 'https://example.com');

// request.send();

// request.addEventListener('load', function () {
//   if (this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }
// });

// const request = new XMLHttpRequest();

// request.open('GET', 'https://example.com');

// request.send();

// request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     console.log(this.status);
// });

// request.addEventListener('load', function () {
//   if (this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }
// });

// const request = new XMLHttpRequest();

// request.open('GET', 'https://example.com');

// request.send();

// request.addEventListener('load', function () {
//   if (this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }
// });

// function first(callback) {
//   callback();
// }

// first (function () {
//   console.log('First operation finished');
// });

// function second(callback) {
//   callback();

// }

// first(function () {
//   second(function () {
//     console.log('Second operation finished');
//   });
// });

//  function third(callback) {
//   callback();
// }

// first(function () {
//   second(function () {
//     third(function () {
//       console.log('Third operation finished');
//     });
//   });
// });

// function fourth(callback) {
//   callback();
// }

// first(function () {
//   second(function () {
//     third(function () {
//       fourth(function () {
//         console.log('Fourth operation finished');
//       });
//     });
//   });
// });

// function fifth(callback) {
//   callback();
// }

// first(function () {
//   second(function () {
//     third(function () {
//       fourth(function () {
//         fifth(function () {
//           console.log('All operations finished');
//         });
//       });
//     });
//   });
// });

// promise.then(function (data) {
//   console.log(data);
// });

// const promise = new Promise(function (resolve) {
//   resolve('Success!');
// });

// promise.then(function (data) {
//   console.log(data);

// });

// const promise = new Promise(function (resolve, reject) {
//   reject('Something went wrong!');
// });

// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const promise = new Promise(function (resolve, reject) {
//   resolve('Done!');
// });

// promise.then(function (data) {
//   console.log(data);
// });

// const promise = new Promise(function (resolve, reject) {
//   resolve("Success");
// });

// promise.then(function (data) {
//   console.log(data);
//   })
// .finally(function () {
//     console.log('Finished');
//   });

// const promise = new Promise(function (resolve, reject) {
//   reject('Error!');
// })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log('Finished');
//   });

// const promise = new Promise(function (resolve) {
//   resolve(5);
// });

// promise.then(function (data) {
//   console.log(data + 10);
// });

// const promise = new Promise(function (resolve) {
//   resolve(5);
// });

// promise
//   .then(function (data) {
//     return data + 10;
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// const promise = new Promise(function (resolve) {
//   resolve(10);
// });

// promise
//   .then(function (data) {
//     return data + 5;
//   })
//   .then(function (data) {
//     return data * 2;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .finally(function () {
//     console.log('Done!');
//   });

// const promise = Promise.resolve(10);

// promise
//   .then(function (data) {
//     return data + 5;
//   });

// const promise = Promise.resolve(10);

// promise
//   .then(function (data) {
//     return data + 5;
//   })
//   .then(function (data) {
//     return data * 2
//   });

// const promise = Promise.resolve(10);

// promise
//   .then(function (data) {
//     return data + 5;
//   })
//   .then(function (data) {
//     return data * 2;
//   })
//   .then(function (data) {
//     console.log(data);

// const promise = Promise.resolve(10);

// promise
//   .then(function (data) {
//     return data / 2;
//   })
//   .then(function (data) {
//     return data + 7;
//   })
//   .then(function (data) {
//     console.log(data);

//   });

// const promise = Promise.resolve(10);

// promise
//   .then(function (data) {
//     return data * 2;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .finally(function () {
//     console.log('Finished');
//   });

// const promise = Promise.resolve(5);

// promise
//   .then(function (data) {
//     return data + 10;
//   })
//   .then(function (data) {
//     return data * 2;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log('Done!');
//   });

// const promise = new Promise(function (resolve, reject) {
//   reject(new Error('Something went wrong!'));
// });

// promise.catch(function (error) {
//   console.log(error.message);
// });

// const promise = Promise.resolve('Success!');

// promise
//   .then(function (data) {
//     console.log(data);
//     throw new Error('Something went wrong!');
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// const promise = new Promise(function (resolve, reject) {
//   reject(new Error('Request failed!'));
// });

// promise.catch(function (error) {
//   console.log(error.message);
// });

// Promise.resolve(10)
//   .then(function (data) {
//     return data + 5;
//   })
//   .then(function (data) {
//     throw new Error('Calculation failed!');
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });
// Promise.resolve(5)
//   .then(function (data) {
//     return data * 2;
//   })
//   .then(function (data) {
//     throw new Error('Something failed!');
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error.message);

//   });

// Promise.reject(new Error('Failed!'))
//   .catch(function (error) {
//     return 'Recovered!';
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Promise.reject(new Error('Network error'))
//   .catch(function (error) {
//     console.log(error.message);
//     return 'Default data';
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Promise.resolve('Start')
//   .then(function (data) {
//     throw new Error('Something failed!');
//   })
//   .catch(function (error) {
//     console.log(error.message);
//     return 'Recovered';
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Promise.resolve('Success')
//   .then(function (data) {
//     console.log(data);
//     throw new Error('Oops!');
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   })
//   .finally(function () {
//     console.log('Done');
//   });

// const age = 15;

// if (age < 18) {
//   throw new Error('You are too young!');
// }

// const password = '12345';

// if (password.length < 8) {
//  throw new Error('Password is too short!');
// }

// const username = '';

// if (username === '') {
//   throw new Error('Username is required!');
// }

// const score = 35;

// if (score < 50) {
//   throw new Error("Score is too low!");

// }

// Promise.resolve('Start')
//   .then(function (data) {
//     throw new Error("Something went wrong!");

//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// Promise.resolve(45)
//   .then(function (temperature) {
//     if (temperature > 40) {
//       throw new Error("Temperature is too high!");

//     }
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// Promise.resolve(-100)
//   .then(function (balance) {
//     if (balance < 0) {
//       throw new Error('Balance cannot be negative!');
//     }
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// Promise.resolve(16)
//   .then(function (age) {
//     if (age < 18) {
//       throw new Error("You must be 18 or older!");

//     }
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// Promise.resolve('hadisgmail.com')
//   .then(function (email) {
//     if (!email.includes('@')) {
//       throw new Error('Invalid email!');
//     }
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// Promise.resolve(25)
//   .then(function (age) {
//     if (age < 18) {
//       throw new Error("You must be 18 or older!");

//     }

//     console.log(age);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// function whereAmI(lat, lng) {
//   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

//   fetch(url)
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error(`Country not found: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//     })
//     .catch(function (error) {
//       console.error(`Something went wrong: ${error.message}`);
//     });
// }

// whereAmI(52.508, 13.381);

// function whereAmI(lat, lng) {
//   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

//   fetch(url)
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding: ${response.status}`);
//       }

//       console.log(response);

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0].name.common);
//     })
//     .catch(function (error) {
//       console.error(`Something went wrong: ${error.message}`);
//     });
// }

// whereAmI(52.508, 13.381);

// console.log('1');

// setTimeout(() => {
//   console.log('2');

//   Promise.resolve().then(() => {
//     console.log('3');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('4');

//   setTimeout(() => {
//     console.log('5');
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('6');
//   });
// });

// console.log('7');

// setTimeout(() => {
//   console.log('8');
// }, 0);

// 1 → 7 → 4 → 2 → 6 → 3 → 5 → 8

// const promise = new Promise((resolve, reject) => {
//   resolve('Success!');
// });

// promise.then(res => console.log(res));

// const promise = new Promise((resolve, reject) => {
//   reject('Something went wrong!');
// });

// promise.catch(rej => console.log(rej));

// const promise = new Promise((resolve, reject) => {
//   resolve('Data received');
// });

// promise.then(res => console.log(res));

// const num = Math.random();
// const promise = new Promise((resolve, reject) => {
//   if (num >= 0.5) resolve('You win!');
//   if (num < 0.5) reject('You lost!');
// });

// promise
// .then(res => console.log(res))
// .catch(res => console.log(rej));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(position => {
//       resolve(position);
//     });
//   });
// };

// error => {
//   reject(error);
// }

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         resolve(position);
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };

// getPosition().then(position => {
//   console.log(position);
// });

// getPosition()
//   .then(position => {
//     console.log(position);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         resolve(position);
//       },
//       error => {
//         reject(error);
//       }
//     );
//   });
// };

// navigator.geolocation.getCurrentPosition(
//   position => {
//     resolve(position);
//   },
//   error => {
//     reject(error);
//   }
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         resolve(position);
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImage;

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');

//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       resolve(img);
//     });

//     img.addEventListener('error', function (error) {
//       reject(error);
//     });
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     document.querySelector('.images').append(img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     document.querySelector('.images').append(img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Chapter 16 - Lesson 19
// Consuming Promises With Async/Await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   const position = await getPosition();

//   console.log('Position:', position);
//   console.log('Latitude:', position.coords.latitude);
//   console.log('Longitude:', position.coords.longitude);
// };

// whereAmI();

// Chapter 16 - Lesson 20
// Error Handling With Try...Catch

// const whereAmI = async function () {
//   try {
//     const position = await getPosition();

//     console.log('Position:', position);
//     console.log('Latitude:', position.coords.latitude);
//     console.log('Longitude:', position.coords.longitude);
//   } catch (err) {
//     console.error('Something went wrong:', err);
//   }
// };

// whereAmI();


// Chapter 16 - Lesson 21
// Returning Values From Async Functions

// Chapter 16 - Lesson 21
// Returning Values From Async Functions

// const getName = async function () {
//   return 'Hadis';
// };

// const showName = async function () {
//   const name = await getName();

//   console.log('Name:', name);
// };

// showName();

// getName().then(name => {
//   console.log('Name with then:', name);
// });