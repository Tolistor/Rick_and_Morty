// const axios = require('axios');

// const getCharDetail = (res,ID)=>{
//     const url = `https://rickandmortyapi.com/api/character/${ID}`
//     axios.get(url)
//     .then(response => {
//         const { image, name, gender, status, origin, species  } = response.data;
//         const character = {
//             image,
//             name,
//             gender,
//             status,
//             origin,
//             species
//         }
//         res.writeHead(200, { 'Content-Type':'application/json'})
//         .end(JSON.stringify(character))
//     })
//     .catch(err => {
//         res.writeHead(500, { 'Content-Type' : 'text/plain'})
//         .end(err.message)
//     })
// }

// module.exports = getCharDetail;

//?-------------------------------------------------

// const URl = "https://rickandmortyapi.com/api/character/"

// const  getCharDetail = (req, res)=> {
//     const params = req.params;

//     axios.get(`${URL}${params.id}`)
//     .then(response => {
//         const { id, name, species, image, gender, origin } =response.data
//         res.json({id, name, species, image, gender, origin })
//     })
//     .catch(error => {
//         res.status(500).json({ message: error.message})
//     })
    
// }

// module.exports = getCharDetail;
//?---------------------------------------
const URl = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

function getCharDetail (req, res) {
    const { detailId } = req.params;
    axios (URL +detailId).then(
        (response)=>{
        const character = {
            id : response.data.id,
            name : response.data.name,
            image : response.data.image,
            gender : response.data.gender,
            species : response.data.species,
            //Agregamos
            status : response.data.status,
            origin : response.data.origin?.name

        }
        request.status(200).json(character)
    },
    (error) => request.status(500).json(error.message)
    )
}

module.exports = {getCharDetail}