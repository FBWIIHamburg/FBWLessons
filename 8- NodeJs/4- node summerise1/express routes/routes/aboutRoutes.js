const express = require('express');

// Route without a parameter from app
const abouteRoutes = express.Router();

abouteRoutes.route('/').get((req, res) => {
    res.send('about us page');
});

abouteRoutes.route('/subabout').get((req, res) => {
    res.send('Sub about us page');
});

module.exports = abouteRoutes;