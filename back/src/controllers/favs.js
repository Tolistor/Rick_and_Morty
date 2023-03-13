// const favs = require('../utils/favs');

// router.post('/rickandmorty/fav', (req, res) => {
//     const personaje = req.body;
//     favs.push(personaje);
//     res.status(201).send('Personaje agregado a favoritos');
// });

// router.get('/rickandmorty/fav', (req, res) => {
//     res.status(200).send(favs);
// });

// router.delete('/rickandmorty/fav/:id', (req, res) => {
//     const id = req.params.id;
//     const index = favs.findIndex(personaje => personaje.id === id);
//     if (index !== -1) {
//         favs.splice(index, 1);
//         res.status(200).send('Personaje eliminado de favoritos');
//     } else {
//         res.status(404).send('Personaje no encontrado en favoritos');
//     }
// });

// module.exports = router

//?----------------*---------------
let favs = require('../utils/favs');

function postFav (req, res) {
    favs.push(req.body);
    res.status(201).json(favs)
}

//
function getFavs(req, res){
    res.status(200).json(favs)
}

function deleteFavs(req, res){
    const { id } = req.params
    favs = favs.filter(character => character.id !== Number(id))
    res.status(200).json(favs)
}



module.exports = {postFav, getFavs, deleteFavs}