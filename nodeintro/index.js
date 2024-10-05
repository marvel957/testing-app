const http = require("node:http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plane" });
  res.end("hexctacy will advance, the rest will drop");
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("server running on port 5000");
});
