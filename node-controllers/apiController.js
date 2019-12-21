
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
        db.collection('items').insertOne({ text: req.body.item }, function () {
            res.redirect('/')
        })
    })
    app.get('/shoppingPage', function (req, res) {
        db.collection('items').find().toArray(function (err, items) {           
            res.send(items)
        })    
    })
    app.post('/update-item', function (req, res) {
        db.collection('items').findOneAndUpdate({ _id: new mongodb.ObjectId(req.body.id) }, { $set: { text: req.body.text } },
            res.send('success!')
        )
    })
    app.post('/delete-item', function (req, res) {
        db.collection('items').deleteOne({ _id: new mongodb.ObjectId(req.body.id) },
            console.log('deleted!!')
        )
    })
}