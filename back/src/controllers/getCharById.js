// const axios = require ('axios');

// const getCharById = (res,ID)=>{
//     const url = `https://rickandmortyapi.com/api/character/${ID}`
//     axios.get(url)
//     .then(response => {
//         const { id, name, gender, species, image } = response.data;
//         const character = {
//             id,
//             image,
//             name,
//             gender,
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

// module.exports = getCharById

//?------------------------------------------
// const URl = "https://rickandmortyapi.com/api/character/"

// const  getChatById = (req, res)=> {
//     const params = req.params;

//     axios.get(`${URL}${params.id}`)
//     .then(response => {
//         const { id, name, species, image, gender } =response.data
//         res.json({id, name, species, image, gender })
//     })
//     .catch(error => {
//         res.status(500).json({ message: error.message})
//     })
    
// }

// module.exports = getChatById

//-------------------
const URl = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

async function getChatById (req, res) {
    const { id } = req.params;
    try {
        const response = await axios.get(`${URL}${id}`)
        const character = {
            id : response.data.id,
            name : response.data.name,
            image : response.data.image,
            gender : response.data.gender,
            species : response.data.species
        }
        request.status(200).json(character)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = {getChatById}
// function getChatById (req, res) {
//     const { id } = req.params;
//     axios (URL +id).then(
//         (response)=>{
//         const character = {
//             id : response.data.id,
//             name : response.data.name,
//             image : response.data.image,
//             gender : response.data.gender,
//             species : response.data.species

//         }
//         res.status(200).json(character)
//     },
//     (error) => res.status(500).json({ message: error.message})
//     )
// }

//module.exports = {getChatById}