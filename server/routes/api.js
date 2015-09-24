var express = require('express');
var router = express.Router();
var Song = require('../models/beatles.js');


// GET ALL

// GET ONE

// POST ONE
router.post('/songs', function(req, res, next){
  new Song ({
    songTitle: req.body.songTitle,
    songLength: req.body.songLength,
    composer: req.body.composer,
    billboard100: req.body.billboard100
})
  .saveQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// UPDATE ONE

// DELETE ONE




module.exports = router;
