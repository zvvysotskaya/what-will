const sanitizeHTML = require('sanitize-html')
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
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
                                res.send('Such user name already exists. Please, choose another username.')
                            }
                            else {
                                let salt = bcrypt.genSaltSync(10)
                                let password = bcrypt.hashSync(req.body.password, salt);
                                db.collection('users').insertOne({ username: safeUsername, email: req.body.email,password: password})
                                    .then(rr => {
                                        res.send('Your account created successfully.')                                       
                                    })
                                    .catch(er => console.log(er))
                            }

                        })
                }
            }).catch(er=>console.log(er))
    })
    app.post('/login', function (req, res) {
        if (req.body.password == '') {
            res.send('Password cannot be empty')
            return
        }
        if (req.body.email == '') {
            res.send('Email cannot be empty')
            return
        }
        let password = req.body.password
        let email = req.body.email     
        if (password && email != '') {
            db.collection('users').find({ email: { $eq: req.body.email } })
                .toArray()
                .then((result) => {
                    if (result[0] == null) {
                        res.send('Invalid pasword / email!')
                        return
                    }
                    if (result[0] != null) {
                        if (bcrypt.compareSync(password, result[0].password)) {
                            req.session.user = {
                                email: req.body.email,                                
                                _id: ObjectID(result[0]._id),
                                username: result[0].username
                            }
                            res.send('Congrats!')
                        } else {
                            res.send('Invalid pasword / email!')
                            return
                        }
                    } else {
                        res.send('Invalid pasword / email!')
                        return
                    }
                })
                .catch(er => console.log(er))
        }

    })

    app.get('/isUserLoggedin', function (req, res) {
        if (req.session.user) {
            res.send('a user is loggedin.')
        }        
    })

    app.get('/logout', function (req, res) {
        req.session.destroy(function () {
            res.send('You are now loggedout.')
        });
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