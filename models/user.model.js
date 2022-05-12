'use strict'
const dbConn = require('../config/db_config');

//User object create

var User = function(user)  {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.dept = user.dept;
    this.city = user.city;
};

//============================findByAll===================================

User.findAll = (result) => {
    dbConn.query("Select * From Users", (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(null, err);
        }else{
            console.log('Users: ', res);
            result(null, res);
        }
    });
};

//============================findById===================================

User.findById = (id, result) => {
    dbConn.query('Select * from users where id = ?', id, (err, res) => {
        if(err){
            console.log('Error: ',err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

//============================Create/Insert====================================

User.create = (newUser, result) => {
    dbConn.query("INSERT INTO users set ?", newUser, (err, res) => {
        if(err){
            console.log('Error: ', err)
            result(err, null);
        }else{
            console.log('Create new user');
            console.log('New Id: ', res.insertId);
            result(null, res.insertId);
        }
    });
};

//============================Update====================================

User.update = (id, user, result) => {

    dbConn.query('UPDATE users SET first_name = ?, last_name = ?, dept = ?, city = ? WHERE id = ?' , 
    [user.first_name, user.last_name, user.dept, user.city, id],
    
    (err, res) => {
        if(err){
            console.log("Error", err);
            result(null, err);
        }else{
            result(null, res)
        }
    });
};

//===========================Delete======================================= 
User.delete = (id, result) => {
    dbConn.query('DELETE FROM users WHERE id = ? ', [id], (err, res) => {
        if(err){
            console.log("Error: ", err)
            result(null, err);
        }else{
            result(null, res)
           
        }
    });
};


module.exports = User;