const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
let Task = require('./api/models/todoListModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/local', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes');

routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`listening on ${port}`);