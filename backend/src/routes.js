const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const mongoose = require('mongoose');

const Post = require("./models/Post");

routes.post('/posts', multer(multerConfig).single('file'), async(req, res) => {
    const { originalname: name, size, filename: key } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url: ''
    });

    return res.json(post);
});

module.exports = routes;