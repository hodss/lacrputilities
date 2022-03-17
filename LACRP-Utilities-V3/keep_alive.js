var http = require('http');

http.createServer(function (req, res) {
  res.write("Los Angeles City Roleplay Utilites and Moderation. If you're seeing this message, the bot and it's API is running. Running Port 8080 on hodss.gq | V3");
  res.end();
}).listen(8080);