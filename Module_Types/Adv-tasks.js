const {readFile, writeFile}=require('fs')
console.log("Start");
readFile('../Contents/documents/First.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
   const first=result
   readFile('../Contents/documents/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
const second=result
console.log("Starting the next task");
writeFile('../Contents/documents/welcome.txt',`Hello!!!! Welcome To Swahilipot Hub 
${first},${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Done with this task");
}
)
   })
})