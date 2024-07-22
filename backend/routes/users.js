var express = require('express');
var router = express.Router();

const User = require('../models/users');

router.post("/signup", (req, res) => {
    if (!req.body.password || !req.body.email) {
        res.json({ result: false, error: 'Missing or empty fields' })
        return;
    }
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(dbData => {
        if (dbData) {
            res.json({ result: false, error: 'User already exists' });

        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            newUser.save().then(newUser => {
                res.json({ result: true });
            });
        }
    })

});

router.post("/signin", (req, res) => {
    if (!req.body.password || !req.body.email) {
        res.json({ result: false, error: 'Missing or empty fields' })
        return;
    }
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') }, password: req.body.password }).then(dbData => {
        if (dbData) {
            res.json({ result: true });

        } else {
            res.json({ result: false, error: 'User not found' })
        }
    })

});

module.exports = router;
