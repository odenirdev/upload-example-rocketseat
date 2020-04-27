const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const mongoose = require('mongoose');

const Post = require("./models/Post");

routes.post('/posts', multer(multerConfig).single('file'), async(req, res) => {
    try {
        const { originalname: name, size, filename: key, path: url } = req.file;

        const post = await Post.create({
            name,
            size,
            key,
            url
        });

        return res.json(post);
    } catch (error) {
        res.status(400).send({
            error: {
                pt: 'Upload de arquivo falhou',
                en: 'Upload file fail'
            }
        });
    }

});

module.exports = routes;