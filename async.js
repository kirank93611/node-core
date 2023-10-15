//using the asynchronous APIs

const fs=require("fs");
const path=require("path");

const filepath=path.join(process.cwd(),"hello.txt");

fs.readFile(filepath,"utf-8",(err,contents)=>{
    if(err){
        return console.log(err);
    }
    console.log("File Contents",contents);
    const upperContents=contents.toUpperCase();
    setTimeout(() => updateFile(filepath,upperContents),10);
    // fs.writeFile(filepath,upperContents,function (err) {
    //     if(err) throw err;
    //     console.log("updated!");
    // });  
});
function updateFile(filepath,contents) {
        fs.writeFile(filepath,contents,(err)=>{
            if(err) throw err;
            console.log("perfectly updated,check the hello file");
        });
}

setInterval(() => process.stdout.write("**** \n"),
1).unref();