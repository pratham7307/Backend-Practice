const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// View engine
app.set("view engine", "ejs");

// Session setup middleware
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 5*60*1000
    }
  })
);

//Routes
//login page
app.get("/", (req, res) => {
  if (req.session.user) {
    return res.redirect("/home"); 
  }
  res.render("login");
});

// Handle login
app.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.send("Please enter username");
  }

  req.session.user = username;

  res.redirect("/home"); 
});

// home page
app.get("/home", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }

  res.render("home", { user: req.session.user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
// Profile
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }

  res.render("profile", { user: req.session.user });
});

//logout
// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});