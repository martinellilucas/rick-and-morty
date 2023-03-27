const axios = require("axios");
const KEY = "a4323caea686.b6efbb9249e0d434a6e8";
const URL = "https://be-a-rym.up.railway.app/api";

const successHandler = (response, res) => {
  const { id, species, gender, image, name } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, species, gender, image, name }));
};

const errorHandler = (error, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((data) => successHandler(data, res))
    .catch((error) => errorHandler(error, res));
};

module.exports = getCharById;
