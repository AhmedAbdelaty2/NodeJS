var Emitter = require('./emitter')

var emt = new Emitter();

emt.on('logIn', function(){
    console.log("Hello again")
})

emt.emit('logIn')