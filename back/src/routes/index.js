// const { Router } = require('express')
// const { getCharById } = require('./controllers/getCharById')
// const { getCharDetail } = require('./controllers/getCharDetail')
// const router = Router();
// const favs = require('../utils/favs');

// router.get("/onsearch/:id",getCharById);
// router.get("/detail/:id",getCharDetail);

// // router.post("/rickandmorty/fav",getCharDetail);
// // router.get("/rickandmorty/fav",getCharDetail);
// // router.delete("/rickandmorty/fav/:id",getCharDetail);


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


// module.exports = router;
//---------------------------------
const { Router } = require('express')
const { postFav, getFavs, deleteFavs } = require("../controllers/favs")
const { getChatById } = require('../controllers/getCharById')
const { getCharDetail } = require('../controllers/getCharDetail')

const router = Router();

router.get("/onsearch/:id", getChatById)
router.get("/detail/:detailId", getCharDetail)

router.post("/favs",postFav)
//localhost:301/rickandmorty/favs GET
router.get("/favs",getFavs)
router.delete("/favs/:id",deleteFavs)



module.exports = router;