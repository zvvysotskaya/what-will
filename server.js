const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
if (process.env.NODE_ENV != 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));
  // app.get('/', function (req, res) {
 //       res.sendFile(path.join(__dirname, 'client/public', 'index.html'));       
 //   });        
};
var apiController = require('./node-controllers/apiController');
apiController(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});


app.use('/shopping', function (req, res, next) {
    next();
});
app.use('/shoppingInsert', function (req, res, next) {
    next();
});
app.use('/signUp', function (req, res, next) {
    next();
});
app.use('/allFromUser', function (req, res, next) {
    next();
});
//app.get('*', (req, res) => {
//    res.send('<h1>The file doesnot exist!</h1>');
//})

const port = process.env.PORT || 5000;
app.listen(port, error => { if (error) { throw error; } else { console.log('server running on port ' + port) } });