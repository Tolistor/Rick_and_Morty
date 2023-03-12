const axios = require ('axios');

const getCharById = (res,ID)=>{
    const url = `https://rickandmortyapi.com/api/character/${ID}`
    axios.get(url)
    .then(response => {
        const { id, name, gender, species, image } = response.data;
        const character = {
            id,
            image,
            name,
            gender,
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

module.exports = getCharById