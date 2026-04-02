let express = require('express');
let app = express();
let mongoose = require('mongoose');
let User = require('./model/user');
let bcrypt = require('bcrypt');
let path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/2FB")
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
});

// GET route
app.get('/register', (req, res) => {
    res.render('register');
});

// POST route
app.post('/register', async (req, res) => {
    try {
        let { Uname, Upass } = req.body;

        let hash = await bcrypt.hash(Upass, 10);

        let u1 = new User({
            username: Uname,
            password: hash
        });

        await u1.save();

        console.log("registered successfully !!");

        res.send("Registered successfully");
    } catch (err) {
        console.log(err);
        res.send("Error in registration");
    }
});

app.listen(4000, () => {
    console.log("app is running at port 4000");
});