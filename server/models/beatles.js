var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
var Schema = mongoose.Schema;

var Song = new Schema({
    songTitle: String,
    songLength: Number,
    composer: String,
    albumTitle: String,
    albumYear: Number,
    comments: String,
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/songs');

module.exports = mongoose.model("songs", Song);



// TO DO LIST
// songs in database aren't showing up on the indexxxxx.html page



// COMPLETED
// store the songs in $scope.songs  and put into an ng-repeat song in songs | filter
    // already had this, but the songs aren't showing up. I added a filter, but I don't know if it's working b/c I can't test it

// iterate over each song and collect the year and put the years in to an object then ng-repeat.
// media object for songs.
    // put $scope.albumYear = {}; in controllers.js

// added to indexxxxx.html {{albumTitle}} and {{albumYear}}

// made changes to the Schema
