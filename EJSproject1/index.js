const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use((req,res,next)=>{
  console.log("middleware 1...");
  next();
})
app.use((req,res,next)=>{
  console.log("middleware 1...");
  next();
})
app.get('',(req,res)=>{
  let student={
  name:'abcd',
  age:22,
  marks:50,
  email:'rohan@123.com',
  hobbies:['coding','cricket']
}
 // res.render('home',{name:'Pratham'});
 res.render('home',{stu: student });

})
app.listen(3000);