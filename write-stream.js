const fs=require("fs")
const file=fs.createWriteStream("./file.txt");

for(let i=0;i<1000000;i++){
    file.write(
        "Node js is a runtime built on google chrome V8 engine. \n"
    );
}