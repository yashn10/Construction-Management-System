const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../db/db');
const Register = require('../models/register');
const bcrypt = require('bcryptjs');


const middleware = (req, res, next) => {
    console.log("hello middleware");
    next();
};


router.get('/about', middleware, (req, res) => {
    res.send("hello about page");
    console.log("hello about page");
});


router.get('/contact', (req, res) => {
    console.log("hello world");
    res.send("hello world");
});


router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    } else {
        return res.json(req.body);
    }
});


router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "please fill all the fields" });
    }

    try {

        const userExist = await Register.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "user already exists" });

        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });

        } else {
            const user = new Register({ name, email, phone, password, cpassword });

            const saveuser = await user.save();

            if (saveuser) {
                res.status(201).json({ message: "registered successfully" });
                console.log(req.body);
            } else {
                res.status(500).json({ error: "failed to register" });
            }

        }


    } catch (error) {
        console.log("error", error);
    }

});


router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "please fill all the fields" });
    }

    try {

        const user = await Register.findOne({ email: email });

        if (user) {

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                res.status(201).json({ error: "user signin successfully" });
            } else {
                res.status(400).json({ error: "invalid credentials" });
            }

        } else {
            res.status(400).json({ error: "invalid credentials" });
        }


    } catch (error) {
        console.log(error);
    }

});


module.exports = router;
