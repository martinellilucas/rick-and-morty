const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favs = require("../utils/favs");

const router = Router();

router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res) => {
  if (req.body.id.length) {
    favs.push(req.body);
    res.status(200).send("Personaje agregado a favoritos");
  } else {
    res.status(500).json({ error: "No se pudo agregar a favoritos" });
  }
});

router.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  const character = favs.find((char) => char.id === id);
  if (character) {
    favs.filter((char) => char.id !== id);
    res.status(200).send("Personaje quitado de favoritos");
  } else
    res
      .status(500)
      .json({ error: "El personaje con ese id no se encuentra en favoritos" });
});

module.exports = router;
