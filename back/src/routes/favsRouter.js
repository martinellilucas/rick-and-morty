const { Router } = require("express");
let favs = require("../utils/favs");

const router = Router();

router.post("/fav", (req, res) => {
  try {
    if (!favs.filter((char) => char.id === req.body.id).length) {
      favs.push(req.body);
      res.status(200).send("Personaje agregado a favoritos");
    } else {
      res.status(200).send("El Personaje ya habia sido agregado");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/fav", (req, res) => {
  res.status(200).json(favs);
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== id);
  res.status(200).json({ response: id + " eliminado" });
});

module.exports = router;
