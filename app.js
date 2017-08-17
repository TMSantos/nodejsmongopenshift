var express = require('express');
var app = express();

app.set('port',8080);

app.get('/',function(req,res){
    console.log("GET the homepage");
    res
    .status(200)
    .send("Hello stranger, I'm working");
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on port' + port);
});