const express = require('express');
const app = express();

const router = require('./routes/urlroutes'); // correct path
const { connection } = require('./config/db'); // correct import

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');

// Connect DB
connection('mongodb://localhost:27017/urlshortener')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error:", err));

  app.get('/',(req,res)=>{
    res.render('index');
  })
// Routes
app.use('/url', router);

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});