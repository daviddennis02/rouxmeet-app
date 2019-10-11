var express = require('express');
var router = express.Router();
var appdata = require('../data.json');


/* GET home page. */
router.get('/', function (req, res, next) {
  var myArtwork = []; //aggregate all the artwork
  var myArtists = [];

  myArtists = appdata.speakers;
  appdata.speakers.forEach(function (item) {
    myArtwork = myArtwork.concat(item.artwork);
  }); //loop to populate each of the item's artwork into the array
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
  });
});


// Get speakers page
router.get('/speakers', function (req, res) {
  var myArtwork = []; //aggregate all the artwork
  var myArtists = [];
  myArtists = appdata.speakers;

  appdata.speakers.forEach(function (item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
  });
});


// Get speakers detail page
router.get('/speakers/:speakerid', function (req, res, next) {
  var myArtwork = []; //aggregate all the artwork
  var myArtists = [];

  appdata.speakers.forEach(function (item) {
    if (item.shortname == req.params.speakerid) {
      myArtists.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});



module.exports = router;