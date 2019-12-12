var express = require('express');
require('dotenv').config();
const mongodb = require('mongodb');
let db;
let connectionStrings = process.env.REACT_APP_DB_URL
mongodb.connect(connectionStrings, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    //assert.equal(null, err);
    db = client.db('ToDoApp');
});
module.exports = function (app) {
    
    app.post('/createShoppingList', function (req, res) {
        //  console.log(req.body.item)
        db.collection('items').insertOne({ text: req.body.item }, function () {
            res.send('Created! Thank you for submiting a form')
        })
    })
}