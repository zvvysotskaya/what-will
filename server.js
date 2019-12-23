const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const sanitizeHTML = require('sanitize-html')

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/public'));


const apiController = require('./node-controllers/apiController')
apiController(app);

function passwordProtected(req, res, next) {
    res.set('WWW-Authenticate', 'Basic realm="Simple Todo App"')
   // console.log(req.headers.authorization)
    if (req.headers.authorization == "Basic bGVhcm46amF2YXNjcmlwdA==") {
       
        next()
    } else {
      // res.send('<h1>Authentication required</h1>')
          //  res.status(401).send('Authentication required')
        
        res.status(401).send("Authentication required")
    }
}
app.use(passwordProtected)



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

app.all('*', (req, res) => {
    res.send('<h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1><h1>The file does not exist!</h1>');
})

const port = process.env.PORT || 5000;
app.listen(port, error => { if (error) { throw error; } else { console.log('server running on port ' + port) } });