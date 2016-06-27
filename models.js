var db = require('./database');
var Sequelize = require('sequelize');

var Users = db.define('user', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false
   }
});

var Messages = db.define('message',{
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   message: {
      type: Sequelize.TEXT,
      allowNull: false
   }
})

Messages.belongsTo(Users, {as: 'author'});
Users.hasMany(Messages, {foreignKey: 'authorId'});
Users.sync();
Messages.sync();

module.exports = {
   Users: Users,
   Messages: Messages
};

