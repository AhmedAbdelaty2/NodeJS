var fs = require('fs');

//Renaming file test.txt to info.txt
fs.renameSync('./test.txt','./info.txt')

//removing file info.txt
fs.unlinkSync('./info.txt')

//reading from dummy.txt line by line
var dummy=fs.createReadStream('./dummy.txt', {encoding: 'utf8', highWaterMark: 32*1024})
dummy.on('data',function(chunk){
    const lines = chunk.split(/\r?\n/);
    lines.forEach(element => {
        console.log(element)
    });
})

//reading data from data.json as Synchronized
var data = fs.readFileSync('./data.json', 'utf8');
console.log(data);

//reading data from data.json as Asynchronous
fs.readFile('./data.json', 'utf8', function(err, data) {
    if(err){
        throw err;
    }
	console.log(data);
});

console.log('Done!');

// writing into info.txt
var toWrite = fs.createWriteStream('info.txt')
toWrite.write('hello iti')

//creating new directory
fs.mkdir('./new', (err) => {
    if(err){
        throw err;
    }
    console.log("new directory is created.");
});