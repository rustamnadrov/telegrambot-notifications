const TeleBot = require("telebot")
const bot = new TeleBot({
  token: "",
});
const request = require('request');

// List of servers
const servers = [
  'http://', 'http://',
  'http://localhost', 'http://'
];

// Request interval h * min * sec * mm
const interval = 1 * 5 * 60 * 1000;

bot.on('/r', (msg) => {
  setInterval(() => {
    for (let i = 0; i < servers.length; i++) {
      request(servers[i], function (error, response, body) {
        if (body == undefined) {
          bot.sendMessage(msg.from.id,
            // Notification text
            `Server ${servers[i]} is down. Need do something`);
        };
      })
    }
  }, interval);
});

// Bot check
bot.on('/s', (msg) => {
  bot.sendMessage(msg.from.id,
    `I'm okey, don't worry`);
});

bot.start();
