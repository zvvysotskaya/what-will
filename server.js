const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser')
const session = require('express-session')
const compression = require('compression')
const MongoStore = require('connect-mongo')(session)


const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(sslRedirect());
app.use(express.static('client/build'));
app.use(compression())
var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};
app.use(session({
    secret: 'keyboard cat',
    store: new MongoStore({
        url: process.env.REACT_APP_DB_URL || process.env.MONGODB_URI
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
}));

const apiController = require('./node-controllers/apiController')
apiController(app);

if (process.env.NODE_ENV === 'production') {
    app.use(forceSsl)
    //set static folder

    app.use(express.static('client/build'));

    app.get('*', function (req, res, next) {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })


}
if (process.env.NODE_ENV != 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));  

    app.get('/', function (req, res) {
        res.sendFile(__dirname, 'client/public', 'index.html');
    })
    require('dotenv').config();
};

app.all('*', (req, res) => {
    res.send('<h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1>');
})

const port = process.env.PORT || 5000;
app.listen(port, error => { if (error) { throw error; } else { console.log('server running on port ' + port) } });

app.get('./service-worker.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})