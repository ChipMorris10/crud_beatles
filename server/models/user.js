var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocaMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
});

User.plugin(passportLocaMongoose);

module.exports = mongoose.model('users', User);
