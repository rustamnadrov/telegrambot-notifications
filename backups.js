const TeleBot = require("telebot");
const bot = new TeleBot({
  token: "",
});
const fs = require('fs');

let all = [];

fs.readdirSync('/').forEach(file => {
  all.push(file);
})
console.log(all);


bot.on('/show', (msg) => {
  for (let i = 0; i < all.length; i++) {
    bot.sendMessage(msg.from.id,
      `${all[i]}`);
  };  
});

bot.on('/total', (msg) => {
  bot.sendMessage(msg.from.id,
    `Total: ${all.length}`);  
});

bot.on('/msg', (msg) => {
  console.log(msg);
  for (let ler in msg) { 
    for (let key in msg[ler]) {
      bot.sendMessage(msg.from.id,
        `${key}: ${msg[ler][key]}`);
    }
    bot.sendMessage(msg.from.id,
      `${ler}: ${msg[ler]}`);
  };
});

bot.on('/time', (msg) => {
  bot.sendMessage(msg.from.id,
    Date());
});

bot.on('/check', (msg) => {

})

bot.start();
