// const handler = require('serve-handler');
// const http = require('http');
 
// const server = http.createServer((request, response) => {
//   // You pass two more arguments for config and middleware
//   // More details here: https://github.com/vercel/serve-handler#options
//   return handler(request, response,{
//     "public": "./build"
//   });
// })
 
// server.listen(8107,'0.0.0.0', () => {
//   console.log('Running at http://localhost:8107');
// });
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' })
//   fs.createReadStream('./build/index.html').pipe(res)
// })

// server.listen(8107 || 3000)

const express = require('express');
const path = require('path');
const app = express();
const axios = require("axios"); 
app.use('/njsw07/',express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
  console.log("Got a GET request for")
  // fetch('http://localhost:5000'+req.originalUrl).then(function(response) {
  //   // return response.json();
  //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // })
  axios
  .get("http://localhost:5000"+req.params[0])
  .then((r) => {
    // setEmotion(res.data.emotions);
    res.send(JSON.stringify(r.data))
  }).catch(()=>res.send('e'))
  
});
// app.get('/getEmotions', function (req, res) {
//   console.log(req)

//   console.log("Got a GET request for /list_user");
//   res.send('Page Listing');
// })
console.log('s')
app.listen(8107);