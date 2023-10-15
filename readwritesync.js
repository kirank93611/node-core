const fs=require("fs");
const path=require("path");  ///synchronous version of fs APIs

const filepath=path.join(process.cwd(),"hello.txt");

const contents =fs.readFileSync(filepath,"utf-8");
console.log("filecontents:",contents);

const upperContents =contents.toUpperCase();

fs.writeFileSync(filepath,upperContents);
console.log("file updated!");

