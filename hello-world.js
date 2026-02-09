// path module

// const path = require('path')
// var pathObject = path.parse(__filename)
// console.log(pathObject);

// os module

// const os = require('os')
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total memory : ${totalMemory}`);
// console.log(`Free memory : ${freeMemory}`);

// fs module

// synchronous way to read files
// const fs = require('fs')
// const files = fs.readdirSync('./')
// console.log(files);

// async way to read files
// const fs = require('fs');
// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// })

// event module
// const { log } = require('console');
// const EventEmitter = require('events')           //event emmiter class
// // var emitter = new EventEmitter();              //create an object of event emmiter class

// const Logger = require('./logger.js');                      //importing logger module
// const logger = new Logger();

// logger.on('messageLogged', function(args){     //register listener, you can use arrow function also
//     console.log('Listener called', args);
// })

// logger.log('message');                            //calling log function from logger module

// http
const http = require("http");
const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New connection...');
// })
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("Listening on port 3000...");
