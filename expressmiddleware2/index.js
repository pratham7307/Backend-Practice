const express = require('express');
const app = express();
const users = require('./users.json');
const errorHandler = require('./error');
const fs=require('fs');

// Home route
app.get('/', (req, res) => {
    res.send("welcome to home page!!");
});

// All users
app.get('/users', (req, res) => {
    res.json(users);
});

// HTML list
app.get('/data', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// API users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// ✅ Get user by ID (FIXED)
app.get('/api/users/:id', (req, res, next) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    // If user not found
    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        error.status = "Fail";
        return next(error);
    }

    return res.json(user);
});

app.post('/user',(req,res)=>{
    //will do this with mongodb or postman
    const newdata={
        "id": 401,
        "name": "User1",
        "email": "user1@example.com",
        "address": "House 1, Street 11, City",
        "contact": "+917801492118"
    }
    fs.appendFile('users.json',JSON.stringify(newdata),(err)=>{
console.log(err);
    }
);
res.send("file updated");
})

app.patch('/api/users/:id',(req,res)=>{
    //will do this with mongodb or postman
})

app.delete('/api/users/:id',(req,res)=>{
    //will do this with mongodb or postman
})

// 404 handler
app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.statusCode = 404;
    error.status = "Fail";
    next(error);
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});