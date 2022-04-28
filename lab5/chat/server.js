var express = require('express')
var app = new express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connect', function(client){
    client.on('message',function(message,name){
        client.broadcast.emit('messages',message,name)
    })
})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
http.listen(3000)