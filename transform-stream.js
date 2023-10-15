const fs= require('fs');
const {Transform} =require("stream");
const rs=fs.createReadStream("./file.txt");

const newfile=fs.createWriteStream("./newFile.txt");

const uppercase=new Transform({
    transform(chunk,encoding,callback) {
        callback(null,chunk.toString().toUpperCase());
    }
})

rs.pipe(uppercase).pipe(newfile);