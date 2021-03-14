const TelegramBot = require("node-telegram-bot-api");
const request = require('request');

// Specify your token
const token = "";
const bot = new TelegramBot(token, {polling: true});

// List of servers
const servers = [
  'http://', 'http://',
  'http://localhost', 'http://'
];

// Request interval h * min * sec * mm
const interval = 1 * 1 * 5 * 1000;

bot.onText(/\/launch/, (msg) => {
  setInterval(() => {
    for (let i = 0; i < servers.length; i++) {
      request(servers[i], function (error, response, body) {
        if (body == undefined) {
          bot.sendMessage(msg.from.id,
            // Notification text
            `Server ${servers[i]} is down. Need do something`)
        };
      })
    };
  }, interval)
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.from.id,
    `Hello, ${msg.from.first_name}!
1. Fill the array servers.
2. Select interval.
3. Press '/launch' to start checking sites`)
});