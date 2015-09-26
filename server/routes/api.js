var express = require('express');
var router = express.Router();
var Song = require('../models/beatles.js');


// GET ALL
router.get('/songs', function(req, res, next){
  Song.findQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});


// GET ONE
router.get('songs/:id', function(req, res, next){
  Song.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// POST ONE
router.post('/song', function(req, res, next){
  console.log(req.body)
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
router.put('/song/:id', function(res, req, next){
  Song.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// DELETE ONE
router.delete('/song/:id', function(req, res, next){
  Song.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

module.exports = router;
