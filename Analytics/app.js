var sys = require('sys'),
    express = require('express'),
    io = require('socket.io'); 

var app = express();

app.use(express.static(__dirname + '/public'));


/*var db = require('mongoskin').db('localhost:27017/school'); 

db.collection('students').find().toArray(function(err, result) {
    if (err) throw err;
    
    var val ={};
    
    
    
});*/


app.get('/', function (req, res) {
	  res.sendfile(__dirname + '/index.html');
});


app.listen(8000);