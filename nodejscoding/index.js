// require("./m1");
// require("./m2");
// (function(){
//     let name="harry";
// console.log(name);
// })();
// (function(){
//     let name="garry";
// console.log(name);
// })();

// const crypto=require("crypto");
// const beforeexe=Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log(Date.now()-beforeexe);

const crypto = require("crypto");
const beforeexe = Date.now();
let count=0;
for(let i=0;i<100;i++){
crypto.pbkdf2( "password","salt",100000,512,"sha512",(err, derivedKey) => {
    count++;
    if (err) throw err;{
    console.log(Date.now() - beforeexe);
  }
});
} 