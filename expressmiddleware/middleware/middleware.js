const reqAge=(req,res,next)=>{
    const age=req.query.age;
    if(!age){
        res.send("Please enter your age!!");
    }
    else if(age<18){
        res.send("You are not allowed to acces the page");
    }
    else{
        next();
    }
};
module.exports=reqAge;