var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flSch = new Schema({
    fnum:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1,
        required:true
    }
});

var flatModel = mongoose.model('flat',flSch);

module.exports = flatModel;
