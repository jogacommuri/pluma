var Message =  require('./schema');
var config = require('../config');

module.exports = function(app,express,io){

	var api = express.Router();
    
    api.post('/chat',function(req,res){
        console.log(req.body);
        var message = new Message({
            message : req.body.message,
            timeStamp: req.body.timeStamp
        });
        message.save(function(err, chat){
            if(err){
                res.send(err);
                return;
            } else {
                console.log(chat);
                res.json(chat);
            }
        });
    });
    api.get('/history',function(req,res){
        Message.find({},function(err,history){
            if(err){
                res.send(err);
                return;
            }
            console.log(history);
            var op = JSON.stringify(history);
            res.send(op);
        });
    });
    
    
return api;
};
