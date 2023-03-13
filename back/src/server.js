
// const http = require ('http')
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require('./controllers/getCharDetail')

// const PORT = 3001

// http.createServer(function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("onsearch")){
//         const id = req.url.split('/').at(-1)
//         getCharById(res,id)
//     }

//     if (req.url.includes("detail")) {
//         const id = req.url.split('/').at(-1)
//         getCharDetail(res,id)
//     }

// }).listen(PORT,'localhost')

const express = require('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router  = require('../src/routes/index');
const cors =require("cors")

//? creaos milware
server.use(express.json())
//?perimito acceder a todos
server.use(cors())
//? creaos milware
server.use(morgan("dev"))

//? segundo milware
server.use("/rickandmorty", router)
//server.use(/user)


server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});