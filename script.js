'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // برای هر تیم یک آرایه از بازیکنان ایجاد کن و آن‌ها را در دو متغیر به نام‌های players1 و players2 ذخیره کن.
// const [players1, players2] = game.players;
// console.log(game.players);

// //دروازه‌بان تیم اول را در متغیر gk ذخیره کن و بقیه ۱۰ بازیکن را در آرایه fieldPlayers قرار بده.

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// //یک آرایه به نام allPlayers بساز که شامل بازیکنان هر دو تیم (۲۲ بازیکن) باشد

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //یک آرایه جدید به نام players1Final بساز که شامل تمام بازیکنان اصلی تیم اول (players1) به اضافه سه بازیکن ذخیره باشد: Thiago، Coutinho و Perisic.

// const players1Final = [...players1,  'Thiago', 'Coutinho', 'Perisic' ];
// console.log(players1Final);

// //از آبجکت game.odds سه متغیر بساز:
// // team1 → ضریب برد تیم اول
// // draw → ضریب مساوی
// // team2 → ضریب برد تیم دوم

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// //یک تابع به نام printGoals بساز که هر تعداد نام بازیکن دریافت کند و نام هر بازیکن را در کنسول چاپ کند. همچنین تعداد کل گل‌ها را (برابر با تعداد بازیکن‌های واردشده) چاپ کند.

// const printGoals = function (...players) {
//   for (const player of players) {
//     console.log(player);
//   }

//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

//تیمی که ضریب برد کمتری دارد را پیدا کن و نام آن تیم را در کنسول چاپ کن؛ بدون استفاده از if/else و بدون استفاده از عملگر سه‌تایی (? :).
// یعنی:

// اگر team1 ضریب کمتری داشت → نام تیم اول را چاپ کن.
// اگر team2 ضریب کمتری داشت → نام تیم دوم را چاپ کن.
const team1 = game.odds.team1;
const team2 = game.odds.team2;

console.log((team1 < team2 && game.team1) || game.team2);
