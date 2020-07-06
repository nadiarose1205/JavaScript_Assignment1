'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

// get Projects page
router.get('/', function (req, res) {
    res.render('projects', { title: 'Projects'});
});

// get Services page
router.get('/', function (req, res) {
    res.render('services', { title: 'Services'});
});

// get About Me page
router.get('/', function (req, res) {
    res.render('about_me');
});

// get Contact page
router.get('/', function (req, res) {
    res.render('contact_me');
});

module.exports = router;
