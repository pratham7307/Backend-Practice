const fs=require("fs");
const fh=fs.openSync("secfb","w");
//console.log(fh);
fs.writeFileSync(fh,"we are here to ");
fs.closeSync(fh);
// const fa=fs.openSync("secfb",r);
// fs.readFileSync(fa);
// console.log(fa);
const data = fs.readFileSync("secfb", "utf8");
console.log(data);
//console.log(fs.readFileSync(fh));
//console.log(fs.openSync("a.txt", "w")); // 3
// console.log(fs.openSync("b.txt", "w")); // 4
// console.log(fs.openSync("c.txt", "w")); // 5
