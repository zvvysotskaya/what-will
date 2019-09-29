const connection=require('../client/src/mysql-config/connection')
module.exports = function (app) {
    app.get('/shopping', function (req, res) {
        if (connection) {
            console.log('Connected from get shopping');
          //  connection.connect();
           connection.query('SELECT * FROM users', function (error, results, field) {
                if (error) throw error;
                res.send(results);
          //     connection.end();
            });
        } else {
            console.log('Wrong connection!');
        }
    });
    app.post('/shoppingInsert', function (req, res) {
        if (connection) {    
            console.log('connected to  to db, users table');
            let post = { username: req.body.username, todo: req.body.todo }
           
            connection.query('INSERT INTO users SET ?', post, function (error, results, fields) {
                if (error) throw error;
                res.send(console.log("Success! username: " + req.body.username+";todo: "+req.body.todo));
            });
    
        } else {

            console.log('wrong connection')
        }
    });
    app.post('/signUp', function (req, res) {
        if (connection) {
            // connection.connect()
            console.log('connected to db, to signup table ');

            let post = {
                prefix: req.body.prefix,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            }
            if (req.body.password === req.body.confirmpassword) {
                console.log('Congrat! Password match');

                connection.query('INSERT INTO user SET ?', post, function (error, results, fields) {

                    if (error) throw error;

                    res.send(console.log("Success! username: " + req.body.username));
                });
            } else {
                console.log('password does not match!');
            }
            } else {
                console.log('Sorry, wrong connection!');
            }
        
    });

}