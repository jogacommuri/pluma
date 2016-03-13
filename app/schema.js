var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var MessageSchema = new Schema({
   
    message:{
        type:String,  
    },
    timeStamp:{
        type: String
    }
});

module.exports =mongoose.model('Message',MessageSchema);