var express = require('express');
var router = express.Router();
var Song = require('../models/beatles.js');


// Get all
router.get('/songs', function(req, res, next){
  Song.findQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});


// Get one
router.get('song/:id', function(req, res, next){
  Song.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// Post one
router.post('/songs', function(req, res, next){
  console.log("Req.body",req)
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

// Update one
router.put('/song/:id', function(req, res, next){
  Song.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// Delete one
router.delete('/song/:id', function(req, res, next){
  Song.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

module.exports = router;
