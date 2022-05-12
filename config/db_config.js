
//database name-> node_mysql_crud_db
// CREATE DATABASE node_mysql_crud_db;
//create table users(id int(255) unsigned primary key auto_increment,first_name varchar(255) not null,last_name varchar(255) not null,dept varchar(255) not null, city varchar(255) not null);
//insert into users(first_name, last_name, dept, city) values
// ('Jeck','Dorcy','Security','California'),
// ('Amit','Shah','Home','New Delhi'),
// ('Jay','Patel','Finance','Surat'),
// ('Mahi','Patel','sales','Surat'),
// ('Aman','Gupta','Marketing','Banglore'),
// ('Roshani','Nadar','Head','Banglore'),
// ('Falguni','Nayar','Production','Mumbai');

'use strict';

const mysql = require('mysql');

//mysql db connection
const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_mysql_crud_db'
});

dbConn.connect( (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Database Connected!');
    }
});
module.exports = dbConn;

