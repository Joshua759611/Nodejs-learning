const {readFile, writeFile}=require('fs')
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
writeFile('../Contents/documents/second-result.txt',`Hello Joshua ${first},${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
}
)
   })
})