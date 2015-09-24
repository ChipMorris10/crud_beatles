var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
var Schema = mongoose.Schema;

var Song = new Schema({
    songTitle: String,
    SongLength: Number,
    composer: String,
    billboard100: Boolean
});

mongoose.connect(process.envMONGO_URI || 'mongodb://localhost/songs');

module.exports = mongoose.model("songs", Song);
