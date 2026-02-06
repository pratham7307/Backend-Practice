const http = require("http");

let server = http.createServer((request, response) => {
  response.end("server ended");
});

server.listen(3000, "localhost", (err) => {
  if (err) {
    console.log("Error in server setup");
  } else {
    console.log("Server is running on port http://localhost:3000");
  }
});
//topic backened
// header
// url
// status code