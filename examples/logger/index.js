var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    weplaCommon = require('../../'),
    PORT = 9000,
    app,
    server;


app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

weplaCommon.logger(app);

server = http.createServer(app);
server.listen(PORT, function () {
  console.log('server listening on %d. check the log messages.', PORT);
});
