const {readFileSync, writeFileSync}=require('fs')
console.log('Start')
const first=readFileSync('../Contents/documents/First.txt','utf8')
const second=readFileSync('../Contents/documents/second.txt','utf8')

writeFileSync(
    '../Contents/documents/result-sync.txt',
`Here is the Result ${first},${second}`,{flag:'a'
})
console.log('Done with the Task');
console.log('Starting another task');