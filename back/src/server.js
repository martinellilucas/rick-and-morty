const http = require("http");
const data = require("./utils/data.js");

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = req.url;

  if (url.includes("rickandmorty/character")) {
    const id = url.split("/").pop();
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(data.find((char) => char.id === id)));
  }
});
