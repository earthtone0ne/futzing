var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var userPage = require('./users.js');
var swig = require('swig');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname);
swig.setDefaults({cache: false});

app.listen(3030, function () {
  console.log('listening...');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
   console.log(res.statusCode);
   res.send('Hello');
   next();
});

app.use('/users', userPage);
