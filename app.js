// // importing express module 
// // const express = require('express');
// // // creating express application instance
// // const app = express();
// // const port = 8080;
// // // defining routes
// // app.get('/', (req, res) => {
// //     res.send('Hello World from express')
// // });
// // // start server 
// // app.listen(port, ()=>{
// //     console.log(`Example app listening at http://localhost:${port}`);
// // });

// const express = require('express')
// const app = express();
// port = 8080;
// app.get('./search', (req, res)=>{
//     const {q, category} = req.query;
//     res.send(`Search query: ${q}, Category: ${category || none}`);
    
// });
// app.listen(port, ()=>{
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// middleware
const express = require('express')
const app = express();

app.use((req, res, next)=>{
    console.log("Middleware 1: this always runs");
    next();
});

app.use((req, res, next) =>{
    console.log("Middleware 2: This also always runs");
    next();
});

app.get('/', (req, res) =>{
    res.send('Hello maguyz!')
});

app.listen(8080, ()=>{
    console.log('server running on port 8080')
})