let mongoose =require('mongoose');

let userschema=mongoose.Schema({
    username:String,
    password:String
});
let User=mongoose.model('user',userschema);
module.exports=User;