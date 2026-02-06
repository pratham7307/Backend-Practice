const fs=require("fs");
// fs.writeFile("task.txt","Task 4 completed",(err)=>{
//     if(err) {
//         console.error(err);
//         return;}
//     console.log("file written successfully");

//     fs.readFile("task.txt","utf-8",(err,data)=>{
//         if (err){
//             console.error(err);
//             return;}
//         console.log("data readen successfully:",data);
// });
// });

// fs.appendFile("hello.txt","\nLearning fsmodule",(err)=>{
//     if(err){
//         console.error(err);
//         return ;}
//     console.log(" append successfully");
// });

// fs.unlink("task.txt",(err)=>{
//    if(err){
//     console.error(err);
//     return;
//    }
//    console.log("deleted successfully");
// });

//fs.cpSync("hello.txt","backup.txt");
// fs.access("task.txt",fs.constants.F_OK,(err)=>{
//     if(err){
//         console.log("File Not Found");
//         return;
//     }
//     console.log("File exists");
// });
// const fd=fs.openSync("hello.txt","r");
// const buffer=Buffer.alloc(100);
// const bytesread=fs.readSync(fd,buffer,0,buffer.length,0);
// console.log(buffer.toString("utf8",0,bytesread));
// fs.closeSync(fd);

fs.writeFile("secure.txt","This is a secure file",
  { mode: 0o600 },
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("secure.txt created with permission 600");
  }
);
