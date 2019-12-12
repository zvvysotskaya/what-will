const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const mongodb = require('mongodb');
//const assert = require('assert');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/public'));


const apiController = require('./node-controllers/apiController')
apiController(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
if (process.env.NODE_ENV != 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));

    app.get('/', function (req, res) {
        res.sendFile(__dirname, 'client/public', 'index.html');
    })
    require('dotenv').config();
};
//let db;
//let connectionStrings = process.env.REACT_APP_DB_URL
//mongodb.connect(connectionStrings, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    //assert.equal(null, err);
 //  db = client.db('ToDoApp');
//});
//app.post('/createShoppingList', function (req, res) {
    //  console.log(req.body.item)
//  db.collection('items').insertOne({ text: req.body.item }, function () {
//        res.send('Created! Thank you for submiting a form')
//    })
//})





app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});


app.get('/sts', (req, res, next)=> {
  //  res.sendFile(process.cwd() + '\\client\\src\\img\\sonja.png');
    let markup = React.renderToString('<h1>Hello</h1>');  // <-- render the APP here
    res.send(markup);
 //   res.send('<h1>Hello</h1>');
})


app.all('*', (req, res) => {
    res.send('<h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1>');
})

const port = process.env.PORT || 5000;
app.listen(port, error => { if (error) { throw error; } else { console.log('server running on port ' + port) } });