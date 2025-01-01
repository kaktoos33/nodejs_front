const express = require('express');
const { postRegister, postLogin } = require('../services/userService');
const router = express.Router();
require('dotenv').config();
let session = require('express-session');

router.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
}));
router.get('/', (req, res) => {
    res.render('home', { pagename: 'Home' });
});
router.get('/about', (req, res) => {
    res.render('about', { pagename: 'About' });
});
router.get('/register', (req, res) => {
    res.render('register', { pagename: 'Register' });
});
router.post('/register', (req, res) => {
    console.log('Registring');

    postRegister(req.body).then(result => {
        res.render('login', { pagename: 'Login' });
    })
        .catch(err => {
            console.log(err);
            res.render('register', { pagename: 'Register' });
        });

});
router.get('/login', (req, res) => {
    res.render('login', { pagename: 'Login' });
});
router.post('/login', (req, res) => {
    console.log('Logging in');
    session = req.session;
    postLogin(req.body).then(result => {
        console.log(result.data);
        console.log(session);
        session.name = result.data.user.firstName;
        session.logged = result.data.logged;
        session.token = result.data.token;
        console.log(session);
        res.render('home', { pagename: 'Home', session: session });
    })
        .catch(err => {
            console.log(err);
            res.render('login', { pagename: 'Login' });
        });
});

router.get('/logout', (req, res) => {
    req.session.destroy(null);
    res.render('home', { pagename: 'Home' });
});
module.exports = router;