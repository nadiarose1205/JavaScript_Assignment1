'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { 'title': 'Home' });
});

// get Projects page
router.get('/projects', function (req, res) {
    res.render('projects', { 'title': 'Projects'});
});

// get Services page
router.get('/services', function (req, res) {
    res.render('services', { 'title': 'Services'});
});

// get About Me page
router.get('/about_me', function (req, res) {
    res.render('about_me', { 'title': 'About Me'});
});

// get Contact page
router.get('/contact_me', function (req, res) {
    res.render('contact_me', { 'title': 'Contact Me'});
});

module.exports = router;
