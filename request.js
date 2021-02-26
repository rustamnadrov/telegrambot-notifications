const TeleBot = require("telebot");
const bot = new TeleBot({
  token: "",
});
const request = require('request');

servers = [
  'http://', 'http://',
  'http://localhost', 'http://'
];

bot.on('/r', (msg) => {
  setInterval(() => {
    for (let i = 0; i < servers.length; i++) {
      request(servers[i], function (error, response, body) {
        if (body == undefined) {
          bot.sendMessage(msg.from.id,
            `Server ${servers[i]} is down. Need do something`);
        };
      })
    }
  }, 1 * 5 * 1000);
});

bot.on('/s', (msg) => {
  bot.sendMessage(msg.from.id,
    `I'm okey, don't worry`);
});

bot.start();
