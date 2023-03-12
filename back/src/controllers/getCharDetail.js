const axios = require('axios');

const getCharDetail = (res,ID)=>{
    const url = `https://rickandmortyapi.com/api/character/${ID}`
    axios.get(url)
    .then(response => {
        const { image, name, gender, status, origin, species  } = response.data;
        const character = {
            image,
            name,
            gender,
            status,
            origin,
            species
        }
        res.writeHead(200, { 'Content-Type':'application/json'})
        .end(JSON.stringify(character))
    })
    .catch(err => {
        res.writeHead(500, { 'Content-Type' : 'text/plain'})
        .end(err.message)
    })
}

module.exports = getCharDetail;