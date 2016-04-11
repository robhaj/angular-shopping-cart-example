'use strict'

var express = require('express');

var app = express();

app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
	res.sendFile('main.html',{'root':__dirname});
})

app.get('/data', function(req,res){
	res.sendFile('assets/data.json',{'root':__dirname})
})

app.listen('3000',function(){
	console.log('Server running at http://localhost:3000 !!')
})
