// const express = require('express');
// const app = express();
// const path = require('path');

// const path1 = path.join(__dirname, 'components');

// app.use(express.static(path1));


// app.listen(3001, () => {
//   console.log("http://localhost:3001");
//   console.log("Server started successfully");
// });
// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static(path.join(__dirname, "components")));

// app.listen(3001, () => {
//   console.log("http://localhost:3001");
// });
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "components")));

app.get("/data", (req, res) => {
  const username = req.query.username;
  const email = req.query.email;

  res.send(`
    <h1>Data Page</h1>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
  `);
});

app.listen(3001, () => {
  console.log("http://localhost:3001");
});

