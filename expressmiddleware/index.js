const express=require('express');
const app=express();
const reqAge=require('./middleware/middleware');
const router=express.Router();
router.use(reqAge);
//app.use(reqAge);
app.get('',(req,res)=>{
 res.send("welcome to home page!!");
})
app.get('/about',router,(req,res)=>{
 res.send("welcome to about page!!");
})
app.get('/contact',reqAge,(req,res)=>{
 res.send("welcome to contact page!!");
})
app.use(router);
app.listen(4000);