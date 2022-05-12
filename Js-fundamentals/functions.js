
function getData(name, age){
    console.log(`You are ${name} and aged ${age}`)
    
if(age>20)
console.log(`${name} You are Adult`);
else{
    console.log(`${name} You are a Child`);
}
}
function getFavColor(name,color){
    console.log(`${name} Your Favourate Color is ${color}`)

    if(color='yellow'){
        console.log(`${name} You are likely to be a Kamba`);
    }
    else if(color='blue'){
        console.log(`${name} It is likely you love to drink water`);
    }
    else if(color=''){
        console.log(`Eish!! ${name} You are have no favourite color`);
    }
    else{
        console.log(`${name} You are Good`);
    }
}
getData('Joshua',19)
getFavColor('Joshua','blue')

