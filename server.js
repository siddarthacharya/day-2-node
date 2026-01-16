const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request received for:", req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("add /users to the url to get the json data");
  } else if (req.url === "/users") {
    const filePath = path.join(__dirname, "data.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
