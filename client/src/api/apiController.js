const connection=require('../mysql-config/connection')
module.exports = function (app) {
    app.get('/shopping', function (req, res) {
        if (connection) {
            console.log('Yes! Connected');
            connection.query('SELECT * FROM users', function (error, results, field) {
                if (error) throw error;
                res.send(results);
            });
        } else {
            console.log('Wrong!');
        }
    });

}