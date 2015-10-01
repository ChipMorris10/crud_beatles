var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
var Schema = mongoose.Schema;

var Song = new Schema({
    songTitle: String,
    songLength: Number,
    composer: String,
    leadVocals: String,     // ADD
    billboard100: Boolean  // REMOVE
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/songs');

module.exports = mongoose.model("songs", Song);
