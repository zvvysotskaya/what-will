const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

var apiController = require('./node-controllers/apiController');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/', express.static(__dirname + '/client/src/pages/home-page/home-page.page'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
if (process.env.NODE_ENV != 'production') {
    // app.use(express.static(path.join(__dirname, 'client/public')));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
       
    });
    
};
apiController(app);
app.use('/shopping', express.static(__dirname + '/'));


const port = process.env.PORT || 5000;

app.listen(port, error => { if (error) { throw error; } else { console.log('server running on port ' + port) } });