// var http = require('http');
// var fs = require('fs');
// //?--------------- imports ------------
// const characters = require ('./utils/data')



// //?instancio el puerto
// const PORT = 3001;

// //? creo el server
// http.createServer(function(req, res) {
    
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if (req.url.includes('rickandmorty/character')) {
        
//         let id = req.url.split('/').at(-1);
        

//         let characterFilter = characters.find(char => char.id === Number(id))
//         // var characterFilter = data.filter(char => char.id === Number(id))      

//         res.writeHead(200, {"Content-type": 'application/json'}).end(JSON.stringify(characterFilter))
        
//         }
    

// }).listen(PORT,"localhost")

const http = require ('http')
const getCharById = require('./controllers/getCharById')
const getCharDetail = require('./controllers/getCharDetail')

const PORT = 3001

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("onsearch")){
        const id = req.url.split('/').at(-1)
        getCharById(res,id)
    }

    if (req.url.includes("detail")) {
        const id = req.url.split('/').at(-1)
        getCharDetail(res,id)
    }

}).listen(PORT,'localhost')