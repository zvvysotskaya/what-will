const connection = require('../client/src/mysql-config/connection');

module.exports = function (app) {
    app.get('/shopping', function (req, res) {
        console.log('connected!');
        connection.query('SELECT * FROM users', function (error, result, field) {
            if (error) {
                console.log('error is ' + error);
            } else {
                res.send(result);
            };
        });
    });
};