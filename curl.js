const request = require('request');

const token = '';
const chat_id = '';
const text = 'HelloWorld';
const req = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

request(req, function (error, response, body) {
  console.log(body);
});

