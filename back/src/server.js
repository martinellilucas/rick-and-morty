require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const morgan = require("morgan");

const server = express();

const PORT = process.env.PORT || 3001;

server.use(cors());

server.use(express.json()); //

server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: ", PORT);
});
