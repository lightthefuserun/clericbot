const SlackBot = require('slackbots');
const mongoose = require('mongoose');

const http = require('http');
http.createServer((req, res) => {}).listen(1337, '127.0.0.1');


mongoose.connect('mongodb://localhost/clericbot', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
