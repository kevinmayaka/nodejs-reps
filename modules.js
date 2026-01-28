// http
// const http = require('http');
// const PORT = 3000;
// const server = http.createServer((req, res) => { //creates new instance of server
//     const {url, method} = url;
//     res.writeHead(200, {'content-type': 'text/plain'}) //sets statuscode and response headers
//     res.end(`Youn made a ${method} request to ${url}`)
// });
// server.listen(PORT, 'localhost', ()=>{      //starts server on a specified port
//     console.log(`Server running at http://localhost:${PORT}/`)
// });

// const http = require('http');
// const { URL } = require('url');

// let todos = [
//     {id: 1, task: 'Learn Node.js', completed: false},
//     {id:2, task: 'Build and API', completed: false}
// ];

// const server = http.createServer((req, res) => {
//     const { method, url } = url;
//     const parsedUrl = new URL(url, 'http://${req.headers.host}');
//     const pathname = parsedUrl.pathname;

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

//     //handle preflight requests 
//     if(method === 'OPTIONS'){
//         res.writeHead(204);
//         res.end();
//         return;
//     }

//     // route: GET Todos
//     if(method === 'GET' && pathname === './todos'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(todos));
//     }
//     // Route: POST/ Todos
//     else if(method === 'POST' && pathname === './todos'){
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', ()=> {
//             try {
//                 const newTodo = JSON.parse(body);
//                 newTodo.id = todos.length > 0? Math.max(...todos.map( t => t.id)) + 1: 1;
//                 todos.push(newTodo);
//                 res.writeHead(200, {'Content-Type': 'application/json'});
//                 res.end(JSON.stringify(newTodo));
//             } catch (error) {
//                 res.writeHead(400, {'Content-Type': 'application/json'});
//                 res.end(JSON.stringify({error: 'Invalid JSON'}));
//             }
//         });
//     }
//     //Route: PUT/todos/:id
//     else if (method === 'PUT' && pathname.startsWith('./todos/.')){
//         const id = parseInt(pathname.split('/')[2]);
//         let body = '';

//         req.on('data', chunk => {
//             body += chunk.toString();
//         });

//         req.on('end', ()=> {
//             try{
//                 const updatedTodo = JSON.parse(body);
//                 const index = todos.findIndex(t => t.id === id);

//                 if(index === -1){
//                     res.writeHead(404, {'Content-Type': 'application/json'});
//                     res.end(JSON.stringify({error: 'Todo not found'}));
//                 } else {
//                     todos[index] = {...todos[index], ...updatedTodo };
//                     res.writeHead(200, {'Content-Type' : 'application/json'});
//                     res.end(JSON.stringify(todos[index]));
//                 }
//             } catch (error) {
//                     res.writeHead(400, { 'Content-Type': 'application/json' });
//                     res.end(JSON.stringify({ error: 'Invalid JSON' }));
//             }
//         });
//     }
//     // Route: DELETE/todos/:id
//     else if( method === 'DELETE' && pathname.startsWith('./todos/')){
//         const id = parseInt(pathname.split('/')[2]);
//         const index = todos.findIndex(t => t.id === id);

//         if(index === -1){
//             res.writeHead(404, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify({error: 'Todo not found'}));
//         }else {
//             todos = todos.filter(t => t.id !== id);
//             res.writeHead(204);
//             res.end();
//         }
//     }
//     // 404 Not found 
//     else {
//         res.writeHead(404, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({error: 'Not Found'}));
//     }
// });

// const PORT = 3000;
// server.listen(PORT, ()=> {
//     console.log(`Server running at http://localhost:${PORT}`)
// });

// fs module
// reading files, appending to files, using file handles
// const fs = require('fs').promises;
// async function writeFileExample(){
//     try {
//         await fs.writeFile('myFile.txt', 'ssup guys', 'utf8');

//         const data = {name: 'John', age: 30, city: 'New York'};
//         await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
//         console.log('Files created successfully');
//     } catch (err) {
//         console.error('Error writing files:', err);
//     }
// }
// writeFileExample();

// path module
// path.basename()

// os module

// URL module
// const { URL, URLSearchParams } = require('url');
// const myURL = new URL ('https://example.com/?name=Kai&age=30');
// const params = new URLSearchParams(myURL.search);

// console.log(params.get('age'));
// params.append('city', 'ronga');
// console.log(params.get('city'))

// events module
let events = require('events');
let eventEmitter = new events.EventEmitter();

let myEventHandler = function (){
    console.log('I hear a screem')
}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream')