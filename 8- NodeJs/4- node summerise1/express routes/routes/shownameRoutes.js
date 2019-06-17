const express = require('express');

const shownameRoutes = express.Router();

function route(name) {
    shownameRoutes.route('/').get((req, res) => {
        res.send(`Hello Mr. ${name}`);
    });
    shownameRoutes.route('/lastname').get((req, res) => {
        res.send(`what is your last name Mr. ${name}`);
    });
    return shownameRoutes;
}
module.exports = route;