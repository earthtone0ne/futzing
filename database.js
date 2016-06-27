
var config = {
  'username': 'futzer',
  'password': 'ffs',
  'database': 'futzingdb',
  'host': '127.0.0.1',
  'dialect': 'postgres',
  'logging': false
};

var Sequelize = require('sequelize');

module.exports = new Sequelize(config.database, config.username, config.password, config);


/*SQL:
CREATE USER futzer WITH PASSWORD 'ffs';
CREATE DATABASE futzingdb OWNER etg;*/
