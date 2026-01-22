// synchronous file read
// const fs = require("fs")
// console.log("1. Starting file read ...")
// const data = fs.readFileSync("myFile.txt", "utf8");
// console.log("2. file contents: ", data)
// console.log("3. Done reading the file")

// asyncronous file read
// const fs = require("fs");
// console.log("1. Starting file read...")
// fs.readFile("myFile.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     console.log("2. File contents: ", data);
// });
// console.log("3.Done starting read operation")

// const { error } = require('console')
// const fs = require('fs')
// console.log('1. starting')
// fs.readFile('myFile.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log('2. This File contents: ', data);
// });
// console.log('3. Done starting read operation')

// using promises/ async-await to avoid callback hell

// promises 
// const fs = require('fs').promises;
// console.log('1. Reading file ...')
// fs.readFile("myFile.txt", 'utf-8')
//     .then(data => {
//         console.log('3.File content: ', data);
//     })
//     .catch(err => console.error('Error: ', err));

// console.log('2. This runs before the file is read')




// async-await
// async function getUserData(userId){
//     try {
//         const user = await User.findById(userId);
//         const orders = await Order.find({userId});
//         return {user, orders};
//     } catch (error) { console.error('failed to fetch user data: ', error);
//         throw error;
//     }
// }

// creating and using promises 
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.5;
//         if (success){
//             resolve ('Operation completed successfully');
//         } else {
//             reject (new Error('Operation failed'));
//         }
//     }, 1000);
// });
// // using the promise
// myPromise
//     .then(result => console.log('Success: ', result))
//     .catch(error => console.error('Error: ', error.message));
// promise methods : .then(), .catch(),finally(), promise.resolve(iterable), promise.race(iterable),promise.allsettled()

// reading file with async/await
const fs = require('fs').promises;
async function readFile(){
    try {
        const data = await fs.readFile('myFile.txt', 'utf-8');
        console.log(data);
    }catch (error) {
        console.error('Error handling file: ', error);
    }
}
readFile()

// error handling