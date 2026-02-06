const fs=require("fs");
// const fh=fs.writeFileSync("abcd","utf8");
// fs.closeSync(fh); only needed when we use open sync otherwise it is optional to use
// const data=fs.readFileSync("abcd","utf8");
// console.log(data);
//const asdf=fs.renameSync("abcd","efgh");
const data=fs.appendFileSync("efgh","efhhffgrehfgrgf");
const data1=fs.cpSync("efgh","copy");
