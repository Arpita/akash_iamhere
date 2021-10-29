var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var apSch = new Schema({
    apName:{
        type:String,
        required:true
    },
    numTowers:{
        type:Number,
        required:true
    },
    numFloors:{
        type:Number,
        required:true
    },
    flatsPerFloor:{
        type:Number,
        required:true
    }
});

var apartmentModel = mongoose.model('apartment',apSch);

module.exports = apartmentModel;
