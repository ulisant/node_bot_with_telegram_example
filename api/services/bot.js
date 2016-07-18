var telebot = require('node-telegram-bot-api');
var token = 'your-token'

var bot = new telebot(token, {
  polling: true
});

bot.getMe().then(function (me){
  console.log("Hi my name is " + me.username);
});

bot.onText(/^\/saludo (.+)$/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  console.log(msg);
  bot.sendMessage(fromId, "Hola " + msg.from.first_name);
});

bot.onText(/\/foto/, function (msg) {
  var fromId = msg.from.id;
  var photo = 'assets/images/gato.jpg';
  bot.sendPhoto(fromId, photo, {caption: 'Gato'});

});

bot.onText(/\/donde/, function (msg) {
  var fromId = msg.from.id;
  var lat = 20.075033
  var long = -98.404507
  bot.sendLocation(fromId, lat, long);

});

bot.onText(/\/sticker/, function (msg) {
  var fromId = msg.from.id;
  var stick = 'assets/images/sticker.jpg'
  bot.sendSticker(fromId, stick);

});
