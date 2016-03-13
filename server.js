var express =  require('express');
var bodyParser =  require('body-parser');

var config = require('./config');
var mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect(config.database, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("database connection successful");
	}
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


//api

var api = require('./app/api')(app,express,io);
app.use('/api',api);


app.get('*', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});


http.listen(config.port,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("the app is on port 5555");
	}
});
