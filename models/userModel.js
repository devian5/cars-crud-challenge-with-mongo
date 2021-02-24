const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String
    
});


const toJSONConfig = {
    transform: (doc,ret,opt) => {
        delete ret ['password']
        return ret
    }
}

userSchema.set('toJSON', toJSONConfig)

const User = mongoose.model('User', userSchema);

module.exports = User;