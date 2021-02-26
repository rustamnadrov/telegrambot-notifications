const TeleBot = require("telebot");
const bot = new TeleBot({
  token: "",
});

let slov = {};

bot.on(['text'], (msg) => {
  let key = msg.chat.id;
  if (slov[key] == undefined) {
    slov[key] = msg.text.split(' ');
  } else {
    slov[key].push(msg.text);
  };
  console.log(slov);
});

bot.on('/show', (msg) => {
  let key = msg.chat.id;
  slov[key].splice(slov[key].indexOf('/show'), 1);
  slov[key].forEach(n => (
    bot.sendMessage(msg.from.id,
      n)
  ));
});

bot.on('/join', (msg) => {
  let key = msg.chat.id;
  slov[key].splice(slov[key].indexOf('/join'), 1);
  bot.sendMessage(msg.from.id,
    slov[key].join(', '));
});

bot.on('/clear', (msg) => {
  let key = msg.chat.id;
  slov[key].splice(0);
  bot.sendMessage(msg.from.id,
    'Список очищен');
  console.log(slov);
});

bot.on('/start', (msg) => {
  let key = msg.chat.id;
  console.log(msg);
  slov[key].splice(slov[key].indexOf('/start'), 1);
  bot.sendMessage(msg.from.id,
    `Приветствую тебя мой друг, ${msg.from.first_name} ${msg.from.last_name}.
Напиши любой текст и он сохранится в списке.
Напиши /show - тебе откроется список.
Напиши /join - откроется список в строке.
Напиши /clear - список очистится.
Удачи, ${msg.from.username}!`);
});

bot.start();
