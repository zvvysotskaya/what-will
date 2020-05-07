const sanitizeHTML = require('sanitize-html')
require('dotenv').config();
const mongodb = require('mongodb');
let db;
let connectionStrings = process.env.REACT_APP_DB_URL
mongodb.connect(connectionStrings, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    //assert.equal(null, err);
    db = client.db('ToDoApp');
});
module.exports = function (app) {
    app.post('/create-user', function (req, res) {
        let safeUsername = sanitizeHTML(req.body.username, { allowedTags: [], allowedAttributes: {} })
        db.collection('users').findOne({ email: req.body.email })
            .then(dbResponse => {
               // console.log(JSON.stringify(dbResponse))
                if (dbResponse) {
                    res.send('Such email already exists')
                }               
                else {
                    db.collection('users').findOne({ username: safeUsername })
                        .then(dbResp => {
                            if (dbResp) {
                                res.send('Such user name already exists. Please, choose other user name.')
                            }
                            else {
                                db.collection('users').insertOne({ username: safeUsername, email: req.body.email })
                                    .then(rr => {
                                        res.send('Your account created successfully.')
                                        console.log('Your account created successfully.')
                                        
                                    })
                                    .catch(er => console.log(er))
                            }

                        })
                }
            }).catch(er=>console.log(er))
    })
   
    app.post('/createShoppingList', function (req, res) {  
        let safeText = sanitizeHTML(req.body.item, { allowedTags: [], allowedAttributes: {} })

        db.collection('items').insertOne({ text: safeText }, function () {
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