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
                res.send(console.log("Success! username: " + req.body.username + ";todo: " + req.body.todo));
            });

        } else {

            console.log('wrong connection')
        }
    });
    app.post('/signUp', function (req, res) {
        if (connection) {
            // connection.connect()
            console.log('signup connected to db, to user table ');
            //check if email exist in db
            let email = req.body.email
            connection.query('SELECT * FROM user where email = ' + connection.escape(email), function (error, results, fields) {
                if (error) throw error;
            //   for (var i = 0; i < results.length; i++) {
              //      var row = results[i];
                //    console.log(i);
                //}
               // console.log(result);
                if (results.length<1) {
                    console.log('We  do not have such email! Count: ' + results.length)

                    //insert data intodb
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
                          //  res.json()
                           res.send(console.log("Success! username: " + req.body.username));
                        });
                    } else {
                        console.log('password does not match!');
                    }
                } else {
                    console.log('sorry email exists')
                }
            });
            } else {
                console.log('Sorry, wrong connection!');
            }       

        });

    app.get('/allFromUser', function (req, res) {

        if (connection) {
            console.log('Connected from allFromUser');
           //   connection.connect();
            
            connection.query('SELECT * FROM user', function (error, results, fields) {
                if (error) throw error;
                res.send(results);
                
            });
          //  connection.end();
        } else {
            console.log('Wrong connection!');
        }
    });
}