const axios = require("axios");
const KEY = "a4323caea686.b6efbb9249e0d434a6e8";
const URL = "https://be-a-rym.up.railway.app/api";

const successHandler = (response, res) => {
  const { id, species, gender, image, name } = response.data;

  res.status(200).json({ id, species, gender, image, name });
};

const errorHandler = (error, res) => {
  res.status(500).json({ error: error.message });
};

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((data) => successHandler(data, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = getCharById;
