const {readFileSync, writeFileSync}=require('fs')
const first=readFileSync('../Contents/documents/First.txt','utf8')
const second=readFileSync('../Contents/documents/second.txt','utf8')
const result=readFileSync('../Contents/documents/result-sync.txt','utf8')

console.log(result,first,second)

writeFileSync('../Contents/documents/result-sync.txt',
`Here is the Result ${first},${second}`,{flag:'a'})