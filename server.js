const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request received for:", req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      "add /users to the url to get the json data.\n if you want to access only the first user id add/users1"
    );
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
  } else if (req.url === "/users1") {
    const filePath = path.join(__dirname, "data.json");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        const users = JSON.parse(data);
        const firstuser = users[0];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(firstuser));
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
