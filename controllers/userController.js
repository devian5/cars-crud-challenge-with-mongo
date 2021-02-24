const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';


class UserController {

    constructor() {
    }

    async indexAll() {
        return User.find().limit(10);
    }
    
    async store(user) {
        user.password = await bcrypt.hash(user.password,5);
        console.log(user);
        return User.create(user);
    }
    
    async login(email,password) {
        const user =  await User.findOne({email});
        if(!user){
            throw new Error('Email dont exist')
        }
        if(!await bcrypt.compare(password,user.password)){
            throw new Error('password incorrect')
        };

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        return jwt.sign(payload, secret);
        
    }
    async update(id, user) {    
        return User.findByIdAndUpdate(id,user);
    }

    async destroy(id) {
        return User.findByIdAndRemove(id);
    }

}


let userController = new UserController();
module.exports = userController;