const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
    name: String,
    email: {
       type: String,
       required: true,
       index: unique
    },
    password: String
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;