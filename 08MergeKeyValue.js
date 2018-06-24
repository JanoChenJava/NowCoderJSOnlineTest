let num = readline();
let obj = {};
for (let index = 0; index < num; index++) {
    let line  = readline();
    let arr = line.split(" ")
    if (obj[arr[0]]) {
        obj[arr[0]] += parseInt(arr[index])
    }else{
        obj[arr[0]] = parseInt(arr[index])
    }
    
}

for(let one in obj){
    console.log(one + " " + obj[one]);
}