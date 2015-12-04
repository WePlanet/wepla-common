var morgan = require('morgan');


exports.hello = function () {
  console.log('hello');
};


/**
 * morgan wrapper
 * @param app
 */
exports.logger = function setLogger(app) {

  // http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x329.html
  var env = app.get('env'),
      red = '\x1B[31m',
      green = '\x1B[32m',
      yellow = '\x1B[33m',
      cyan = '\x1B[36m',
      white = '\x1B[37m',
      endColor = '\033[0m';

  // Redefind method token
  morgan.token('method', function (req, res) {
    var color;

    if (req.method === 'GET')    color = green;
    else if (req.method === 'POST')   color = cyan;
    else if (req.method === 'PUT')    color = yellow;
    else if (req.method === 'DELETE') color = red;
    else                              color = white;

    return color + req.method + endColor;
  });

  // Redefine status token
  morgan.token('status', function (req, res) {
    var color;

    if (res.statusCode < 300)  color = green;
    else if (res.statusCode < 400)  color = cyan;
    else if (res.statusCode < 500)  color = yellow;
    else if (res.statusCode < 600)  color = red;
    else color = white;

    return color + res.statusCode + endColor;
  });

  // Create a token for request body
  morgan.token('body', function (req, res) {
    return white + 'body: ' + JSON.stringify(req.body) + endColor;
  });

  app.use(morgan(':method :url :status :response-time ms :body'));
  //app.use(morgan('dev'));
};
