const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const carSchema = {
    ownerId:{
        type: ObjectId,
        required: true
    },
    // movieId:{
    //     type: ObjectId,
    //     required: true
    // },
    // movieExternalReference:{
    //     type: String,
    //     required: true
    // },

    // movieReference: {

    // },
    dateinit: Date,
    deteEnd: Date,
    // brand: String,
    // model: String,
    // year: Number
}

const Car = mongoose.model('Car', carSchema);

module.exports = Car;