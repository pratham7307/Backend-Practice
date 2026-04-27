const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/set-cookie", (req, res) => {
    res.cookie("name", "SecFB", {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
    });
    res.send("Cookie is setup");
})
app.get('/get-cookie',(req,res)=>{
    const data=req.cookies.name;
    if(data){
        res.send(data);
    }else{
        res.send("No cookies found");
    }
})

app.get('/delete-cookie',(req,res)=>{
    res.clearCookie("name");
    res.send("Cookies cleared");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})