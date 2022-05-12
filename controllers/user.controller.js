'use strict';

const User = require('../models/user.model')
const dbConn = require('../config/db_config');

//========================findAll============================
module.exports.findAll = (req,res) => {

    User.findAll(function (err, user)  {
        console.log('controller');
    
        if(err)
            res.send(err);
            console.log('res', user);
            res.send(user);
        
    });
};
//=======================findById===========================
module.exports.findById = (req,res) => {
    User.findById(req.params.id, (err, user) => {

        if(err) 
        res.send(err);
        console.log('res', user)
        res.json(user);
    });
};

//============================Create/Insert New Data====================================

exports.create = (req,res) => {
    const newUser = new User(req.body);

    //Handle null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({error:true, message:'Please provide all required filed'});
    }else{
        User.create(newUser, (err, user) => {
            if(err)
            res.send(err)
            res.json({err:false, message:'User Added Successfully!'})
        });
    }
};

// module.exports.create = (req,res) => {
//     //const newUser = new User(req.body)
//     const newUser =  {
//         first_name:     req.body.first_name,
//         last_name:     req.body.last_name,
//         dept :         req.body.dept,
//         city :      req.body.city
//       };
//       User.create(newUser, (err, user) => {
//           if(err) 
//           res.send(err);
//           res.json({error:false, message:'User Added Successdully!', data:user})
//       })
     
// };
  

//============================Update====================================

exports.update = (req,res) => {
    if(req.body.constructor === Object &&
        Object.keys(req.body).length === 0)
        {
            res.status(400).send({error:true, message:'Please provide all required fields'});

        }
    else{
        User.update(req.params.id, new User(req.body), function(err,user)  {
            if(err)
            res.send(err);
            console.log('res', user);
            res.json({error:false, message:'User Successfully Updated!'});

        });
    }
};

//=======================delete==================================

exports.delete = (req,res) => {
    User.delete(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        res.json({error:false, message:'User Deleted Successfully'});
        
    });
};