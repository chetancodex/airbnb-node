const db = require('../config/dbindex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.User;
const secretKey = "airbnb";

// For Register User 
exports.register = async(req,res) => {
    const email  = req.body.email;
    const user = {
        username : req.body.username,
        email : email,
        hash_password : bcrypt.hashSync(req.body.password, 10),
        userprofile : req.body.userprofile
    };

    const emailchecker = await User.findOne({where : { email : email}})
    if(!emailchecker) {
        User.create(user).then((user) => {
            res.status(200).send(user);
           }).catch((error) => {
            console.log(error)
            res.status(500).send({message : "Internal server Problem"});
        })
    } else {
        res.status(400).send({message : "Email Id Already exists "});
    }
};

exports.login = async(req,res) => {
    try {
        const user = await User.findOne({where : {email : req.body.email}});
        if(!user || !user.comparePassword(req.body.password)) {
            return res.status(400).send({message : "Email or Password is invalid "})
        };
        const token = jwt.sign({
            email  : user.email,
            username : user.username,
            password: user.password
        }, secretKey );
        res.status(200).send({ token });
    } catch(error)  {
        return res.status(500).send({message : "Internal Server Error" , err : error})
    } 

}