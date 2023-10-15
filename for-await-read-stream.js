const  fs=require("fs");

const rs=fs.createReadStream("./file.txt");

async function run(){
    for await(const chunk of rs){
        console.log("read",chunk);
    }
    console.log("No more data");
}

run();