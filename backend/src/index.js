const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:zA76Njnq0Gx03c2O@cluster0-fkhp6.mongodb.net/upload_test', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3001);